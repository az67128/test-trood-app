import React from 'react'
import TTable from '$trood/components/TTable'
import AsyncEntitiesList from '$trood/components/AsyncEntitiesList'
import TIcon, { ICONS_TYPES } from '$trood/components/TIcon'
import { camelToLowerSnake } from '$trood/helpers/namingNotation'
import SmartDate, { SMART_DATE_FORMATS } from '$trood/components/SmartDate'
import { templateApplyValues } from '$trood/helpers/templates'
import { EntityPageLink } from '$trood/pageManager'
import { RESTIFY_CONFIG } from 'redux-restify'
import style from './style.css'

const Table = ({
  config,
  tableEntities,
  tableApiActions,
  tableEditorActions,
  checking,
  editable,
  include,
  exclude,
  form,
  formActions,
  filters,
  search,
}) => {
  const fieldList = Object.keys(config.meta).filter((fieldName) => {
    if (exclude.includes(fieldName)) return false
    if (include.length === 0) return true
    return include.includes(fieldName)
  })

  const sort = form.sortColumn ? `sort(${form.sortOrder > 0 ? '+' : '-'}${form.sortColumn})` : ''

  const filterQuery = filters.reduce((memo, fieldName) => {
    const fieldNameSnake = camelToLowerSnake(fieldName)
    const formField = form[fieldNameSnake]
    if (!formField) return memo

    const field = config.meta[fieldName]

    if (field.linkType && Array.isArray(formField) && formField.length) {
      return [...memo, `in(${fieldNameSnake},(${formField}))`]
    }

    if (field.type === 'datetime') {
      if (formField.periodType === 'all') return memo
      return [
        ...memo,
        `and(ge(${fieldNameSnake},${encodeURIComponent(formField.startDate)}),le(${fieldNameSnake},${encodeURIComponent(
          formField.endDate,
        )}))`,
      ]
    }

    if (field.type === 'number' && (formField.min || formField.max)) {
      const min = formField.min ? `ge(${fieldNameSnake},${formField.min})` : ''
      const max = formField.max ? `ge(${fieldNameSnake},${formField.max})` : ''
      return [...memo, ...(min && max ? [`${memo},and(${min},${max})`] : [`${memo},${min}${max}`])]
    }
    if (field.type === 'bool' && formField && formField[0] !== null) {
      return [...memo, `eq(${fieldNameSnake},${formField})`]
    }
    return memo
  }, [])

  const searchQuery = () => {
    if (!search || !form.search) return []
    const searchFields = Array.isArray(search)
      ? search
      : fieldList.filter((fieldName) => ['string', 'number'].includes(config.meta[fieldName].type))
    const searchArray = searchFields.reduce((memo, fieldName) => {
      const fieldNameSnake = camelToLowerSnake(fieldName)
      const fieldType = config.meta[fieldName].type
      if (fieldType === 'string') {
        return [...memo, `like(${fieldNameSnake},${encodeURIComponent('*' + form.search + '*')})`]
      }

      if (fieldType === 'number') {
        if (!Number.isNaN(parseFloat(form.search))) return memo
        return [...memo, `eq(${fieldNameSnake},${form.search})`]
      }
      console.warn(`Search by field '${fieldNameSnake}' of type '${fieldType}' is not supported`)
      return memo
    }, [])
    return searchArray.length ? [`or(${searchArray.join(',')})`] : []
  }

  const tableApiConfig = {
    filter: {
      q: [sort, ...filterQuery, ...searchQuery()].join(','),
    },
  }

  const tableArray = tableEntities.getArray(tableApiConfig)
  const tableNextPage = tableEntities.getNextPage(tableApiConfig)
  const tableIsLoading = tableEntities.getIsLoadingArray(tableApiConfig)
  const tableNextPageAction = () => tableApiActions.loadNextPage(tableApiConfig)

  const header = fieldList
    .map((fieldName) => {
      const fieldNameSnake = camelToLowerSnake(fieldName)
      const field = config.meta[fieldName]

      if (field.linkType === 'outer') return null

      return {
        title: fieldName,
        name: fieldNameSnake,
        sortable: field.type !== 'generic',
        model: (item) => {
          if (field.linkType) {
            if (!item[fieldName]) return null
            if (field.type === 'objects') {
              if (!item[fieldName].length) return null
              return item[fieldName].map((item2) => {
                const { name, idField, views } = RESTIFY_CONFIG.registeredModels[item2.$modelType]
                const template = views.tableCell || views.default || `${name}/{${idField}}`
                return (
                  <EntityPageLink key={item2[idField]} model={item2}>
                    {templateApplyValues(template, item2)}
                  </EntityPageLink>
                )
              })
            }
            const { name, idField, views } = RESTIFY_CONFIG.registeredModels[item[fieldName].$modelType]
            const template = views.tableCell || views.default || `${name}/{${idField}}`

            return (
              <EntityPageLink key={fieldName} model={item[fieldName]}>
                {templateApplyValues(template, item[fieldName])}
              </EntityPageLink>
            )
          }

          if (field.type === 'bool') {
            return <div key={fieldName}>{item[fieldName] ? 'true' : 'false'}</div>
          }

          if (field.type === 'datetime') {
            return (
              <SmartDate
                {...{
                  key: fieldName,
                  date: item[fieldName],
                  format: SMART_DATE_FORMATS.shortWithTime,
                }}
              />
            )
          }

          if (config.idField === fieldNameSnake) {
            return (
              <EntityPageLink key={fieldName} model={item[fieldName]}>
                {item[fieldName]}
              </EntityPageLink>
            )
          }
          return item[fieldName]
        },
      }
    })
    .filter((v) => v)

  const editColumn = [
    {
      title: 'Edit',
      model: (item) => (
        <TIcon
          {...{
            size: 18,
            type: ICONS_TYPES.edit,
            className: style.editIcon,
            onClick: () => tableEditorActions.editEntity(item),
          }}
        />
      ),
    },
  ]

  return (
    <AsyncEntitiesList
      {...{
        nextPage: tableNextPage,
        isLoading: tableIsLoading,
        nextPageAction: tableNextPageAction,
      }}
    >
      <TTable
        {...{
          rowKey: (item) => `${item.$modelType}_${item[config.idField]}`,
          sortingColumn: form.sortColumn,
          sortingOrder: form.sortOrder,
          onSort: (name, order) => {
            formActions.changeSomeFields({
              sortColumn: name,
              sortOrder: order,
            })
          },
          body: tableArray,
          header: [...header, ...(editable ? editColumn : [])],
          checking,
        }}
      />
    </AsyncEntitiesList>
  )
}

export default Table
