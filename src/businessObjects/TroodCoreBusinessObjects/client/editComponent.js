import React, { useState } from 'react'
import style from './editComponent.css'
import modalsStyle from '$trood/styles/modals.css'
import classNames from 'classnames'
import TInput, { INPUT_TYPES } from '$trood/components/TInput'
import TSelect, { SELECT_TYPES } from '$trood/components/TSelect'
import { RESTIFY_CONFIG } from 'redux-restify'
import DateTimePicker, { PICKER_TYPES } from '$trood/components/DateTimePicker'


const EditComponent = ({
  conflictStatusApiActions,
  conflictStatusEntities,
  clientTypeApiActions,
  clientTypeEntities,
  employeeApiActions,
  employeeEntities,
  clientActiveStatusApiActions,
  clientActiveStatusEntities,
  modelFormActions,
  modelErrors,
  model, 
}) => {
  const [clientActiveStatusSearch, clientActiveStatusSearchSet] = useState('')
  const clientActiveStatusModelConfig = RESTIFY_CONFIG.registeredModels.clientActiveStatus
  const clientActiveStatusApiConfig = {
    filter: {
      q: clientActiveStatusSearch 
        ? `eq(${clientActiveStatusModelConfig.idField},${clientActiveStatusSearch})`
        : '',
      depth: 1,
    },
  }
  const clientActiveStatusArray = clientActiveStatusEntities.getArray(clientActiveStatusApiConfig)
  const clientActiveStatusArrayIsLoading = clientActiveStatusEntities.getIsLoadingArray(
    clientActiveStatusApiConfig,
  )
  const clientActiveStatusNextPage = clientActiveStatusEntities.getNextPage(clientActiveStatusApiConfig)
  const clientActiveStatusNextPageAction = () => {
    if (clientActiveStatusNextPage) {
      clientActiveStatusApiActions.loadNextPage(clientActiveStatusApiConfig)
    }
  }
      
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
      
  const [clientTypeSearch, clientTypeSearchSet] = useState('')
  const clientTypeModelConfig = RESTIFY_CONFIG.registeredModels.clientType
  const clientTypeApiConfig = {
    filter: {
      q: clientTypeSearch 
        ? `eq(${clientTypeModelConfig.idField},${clientTypeSearch})`
        : '',
      depth: 1,
    },
  }
  const clientTypeArray = clientTypeEntities.getArray(clientTypeApiConfig)
  const clientTypeArrayIsLoading = clientTypeEntities.getIsLoadingArray(
    clientTypeApiConfig,
  )
  const clientTypeNextPage = clientTypeEntities.getNextPage(clientTypeApiConfig)
  const clientTypeNextPageAction = () => {
    if (clientTypeNextPage) {
      clientTypeApiActions.loadNextPage(clientTypeApiConfig)
    }
  }
      
  const [conflictStatusSearch, conflictStatusSearchSet] = useState('')
  const conflictStatusModelConfig = RESTIFY_CONFIG.registeredModels.conflictStatus
  const conflictStatusApiConfig = {
    filter: {
      q: conflictStatusSearch 
        ? `eq(${conflictStatusModelConfig.idField},${conflictStatusSearch})`
        : '',
      depth: 1,
    },
  }
  const conflictStatusArray = conflictStatusEntities.getArray(conflictStatusApiConfig)
  const conflictStatusArrayIsLoading = conflictStatusEntities.getIsLoadingArray(
    conflictStatusApiConfig,
  )
  const conflictStatusNextPage = conflictStatusEntities.getNextPage(conflictStatusApiConfig)
  const conflictStatusNextPageAction = () => {
    if (conflictStatusNextPage) {
      conflictStatusApiActions.loadNextPage(conflictStatusApiConfig)
    }
  }
      
  return (
    <div className={classNames(style.root, modalsStyle.root)}>
      <TInput
          {...{
            type: INPUT_TYPES.multi,
            label: 'name',
            className: modalsStyle.control,
            value: model.name,
            errors: modelErrors.name,
            onChange: val => modelFormActions.changeField('name', val),
            onValid: () => modelFormActions.resetFieldError('name'),
            onInvalid: err => modelFormActions.setFieldError('name', err),
            validate: {
              checkOnBlur: true,
              required: true,
            },
          }}
      />
      <TSelect
        {...{
          className: modalsStyle.control,
          items: clientActiveStatusArray.map(item => ({
            value: item[clientActiveStatusModelConfig.idField], 
            label: item.name || item[clientActiveStatusModelConfig.idField],
          })),
          values: model.clientActiveStatus 
            ? [model.clientActiveStatus] 
            : [],
          onChange: vals => modelFormActions.changeField('clientActiveStatus',
            vals[0],
          ),
          onSearch: (value) => clientActiveStatusSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: clientActiveStatusArrayIsLoading ? '' : undefined,
          onScrollToEnd: clientActiveStatusNextPageAction,
          isLoading: clientActiveStatusArrayIsLoading,
          missingValueResolver: value => clientActiveStatusEntities.getById(value)['clientActiveStatus'],
          label: 'clientActiveStatus',
          errors: modelErrors.clientActiveStatus,
          onValid: () => modelFormActions.resetFieldError('clientActiveStatus'),
          onInvalid: err => modelFormActions.setFieldError('clientActiveStatus', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: true,
          placeHolder: 'Not set',
        }}
      />
      <TSelect
        {...{
          className: modalsStyle.control,
          items: employeeArray.map(item => ({
            value: item[employeeModelConfig.idField], 
            label: item.name || item[employeeModelConfig.idField],
          })),
          values: model.responsible 
            ? [model.responsible] 
            : [],
          onChange: vals => modelFormActions.changeField('responsible',
            vals[0],
          ),
          onSearch: (value) => employeeSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: employeeArrayIsLoading ? '' : undefined,
          onScrollToEnd: employeeNextPageAction,
          isLoading: employeeArrayIsLoading,
          missingValueResolver: value => employeeEntities.getById(value)['responsible'],
          label: 'responsible',
          errors: modelErrors.responsible,
          onValid: () => modelFormActions.resetFieldError('responsible'),
          onInvalid: err => modelFormActions.setFieldError('responsible', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: true,
          placeHolder: 'Not set',
        }}
      />
      <TSelect
        {...{
          className: modalsStyle.control,
          items: clientTypeArray.map(item => ({
            value: item[clientTypeModelConfig.idField], 
            label: item.name || item[clientTypeModelConfig.idField],
          })),
          values: model.clientType 
            ? [model.clientType] 
            : [],
          onChange: vals => modelFormActions.changeField('clientType',
            vals[0],
          ),
          onSearch: (value) => clientTypeSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: clientTypeArrayIsLoading ? '' : undefined,
          onScrollToEnd: clientTypeNextPageAction,
          isLoading: clientTypeArrayIsLoading,
          missingValueResolver: value => clientTypeEntities.getById(value)['clientType'],
          label: 'clientType',
          errors: modelErrors.clientType,
          onValid: () => modelFormActions.resetFieldError('clientType'),
          onInvalid: err => modelFormActions.setFieldError('clientType', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: true,
          placeHolder: 'Not set',
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
      <DateTimePicker
          {...{
            label: 'conflictCheckDate',
            className: modalsStyle.control,
            value: model.conflictCheckDate,
            errors: modelErrors.conflictCheckDate,
            onChange: val => modelFormActions.changeField('conflictCheckDate', val),
            onValid: () => modelFormActions.resetFieldError('conflictCheckDate'),
            onInvalid: err => modelFormActions.setFieldError('conflictCheckDate', err),
            type: PICKER_TYPES.dateTime,
            validate: {
              checkOnBlur: true,
              requiredDate: false,
              requiredTime: false,

          },
        }}
      />
      <TInput
          {...{
            type: INPUT_TYPES.float,
            label: 'revenue',
            className: modalsStyle.control,
            value: model.revenue,
            errors: modelErrors.revenue,
            onChange: val => modelFormActions.changeField('revenue', val),
            onValid: () => modelFormActions.resetFieldError('revenue'),
            onInvalid: err => modelFormActions.setFieldError('revenue', err),
            validate: {
              checkOnBlur: true,
              required: false,
            },
          }}
      />
      <TSelect
        {...{
          className: modalsStyle.control,
          items: conflictStatusArray.map(item => ({
            value: item[conflictStatusModelConfig.idField], 
            label: item.name || item[conflictStatusModelConfig.idField],
          })),
          values: model.conflictStatus 
            ? [model.conflictStatus] 
            : [],
          onChange: vals => modelFormActions.changeField('conflictStatus',
            vals[0],
          ),
          onSearch: (value) => conflictStatusSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: conflictStatusArrayIsLoading ? '' : undefined,
          onScrollToEnd: conflictStatusNextPageAction,
          isLoading: conflictStatusArrayIsLoading,
          missingValueResolver: value => conflictStatusEntities.getById(value)['conflictStatus'],
          label: 'conflictStatus',
          errors: modelErrors.conflictStatus,
          onValid: () => modelFormActions.resetFieldError('conflictStatus'),
          onInvalid: err => modelFormActions.setFieldError('conflictStatus', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: false,
          placeHolder: 'Not set',
        }}
      />
    </div>
  )
}

export default EditComponent