import React from 'react'
import style from './editComponent.css'
import modalsStyle from '$trood/styles/modals.css'
import classNames from 'classnames'
import TSelect, { SELECT_TYPES } from '$trood/components/TSelect'
import { RESTIFY_CONFIG } from 'redux-restify'
import TInput, { INPUT_TYPES } from '$trood/components/TInput'
import DateTimePicker, { PICKER_TYPES } from '$trood/components/DateTimePicker'


const EditComponent = ({
  billApiActions,
  billEntities,
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
      
  const [billSearch, billSearchSet] = React.useState('')
  const billModelConfig = RESTIFY_CONFIG.registeredModels.bill
  const billApiConfig = {
    filter: {
      q: billSearch ? `eq(${billModelConfig.idField},${billSearch})` : '',
      depth: 1,
    },
  }
  const billArray = billEntities.getArray(billApiConfig)
  const billArrayIsLoading = billEntities.getIsLoadingArray(billApiConfig)
  const billNextPage = billEntities.getNextPage(billApiConfig)
  const billNextPageAction = () => {
    if (billNextPage) {
      billApiActions.loadNextPage(billApiConfig)
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
      <TSelect
        {...{
          className: modalsStyle.control,
          items: billArray.map(item => ({
            value: item[billModelConfig.idField], 
            label: item.name || item[billModelConfig.idField],
          })),
          values: model.bill 
            ? [model.bill] 
            : [],
          onChange: vals => modelFormActions.changeField('bill',
            vals[0],
          ),
          onSearch: (value) => billSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: billArrayIsLoading ? '' : undefined,
          onScrollToEnd: billNextPageAction,
          isLoading: billArrayIsLoading,
          missingValueResolver: value => billEntities.getById(value)['bill'],
          label: 'bill',
          errors: modelErrors.bill,
          onValid: () => modelFormActions.resetFieldError('bill'),
          onInvalid: err => modelFormActions.setFieldError('bill', err),
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