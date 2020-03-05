import React from 'react'
import style from './editComponent.css'
import modalsStyle from '$trood/styles/modals.css'
import classNames from 'classnames'
import DateTimePicker, { PICKER_TYPES } from '$trood/components/DateTimePicker'
import TCheckbox from '$trood/components/TCheckbox'
import TSelect, { SELECT_TYPES } from '$trood/components/TSelect'
import { RESTIFY_CONFIG } from 'redux-restify'


const EditComponent = ({
  employeeApiActions,
  employeeEntities,
  requestVacationApiActions,
  requestVacationEntities,
  modelFormActions,
  modelErrors,
  model, 
}) => {
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
      
  return (
    <div {...{className: classNames(style.root, modalsStyle.root)}}>
      <DateTimePicker
            {...{
              label: 'startDate',
            className: modalsStyle.control,
            value: model.startDate,
            errors: modelErrors.startDate,
            onChange: val => modelFormActions.changeField('startDate', val),
            onValid: () => modelFormActions.resetFieldError('startDate'),
            onInvalid: err => modelFormActions.setFieldError('startDate', err),
              type: PICKER_TYPES.dateTime,
              validate: {
                checkOnBlur: true,
                requiredDate: true,
                requiredTime: true,
            },
          }}
        />
      <DateTimePicker
            {...{
              label: 'endDate',
            className: modalsStyle.control,
            value: model.endDate,
            errors: modelErrors.endDate,
            onChange: val => modelFormActions.changeField('endDate', val),
            onValid: () => modelFormActions.resetFieldError('endDate'),
            onInvalid: err => modelFormActions.setFieldError('endDate', err),
              type: PICKER_TYPES.dateTime,
              validate: {
                checkOnBlur: true,
                requiredDate: true,
                requiredTime: true,
            },
          }}
        />
      <TCheckbox
          {...{
            label: 'paid',
            className: modalsStyle.control,
            value: model.paid,
            errors: modelErrors.paid,
            onChange: val => modelFormActions.changeField('paid', val),
            onValid: () => modelFormActions.resetFieldError('paid'),
            onInvalid: err => modelFormActions.setFieldError('paid', err),
            validate: {
              checkOnBlur: true,
              required: true,
            },
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
          items: employeeArray.map(item => ({
            value: item[employeeModelConfig.idField], 
            label: item.name || item[employeeModelConfig.idField],
          })),
          values: model.vacationIs 
            ? [model.vacationIs] 
            : [],
          onChange: vals => modelFormActions.changeField('vacationIs',
            vals[0],
          ),
          onSearch: (value) => employeeSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: employeeArrayIsLoading ? '' : undefined,
          onScrollToEnd: employeeNextPageAction,
          isLoading: employeeArrayIsLoading,
          missingValueResolver: value => employeeEntities.getById(value)['vacationIs'],
          label: 'vacationIs',
          errors: modelErrors.vacationIs,
          onValid: () => modelFormActions.resetFieldError('vacationIs'),
          onInvalid: err => modelFormActions.setFieldError('vacationIs', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: true,
          placeHolder: 'Not set',
        }}
      />
    </div>
  )
}
export default EditComponent