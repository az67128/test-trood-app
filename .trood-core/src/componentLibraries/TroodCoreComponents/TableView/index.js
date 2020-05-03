import React from 'react'
import TTable from '$trood/components/TTable'
import AsyncEntitiesList from '$trood/components/AsyncEntitiesList'
import TIcon, { ICONS_TYPES } from '$trood/components/TIcon'
import { camelToLowerSnake } from '$trood/helpers/namingNotation'
import basePageLayout from '$trood/styles/basePageLayout.css'
import SmartDate, { SMART_DATE_FORMATS } from '$trood/components/SmartDate'
import { templateApplyValues } from '$trood/helpers/templates'
import { RESTIFY_CONFIG } from 'redux-restify'
import { EntityPageLink } from '$trood/pageManager'
import Filters from './Filters'
import style from './style.css'

const TableView = ({
  tableEntities,
  tableApiActions,
  tableEditorActions = {},
  checking = false,
  editable = false,
  include = [],
  exclude = [],
  form,
  formActions,
  ...restProps
}) => {
  const config = RESTIFY_CONFIG.registeredModels[tableEntities.modelType]
  // console.log(form)

  const fieldList = Object.keys(config.meta).filter((fieldName) => {
    if (exclude.includes(fieldName)) return false
    if (include.length === 0) return true
    return include.includes(fieldName)
  })

  const sort = form.sortColumn ? `sort(${form.sortOrder > 0 ? '+' : '-'}${form.sortColumn})` : ''
  const filterQuery = fieldList.reduce((memo, fieldName) => {
    const fieldNameSnake = camelToLowerSnake(fieldName)
    const formField = form[fieldNameSnake]
    
    if (!formField) return memo
    const field = config.meta[fieldName]

    if (field.linkType && Array.isArray(formField)) {
      return memo + (formField.length ? `,in(${fieldNameSnake},(${formField}))` : '')
    }

    if (field.type === 'datetime') {
      if (formField.periodType === 'all') return memo
      return `${memo},and(ge(${fieldNameSnake},${encodeURIComponent(
        formField.startDate,
      )}),le(${fieldNameSnake},${encodeURIComponent(formField.endDate)}))`
    }

    if (field.type === 'number' && (formField.min || formField.max)) {
      const min = formField.min ? `ge(${fieldNameSnake},${formField.min})` : ''
      const max = formField.max ? `ge(${fieldNameSnake},${formField.max})` : ''
      return min && max ? `${memo},and(${min},${max})` : `${memo},${min}${max}`
    }
    return memo
  }, '')

  // console.log(filterQuery)

  const tableApiConfig = {
    filter: {
      q: sort + filterQuery,
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
              <EntityPageLink model={item[fieldName]}>{templateApplyValues(template, item[fieldName])}</EntityPageLink>
            )
          }

          if (field.type === 'bool') {
            return item[fieldName] ? 'true' : 'false'
          }

          if (field.type === 'datetime') {
            return (
              <SmartDate
                {...{
                  date: item[field.name],
                  format: SMART_DATE_FORMATS.shortWithTime,
                }}
              />
            )
          }

          if (config.idField === fieldNameSnake) {
            return <EntityPageLink model={item[fieldName]}>{item[fieldName]}</EntityPageLink>
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
    <div className={basePageLayout.block}>
      <Filters {...{ fieldList, config, form, formActions, ...restProps }} />
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
    </div>
  )
}

export default TableView
