import React, { useState } from 'react'
import style from './editComponent.css'
import modalsStyle from '$trood/styles/modals.css'
import classNames from 'classnames'
import TSelect, { SELECT_TYPES } from '$trood/components/TSelect'
import { RESTIFY_CONFIG } from 'redux-restify'
import TInput, { INPUT_TYPES } from '$trood/components/TInput'
import DateTimePicker, { PICKER_TYPES } from '$trood/components/DateTimePicker'


const EditComponent = ({
  vacancyStatusApiActions,
  vacancyStatusEntities,
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
      
  const [vacancyStatusSearch, vacancyStatusSearchSet] = useState('')
  const vacancyStatusModelConfig = RESTIFY_CONFIG.registeredModels.vacancyStatus
  const vacancyStatusApiConfig = {
    filter: {
      q: vacancyStatusSearch 
        ? `eq(${vacancyStatusModelConfig.idField},${vacancyStatusSearch})`
        : '',
      depth: 1,
    },
  }
  const vacancyStatusArray = vacancyStatusEntities.getArray(vacancyStatusApiConfig)
  const vacancyStatusArrayIsLoading = vacancyStatusEntities.getIsLoadingArray(
    vacancyStatusApiConfig,
  )
  const vacancyStatusNextPage = vacancyStatusEntities.getNextPage(vacancyStatusApiConfig)
  const vacancyStatusNextPageAction = () => {
    if (vacancyStatusNextPage) {
      vacancyStatusApiActions.loadNextPage(vacancyStatusApiConfig)
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
          values: model.recruiter 
            ? [model.recruiter] 
            : [],
          onChange: vals => modelFormActions.changeField('recruiter',
            vals[0],
          ),
          onSearch: (value) => employeeSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: employeeArrayIsLoading ? '' : undefined,
          onScrollToEnd: employeeNextPageAction,
          isLoading: employeeArrayIsLoading,
          missingValueResolver: value => 
            employeeEntities.getById(value)[employeeModelConfig.idField],
          label: 'recruiter',
          errors: modelErrors.recruiter,
          onValid: () => modelFormActions.resetFieldError('recruiter'),
          onInvalid: err => modelFormActions.setFieldError('recruiter', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: true,
          placeHolder: 'Not set',
        }}
      />
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
          items: vacancyStatusArray.map(item => ({
            value: item[vacancyStatusModelConfig.idField], 
            label: item.name || item[vacancyStatusModelConfig.idField],
          })),
          values: model.vacancyStatus 
            ? [model.vacancyStatus] 
            : [],
          onChange: vals => modelFormActions.changeField('vacancyStatus',
            vals[0],
          ),
          onSearch: (value) => vacancyStatusSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: vacancyStatusArrayIsLoading ? '' : undefined,
          onScrollToEnd: vacancyStatusNextPageAction,
          isLoading: vacancyStatusArrayIsLoading,
          missingValueResolver: value => 
            vacancyStatusEntities.getById(value)[vacancyStatusModelConfig.idField],
          label: 'vacancyStatus',
          errors: modelErrors.vacancyStatus,
          onValid: () => modelFormActions.resetFieldError('vacancyStatus'),
          onInvalid: err => modelFormActions.setFieldError('vacancyStatus', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: true,
          placeHolder: 'Not set',
        }}
      />
      <TInput
        {...{
          type: INPUT_TYPES.multi,
          label: 'details',
          className: modalsStyle.control,
          value: model.details,
          errors: modelErrors.details,
          onChange: val => modelFormActions.changeField('details', val),
          onValid: () => modelFormActions.resetFieldError('details'),
          onInvalid: err => modelFormActions.setFieldError('details', err),
          validate: {
            checkOnBlur: true,
            required: false,
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
    </div>
  )
}

export default EditComponent