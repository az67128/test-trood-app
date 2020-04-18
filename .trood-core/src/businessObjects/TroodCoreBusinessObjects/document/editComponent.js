import React, { useState } from 'react'
import style from './editComponent.css'
import modalsStyle from '$trood/styles/modals.css'
import classNames from 'classnames'
import { RESTIFY_CONFIG } from 'redux-restify'
import { templateApplyValues } from '$trood/helpers/templates'
import { INPUT_TYPES } from '$trood/components/TInput'
import { PICKER_TYPES } from '$trood/components/DateTimePicker'
import { snakeToCamel } from '$trood/helpers/namingNotation'

const EditComponent = ({
  docCustomTypeApiActions,
  docCustomTypeEntities,
  modelFormActions,
  model,
  targetObjectApiActions,
  targetObjectEntities,
  employeeApiActions,
  employeeEntities,
  ModalComponents,
  ...restProps 
}) => {
  const [employeeSearch, employeeSearchSet] = useState('')
  const employeeModelConfig = RESTIFY_CONFIG.registeredModels.employee
  const employeeTemplate = employeeModelConfig.views.selectOption ||
    employeeModelConfig.views.default ||
    `employee/{${employeeModelConfig.idField}}`
  const employeeApiConfig = {
    filter: {
      q: employeeSearch 
        ? `eq(${employeeModelConfig.idField},${employeeSearch})`
        : '',
      depth: 1,
    },
  }
  const employeeArray = employeeEntities.getArray(employeeApiConfig)
  const employeeArrayIsLoading = employeeEntities.getIsLoadingArray(
    employeeApiConfig,
  )
  const employeeNextPage = employeeEntities.getNextPage(employeeApiConfig)
  const employeeNextPageAction = () => {
    if (employeeNextPage) {
      employeeApiActions.loadNextPage(employeeApiConfig)
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
      
  const [docCustomTypeSearch, docCustomTypeSearchSet] = useState('')
  const docCustomTypeModelConfig = RESTIFY_CONFIG.registeredModels.docCustomType
  const docCustomTypeTemplate = docCustomTypeModelConfig.views.selectOption ||
    docCustomTypeModelConfig.views.default ||
    `docCustomType/{${docCustomTypeModelConfig.idField}}`
  const docCustomTypeApiConfig = {
    filter: {
      q: docCustomTypeSearch 
        ? `eq(${docCustomTypeModelConfig.idField},${docCustomTypeSearch})`
        : '',
      depth: 1,
    },
  }
  const docCustomTypeArray = docCustomTypeEntities.getArray(docCustomTypeApiConfig)
  const docCustomTypeArrayIsLoading = docCustomTypeEntities.getIsLoadingArray(
    docCustomTypeApiConfig,
  )
  const docCustomTypeNextPage = docCustomTypeEntities.getNextPage(docCustomTypeApiConfig)
  const docCustomTypeNextPageAction = () => {
    if (docCustomTypeNextPage) {
      docCustomTypeApiActions.loadNextPage(docCustomTypeApiConfig)
    }
  }
      
  return (
    <div className={classNames(style.root, modalsStyle.root)}>
      <ModalComponents.ModalSelect
        {...{
          fieldName: 'author',
          items: employeeArray.map(item => ({
            value: item[employeeModelConfig.idField], 
            label: templateApplyValues(employeeTemplate, item),
          })),
          onSearch: (value) => employeeSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: employeeArrayIsLoading ? '' : undefined,
          onScrollToEnd: employeeNextPageAction,
          isLoading: employeeArrayIsLoading,
          missingValueResolver: value => 
            employeeEntities.getById(value)[employeeModelConfig.idField],
          multi: false,
          clearable: false,
        }}
      />
      <ModalComponents.ModalInput
        {...{
          fieldName: 'file',
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
              { value: 'activity' },
              { value: 'matter' },
              { value: 'client' },
              { value: 'invoice' },
              { value: 'candidate' },
              { value: 'employee' },
              { value: 'bill' },
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
      <ModalComponents.ModalInput
        {...{
          fieldName: 'documentType',
          type: INPUT_TYPES.multi,
          validate: {
            checkOnBlur: true,
            required: true,
          },
        }}
      />
      <ModalComponents.ModalDateTimePicker
        {...{
          fieldName: 'created',
          type: PICKER_TYPES.dateTime,
          validate: {
            checkOnBlur: true,
            requiredDate: false,
            requiredTime: false,
          },
        }}
      />
      <ModalComponents.ModalSelect
        {...{
          fieldName: 'docCustomType',
          items: docCustomTypeArray.map(item => ({
            value: item[docCustomTypeModelConfig.idField], 
            label: templateApplyValues(docCustomTypeTemplate, item),
          })),
          onSearch: (value) => docCustomTypeSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: docCustomTypeArrayIsLoading ? '' : undefined,
          onScrollToEnd: docCustomTypeNextPageAction,
          isLoading: docCustomTypeArrayIsLoading,
          missingValueResolver: value => 
            docCustomTypeEntities.getById(value)[docCustomTypeModelConfig.idField],
          multi: false,
          clearable: true,
        }}
      />
      <ModalComponents.ModalInput
        {...{
          fieldName: 'description',
          type: INPUT_TYPES.multi,
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <ModalComponents.ModalInput
        {...{
          fieldName: 'filename',
          type: INPUT_TYPES.multi,
          validate: {
            checkOnBlur: true,
            required: true,
          },
        }}
      />
    </div>
  )
}

export default EditComponent