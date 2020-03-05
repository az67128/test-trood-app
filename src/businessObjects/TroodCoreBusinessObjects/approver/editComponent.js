import React from 'react'
import style from './editComponent.css'
import modalsStyle from '$trood/styles/modals.css'
import classNames from 'classnames'
import TInput, { INPUT_TYPES } from '$trood/components/TInput'
import TSelect, { SELECT_TYPES } from '$trood/components/TSelect'
import { RESTIFY_CONFIG } from 'redux-restify'
import DateTimePicker, { PICKER_TYPES } from '$trood/components/DateTimePicker'


const EditComponent = ({
  requestVacationApiActions,
  requestVacationEntities,
  employeeApiActions,
  employeeEntities,
  modelFormActions,
  modelErrors,
  model, 
}) => {
  const [employeeSearch, employeeSearchSet] = React.useState('')
  const employeeModelConfig = RESTIFY_CONFIG.registeredModels.employee
  const employeeApiConfig = {
    filter: {
      q: employeeSearch ? `eq(${employeeModelConfig.idField},${employeeSearch})` : '',
      depth: 1,
    },
  }
  const employeeArray = employeeEntities.getArray(employeeApiConfig)
  const employeeArrayIsLoading = employeeEntities.getIsLoadingArray(employeeApiConfig)
  const employeeNextPage = employeeEntities.getNextPage(employeeApiConfig)
  const employeeNextPageAction = () => {
    if (employeeNextPage) {
      employeeApiActions.loadNextPage(employeeApiConfig)
    }
  }
      
  const [requestVacationSearch, requestVacationSearchSet] = React.useState('')
  const requestVacationModelConfig = RESTIFY_CONFIG.registeredModels.requestVacation
  const requestVacationApiConfig = {
    filter: {
      q: requestVacationSearch ? `eq(${requestVacationModelConfig.idField},${requestVacationSearch})` : '',
      depth: 1,
    },
  }
  const requestVacationArray = requestVacationEntities.getArray(requestVacationApiConfig)
  const requestVacationArrayIsLoading = requestVacationEntities.getIsLoadingArray(requestVacationApiConfig)
  const requestVacationNextPage = requestVacationEntities.getNextPage(requestVacationApiConfig)
  const requestVacationNextPageAction = () => {
    if (requestVacationNextPage) {
      requestVacationApiActions.loadNextPage(requestVacationApiConfig)
    }
  }
      
  return (
    <div className={classNames(style.root, modalsStyle.root)}>
      <TInput
          {...{
            type: INPUT_TYPES.float,
            label: 'priority',
            className: modalsStyle.control,
            value: model.priority,
            errors: modelErrors.priority,
            onChange: val => modelFormActions.changeField('priority', val),
            onValid: () => modelFormActions.resetFieldError('priority'),
            onInvalid: err => modelFormActions.setFieldError('priority', err),
            validate: {
              checkOnBlur: true,
              required: true,
            },
          }}
      />
      <TSelect
        {...{
          className: modalsStyle.control,
          items: employeeArray.map(item => ({
            value: item[employeeModelConfig.idField], 
            label: item.name || item[employeeModelConfig.idField],
          })),
          values: model.employee 
            ? [model.employee] 
            : [],
          onChange: vals => modelFormActions.changeField('employee',
            vals[0],
          ),
          onSearch: (value) => employeeSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: employeeArrayIsLoading ? '' : undefined,
          onScrollToEnd: employeeNextPageAction,
          isLoading: employeeArrayIsLoading,
          missingValueResolver: value => employeeEntities.getById(value)['employee'],
          label: 'employee',
          errors: modelErrors.employee,
          onValid: () => modelFormActions.resetFieldError('employee'),
          onInvalid: err => modelFormActions.setFieldError('employee', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: true,
          placeHolder: 'Not set',
        }}
      />
      <TSelect
        {...{
          className: modalsStyle.control,
          items: requestVacationArray.map(item => ({
            value: item[requestVacationModelConfig.idField], 
            label: item.name || item[requestVacationModelConfig.idField],
          })),
          values: model.requestVacation 
            ? [model.requestVacation] 
            : [],
          onChange: vals => modelFormActions.changeField('requestVacation',
            vals[0],
          ),
          onSearch: (value) => requestVacationSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: requestVacationArrayIsLoading ? '' : undefined,
          onScrollToEnd: requestVacationNextPageAction,
          isLoading: requestVacationArrayIsLoading,
          missingValueResolver: value => requestVacationEntities.getById(value)['requestVacation'],
          label: 'requestVacation',
          errors: modelErrors.requestVacation,
          onValid: () => modelFormActions.resetFieldError('requestVacation'),
          onInvalid: err => modelFormActions.setFieldError('requestVacation', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: false,
          placeHolder: 'Not set',
        }}
      />
      <TInput
          {...{
            type: INPUT_TYPES.multi,
            label: 'approve',
            className: modalsStyle.control,
            value: model.approve,
            errors: modelErrors.approve,
            onChange: val => modelFormActions.changeField('approve', val),
            onValid: () => modelFormActions.resetFieldError('approve'),
            onInvalid: err => modelFormActions.setFieldError('approve', err),
            validate: {
              checkOnBlur: true,
              required: false,
            },
          }}
      />
      <TInput
          {...{
            type: INPUT_TYPES.multi,
            label: 'comment',
            className: modalsStyle.control,
            value: model.comment,
            errors: modelErrors.comment,
            onChange: val => modelFormActions.changeField('comment', val),
            onValid: () => modelFormActions.resetFieldError('comment'),
            onInvalid: err => modelFormActions.setFieldError('comment', err),
            validate: {
              checkOnBlur: true,
              required: false,
            },
          }}
      />
      <DateTimePicker
            {...{
              label: 'approveDate',
            className: modalsStyle.control,
            value: model.approveDate,
            errors: modelErrors.approveDate,
            onChange: val => modelFormActions.changeField('approveDate', val),
            onValid: () => modelFormActions.resetFieldError('approveDate'),
            onInvalid: err => modelFormActions.setFieldError('approveDate', err),
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