import React, { useState } from 'react'
import style from './editComponent.css'
import modalsStyle from '$trood/styles/modals.css'
import classNames from 'classnames'
import { RESTIFY_CONFIG } from 'redux-restify'
import { templateApplyValues } from '$trood/helpers/templates'
import { INPUT_TYPES } from '$trood/components/TInput'
import { snakeToCamel } from '$trood/helpers/namingNotation'

const EditComponent = ({
  modelFormActions,
  model,
  targetObjectApiActions,
  targetObjectEntities,
  contactTypeApiActions,
  contactTypeEntities,
  ModalComponents,
  ...restProps 
}) => {
  const [contactTypeSearch, contactTypeSearchSet] = useState('')
  const contactTypeModelConfig = RESTIFY_CONFIG.registeredModels.contactType
  const contactTypeTemplate = contactTypeModelConfig.views.selectOption ||
    contactTypeModelConfig.views.default ||
    `contactType/{${contactTypeModelConfig.idField}}`
  const contactTypeApiConfig = {
    filter: {
      q: contactTypeSearch 
        ? `eq(${contactTypeModelConfig.idField},${contactTypeSearch})`
        : '',
      depth: 1,
    },
  }
  const contactTypeArray = contactTypeEntities.getArray(contactTypeApiConfig)
  const contactTypeArrayIsLoading = contactTypeEntities.getIsLoadingArray(
    contactTypeApiConfig,
  )
  const contactTypeNextPage = contactTypeEntities.getNextPage(contactTypeApiConfig)
  const contactTypeNextPageAction = () => {
    if (contactTypeNextPage) {
      contactTypeApiActions.loadNextPage(contactTypeApiConfig)
    }
  }
      
  const targetObjectModelName = snakeToCamel(model.targetObject._object)
  const targetObjectGenericEnteties = restProps[targetObjectModelName + 'Entities']
  const [targetObjectSearch, targetObjectSearchSet] = useState('')
  const targetObjectModelConfig = RESTIFY_CONFIG.registeredModels[targetObjectModelName]
  const targetObjectTemplate = targetObjectModelConfig.views.selectOption ||
    targetObjectModelConfig.views.default ||
    `targetObject/{${targetObjectModelConfig.idField}}`
  const targetObjectApiConfig = {
    filter: {
      q: targetObjectSearch 
        ? `eq(${targetObjectModelConfig.idField},${targetObjectSearch})`
        : '',
      depth: 1,
    },
  }
  const targetObjectArray = targetObjectGenericEnteties.getArray(targetObjectApiConfig)
  const targetObjectArrayIsLoading = targetObjectGenericEnteties.getIsLoadingArray(
    targetObjectApiConfig,
  )
  const targetObjectNextPage = targetObjectGenericEnteties.getNextPage(targetObjectApiConfig)
  const targetObjectNextPageAction = () => {
    if (targetObjectNextPage) {
      restProps[targetObjectModelName + 'ApiActions'].loadNextPage(targetObjectApiConfig)
    }
  }
      
  return (
    <div className={classNames(style.root, modalsStyle.root)}>
      <ModalComponents.ModalSelect
        {...{
          fieldName: 'contactType',
          items: contactTypeArray.map(item => ({
            value: item[contactTypeModelConfig.idField], 
            label: templateApplyValues(contactTypeTemplate, item),
          })),
          onSearch: (value) => contactTypeSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: contactTypeArrayIsLoading ? '' : undefined,
          onScrollToEnd: contactTypeNextPageAction,
          isLoading: contactTypeArrayIsLoading,
          missingValueResolver: value => 
            contactTypeEntities.getById(value)[contactTypeModelConfig.idField],
          multi: false,
          clearable: false,
        }}
      />
      <ModalComponents.ModalInput
        {...{
          fieldName: 'value',
          type: INPUT_TYPES.multi,
          validate: {
            checkOnBlur: true,
            required: true,
          },
        }}
      />
      <div className={style.row}>
        <ModalComponents.ModalSelect
          {...{
            fieldName: ['targetObject', '_object'],
            className: undefined,
            label: 'targetObject_type',
            items: [
              { value: 'employee' },
              { value: 'contact_person' },
              { value: 'client' },
              { value: 'candidate' },
            ],
            clearable: false,
            onChange: vals => modelFormActions.changeField('targetObject', { _object: vals[0] }),
            validate: {
              checkOnBlur: true,
              required: true,
            },
          }} 
        />
        <ModalComponents.ModalSelect
          {...{
            fieldName: ['targetObject', targetObjectModelConfig.idField],
            items: targetObjectArray.map(item => ({
              value: item[targetObjectModelConfig.idField], 
              label: templateApplyValues(targetObjectTemplate, item),
            })),
            onSearch: (value) => targetObjectSearchSet(value ? encodeURIComponent(value) : ''),
            emptyItemsLabel: targetObjectArrayIsLoading ? '' : undefined,
            onScrollToEnd: targetObjectNextPageAction,
            isLoading: targetObjectArrayIsLoading,
            multi: false,
            clearable: false,
          }}
        />
      </div>
    </div>
  )
}

export default EditComponent