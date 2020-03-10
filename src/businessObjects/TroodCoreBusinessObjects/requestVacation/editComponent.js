import React, { useState } from 'react'
import style from './editComponent.css'
import modalsStyle from '$trood/styles/modals.css'
import classNames from 'classnames'
import TSelect, { SELECT_TYPES } from '$trood/components/TSelect'
import { RESTIFY_CONFIG } from 'redux-restify'
import DateTimePicker, { PICKER_TYPES } from '$trood/components/DateTimePicker'
import TInput, { INPUT_TYPES } from '$trood/components/TInput'


const EditComponent = ({
  statusRequestVacationApiActions,
  statusRequestVacationEntities,
  employeeApiActions,
  employeeEntities,
  modelFormActions,
  modelErrors,
  model, 
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
      
  const [statusRequestVacationSearch, statusRequestVacationSearchSet] = useState('')
  const statusRequestVacationModelConfig = RESTIFY_CONFIG.registeredModels.statusRequestVacation
  const statusRequestVacationApiConfig = {
    filter: {
      q: statusRequestVacationSearch 
        ? `eq(${statusRequestVacationModelConfig.idField},${statusRequestVacationSearch})`
        : '',
      depth: 1,
    },
  }
  const statusRequestVacationArray = statusRequestVacationEntities.getArray(statusRequestVacationApiConfig)
  const statusRequestVacationArrayIsLoading = statusRequestVacationEntities.getIsLoadingArray(
    statusRequestVacationApiConfig,
  )
  const statusRequestVacationNextPage = statusRequestVacationEntities.getNextPage(statusRequestVacationApiConfig)
  const statusRequestVacationNextPageAction = () => {
    if (statusRequestVacationNextPage) {
      statusRequestVacationApiActions.loadNextPage(statusRequestVacationApiConfig)
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
          missingValueResolver: value => employeeEntities.getById(value)['author'],
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
      <TSelect
        {...{
          className: modalsStyle.control,
          items: statusRequestVacationArray.map(item => ({
            value: item[statusRequestVacationModelConfig.idField], 
            label: item.name || item[statusRequestVacationModelConfig.idField],
          })),
          values: model.statusRequestVacation 
            ? [model.statusRequestVacation] 
            : [],
          onChange: vals => modelFormActions.changeField('statusRequestVacation',
            vals[0],
          ),
          onSearch: (value) => statusRequestVacationSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: statusRequestVacationArrayIsLoading ? '' : undefined,
          onScrollToEnd: statusRequestVacationNextPageAction,
          isLoading: statusRequestVacationArrayIsLoading,
          missingValueResolver: value => statusRequestVacationEntities.getById(value)['statusRequestVacation'],
          label: 'statusRequestVacation',
          errors: modelErrors.statusRequestVacation,
          onValid: () => modelFormActions.resetFieldError('statusRequestVacation'),
          onInvalid: err => modelFormActions.setFieldError('statusRequestVacation', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: false,
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
            label: 'statusDate',
            className: modalsStyle.control,
            value: model.statusDate,
            errors: modelErrors.statusDate,
            onChange: val => modelFormActions.changeField('statusDate', val),
            onValid: () => modelFormActions.resetFieldError('statusDate'),
            onInvalid: err => modelFormActions.setFieldError('statusDate', err),
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
            type: INPUT_TYPES.multi,
            label: 'number',
            className: modalsStyle.control,
            value: model.number,
            errors: modelErrors.number,
            onChange: val => modelFormActions.changeField('number', val),
            onValid: () => modelFormActions.resetFieldError('number'),
            onInvalid: err => modelFormActions.setFieldError('number', err),
            validate: {
              checkOnBlur: true,
              required: false,
            },
          }}
      />
    </div>
  )
}

export default EditComponent