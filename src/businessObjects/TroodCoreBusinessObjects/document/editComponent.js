import React, { useState } from 'react'
import style from './editComponent.css'
import modalsStyle from '$trood/styles/modals.css'
import classNames from 'classnames'
import TSelect, { SELECT_TYPES } from '$trood/components/TSelect'
import { RESTIFY_CONFIG } from 'redux-restify'
import TInput, { INPUT_TYPES } from '$trood/components/TInput'
import DateTimePicker, { PICKER_TYPES } from '$trood/components/DateTimePicker'
import { snakeToCamel } from '$trood/helpers/namingNotation'

const EditComponent = ({
  docCustomTypeApiActions,
  docCustomTypeEntities,
  targetObjectApiActions,
  targetObjectEntities,
  employeeApiActions,
  employeeEntities,
  modelFormActions,
  modelErrors,
  model,
  ...restProps 
}) => {
  const [employeeSearch, employeeSearchSet] = useState('')
  const employeeModelConfig = RESTIFY_CONFIG.registeredModels.employee
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
      <TSelect
        {...{
          className: modalsStyle.control,
          items: employeeArray.map(item => ({
            value: item[employeeModelConfig.idField], 
            label: item.name || item[employeeModelConfig.idField],
          })),
          values: model.author 
            ? [model.author] 
            : [],
          onChange: vals => modelFormActions.changeField('author',
            vals[0],
          ),
          onSearch: (value) => employeeSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: employeeArrayIsLoading ? '' : undefined,
          onScrollToEnd: employeeNextPageAction,
          isLoading: employeeArrayIsLoading,
          missingValueResolver: value => 
            employeeEntities.getById(value)[employeeModelConfig.idField],
          label: 'author',
          errors: modelErrors.author,
          onValid: () => modelFormActions.resetFieldError('author'),
          onInvalid: err => modelFormActions.setFieldError('author', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: true,
          placeHolder: 'Not set',
        }}
      />
      <TInput
        {...{
          type: INPUT_TYPES.multi,
          label: 'file',
          className: modalsStyle.control,
          value: model.file,
          errors: modelErrors.file,
          onChange: val => modelFormActions.changeField('file', val),
          onValid: () => modelFormActions.resetFieldError('file'),
          onInvalid: err => modelFormActions.setFieldError('file', err),
          validate: {
            checkOnBlur: true,
            required: true,
          },
        }}
      />
      <div className={style.row}>
        <TSelect 
          {...{
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
            type: SELECT_TYPES.filterDropdown,
            clearable: true,
            values: model.targetObject && model.targetObject._object ? [model.targetObject._object] : [],
            placeHolder: 'Not set',
            onChange: vals => modelFormActions.changeField('targetObject', { _object: vals[0] }),
            onInvalid: err => modelFormActions.setFieldError('targetObject', err),
            validate: {
              checkOnBlur: true,
              required: true,
            },
          }} 
        />
        <TSelect
          {...{
            items: targetObjectArray.map(item => ({
              value: item[targetObjectModelConfig.idField], 
              label: item.name || item[targetObjectModelConfig.idField],
            })),
            values: model.targetObject[targetObjectModelConfig.idField]  
              ? [model.targetObject[targetObjectModelConfig.idField] ] 
              : [],
            onChange: vals => modelFormActions.changeField(['targetObject', targetObjectModelConfig.idField],
              vals[0],
            ),
            onSearch: (value) => targetObjectSearchSet(value ? encodeURIComponent(value) : ''),
            emptyItemsLabel: targetObjectArrayIsLoading ? '' : undefined,
            onScrollToEnd: targetObjectNextPageAction,
            isLoading: targetObjectArrayIsLoading,
            label: 'targetObject',
            errors: modelErrors.targetObject,
            onValid: () => modelFormActions.resetFieldError('targetObject'),
            onInvalid: err => modelFormActions.setFieldError('targetObject', err),
            type: SELECT_TYPES.filterDropdown,
            multi: false,
            clearable: true,
            placeHolder: 'Not set',
          }}
        />
      </div>
      <TInput
        {...{
          type: INPUT_TYPES.multi,
          label: 'documentType',
          className: modalsStyle.control,
          value: model.documentType,
          errors: modelErrors.documentType,
          onChange: val => modelFormActions.changeField('documentType', val),
          onValid: () => modelFormActions.resetFieldError('documentType'),
          onInvalid: err => modelFormActions.setFieldError('documentType', err),
          validate: {
            checkOnBlur: true,
            required: true,
          },
        }}
      />
      <DateTimePicker
        {...{
          label: 'created',
          className: modalsStyle.control,
          value: model.created,
          errors: modelErrors.created,
          onChange: val => modelFormActions.changeField('created', val),
          onValid: () => modelFormActions.resetFieldError('created'),
          onInvalid: err => modelFormActions.setFieldError('created', err),
          type: PICKER_TYPES.dateTime,
          validate: {
            checkOnBlur: true,
            requiredDate: false,
            requiredTime: false,
          },
        }}
      />
      <TSelect
        {...{
          className: modalsStyle.control,
          items: docCustomTypeArray.map(item => ({
            value: item[docCustomTypeModelConfig.idField], 
            label: item.name || item[docCustomTypeModelConfig.idField],
          })),
          values: model.docCustomType 
            ? [model.docCustomType] 
            : [],
          onChange: vals => modelFormActions.changeField('docCustomType',
            vals[0],
          ),
          onSearch: (value) => docCustomTypeSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: docCustomTypeArrayIsLoading ? '' : undefined,
          onScrollToEnd: docCustomTypeNextPageAction,
          isLoading: docCustomTypeArrayIsLoading,
          missingValueResolver: value => 
            docCustomTypeEntities.getById(value)[docCustomTypeModelConfig.idField],
          label: 'docCustomType',
          errors: modelErrors.docCustomType,
          onValid: () => modelFormActions.resetFieldError('docCustomType'),
          onInvalid: err => modelFormActions.setFieldError('docCustomType', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: false,
          placeHolder: 'Not set',
        }}
      />
      <TInput
        {...{
          type: INPUT_TYPES.multi,
          label: 'description',
          className: modalsStyle.control,
          value: model.description,
          errors: modelErrors.description,
          onChange: val => modelFormActions.changeField('description', val),
          onValid: () => modelFormActions.resetFieldError('description'),
          onInvalid: err => modelFormActions.setFieldError('description', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TInput
        {...{
          type: INPUT_TYPES.multi,
          label: 'filename',
          className: modalsStyle.control,
          value: model.filename,
          errors: modelErrors.filename,
          onChange: val => modelFormActions.changeField('filename', val),
          onValid: () => modelFormActions.resetFieldError('filename'),
          onInvalid: err => modelFormActions.setFieldError('filename', err),
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