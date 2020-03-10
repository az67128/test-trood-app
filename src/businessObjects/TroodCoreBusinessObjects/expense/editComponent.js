import React, { useState } from 'react'
import style from './editComponent.css'
import modalsStyle from '$trood/styles/modals.css'
import classNames from 'classnames'
import TSelect, { SELECT_TYPES } from '$trood/components/TSelect'
import { RESTIFY_CONFIG } from 'redux-restify'
import TInput, { INPUT_TYPES } from '$trood/components/TInput'
import DateTimePicker, { PICKER_TYPES } from '$trood/components/DateTimePicker'
import TCheckbox from '$trood/components/TCheckbox'


const EditComponent = ({
  matterApiActions,
  matterEntities,
  billApiActions,
  billEntities,
  expenseTypeApiActions,
  expenseTypeEntities,
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
      
  const [expenseTypeSearch, expenseTypeSearchSet] = useState('')
  const expenseTypeModelConfig = RESTIFY_CONFIG.registeredModels.expenseType
  const expenseTypeApiConfig = {
    filter: {
      q: expenseTypeSearch 
        ? `eq(${expenseTypeModelConfig.idField},${expenseTypeSearch})`
        : '',
      depth: 1,
    },
  }
  const expenseTypeArray = expenseTypeEntities.getArray(expenseTypeApiConfig)
  const expenseTypeArrayIsLoading = expenseTypeEntities.getIsLoadingArray(
    expenseTypeApiConfig,
  )
  const expenseTypeNextPage = expenseTypeEntities.getNextPage(expenseTypeApiConfig)
  const expenseTypeNextPageAction = () => {
    if (expenseTypeNextPage) {
      expenseTypeApiActions.loadNextPage(expenseTypeApiConfig)
    }
  }
      
  const [billSearch, billSearchSet] = useState('')
  const billModelConfig = RESTIFY_CONFIG.registeredModels.bill
  const billApiConfig = {
    filter: {
      q: billSearch 
        ? `eq(${billModelConfig.idField},${billSearch})`
        : '',
      depth: 1,
    },
  }
  const billArray = billEntities.getArray(billApiConfig)
  const billArrayIsLoading = billEntities.getIsLoadingArray(
    billApiConfig,
  )
  const billNextPage = billEntities.getNextPage(billApiConfig)
  const billNextPageAction = () => {
    if (billNextPage) {
      billApiActions.loadNextPage(billApiConfig)
    }
  }
      
  const [matterSearch, matterSearchSet] = useState('')
  const matterModelConfig = RESTIFY_CONFIG.registeredModels.matter
  const matterApiConfig = {
    filter: {
      q: matterSearch 
        ? `eq(${matterModelConfig.idField},${matterSearch})`
        : '',
      depth: 1,
    },
  }
  const matterArray = matterEntities.getArray(matterApiConfig)
  const matterArrayIsLoading = matterEntities.getIsLoadingArray(
    matterApiConfig,
  )
  const matterNextPage = matterEntities.getNextPage(matterApiConfig)
  const matterNextPageAction = () => {
    if (matterNextPage) {
      matterApiActions.loadNextPage(matterApiConfig)
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
          type: INPUT_TYPES.float,
          label: 'amount',
          className: modalsStyle.control,
          value: model.amount,
          errors: modelErrors.amount,
          onChange: val => modelFormActions.changeField('amount', val),
          onValid: () => modelFormActions.resetFieldError('amount'),
          onInvalid: err => modelFormActions.setFieldError('amount', err),
          validate: {
            checkOnBlur: true,
            required: true,
          },
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
          items: expenseTypeArray.map(item => ({
            value: item[expenseTypeModelConfig.idField], 
            label: item.name || item[expenseTypeModelConfig.idField],
          })),
          values: model.expenseType 
            ? [model.expenseType] 
            : [],
          onChange: vals => modelFormActions.changeField('expenseType',
            vals[0],
          ),
          onSearch: (value) => expenseTypeSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: expenseTypeArrayIsLoading ? '' : undefined,
          onScrollToEnd: expenseTypeNextPageAction,
          isLoading: expenseTypeArrayIsLoading,
          missingValueResolver: value => 
            expenseTypeEntities.getById(value)[expenseTypeModelConfig.idField],
          label: 'expenseType',
          errors: modelErrors.expenseType,
          onValid: () => modelFormActions.resetFieldError('expenseType'),
          onInvalid: err => modelFormActions.setFieldError('expenseType', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: false,
          placeHolder: 'Not set',
        }}
      />
      <TCheckbox
          {...{
            label: 'billiable',
          className: modalsStyle.control,
          value: model.billiable,
          errors: modelErrors.billiable,
          onChange: val => modelFormActions.changeField('billiable', val),
          onValid: () => modelFormActions.resetFieldError('billiable'),
          onInvalid: err => modelFormActions.setFieldError('billiable', err),
            validate: {
              checkOnBlur: true,
              required: false,
            },
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
          missingValueResolver: value => 
            billEntities.getById(value)[billModelConfig.idField],
          label: 'bill',
          errors: modelErrors.bill,
          onValid: () => modelFormActions.resetFieldError('bill'),
          onInvalid: err => modelFormActions.setFieldError('bill', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: false,
          placeHolder: 'Not set',
        }}
      />
      <TSelect
        {...{
          className: modalsStyle.control,
          items: matterArray.map(item => ({
            value: item[matterModelConfig.idField], 
            label: item.name || item[matterModelConfig.idField],
          })),
          values: model.matter 
            ? [model.matter] 
            : [],
          onChange: vals => modelFormActions.changeField('matter',
            vals[0],
          ),
          onSearch: (value) => matterSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: matterArrayIsLoading ? '' : undefined,
          onScrollToEnd: matterNextPageAction,
          isLoading: matterArrayIsLoading,
          missingValueResolver: value => 
            matterEntities.getById(value)[matterModelConfig.idField],
          label: 'matter',
          errors: modelErrors.matter,
          onValid: () => modelFormActions.resetFieldError('matter'),
          onInvalid: err => modelFormActions.setFieldError('matter', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: false,
          placeHolder: 'Not set',
        }}
      />
      <DateTimePicker
        {...{
          label: 'expenseDate',
          className: modalsStyle.control,
          value: model.expenseDate,
          errors: modelErrors.expenseDate,
          onChange: val => modelFormActions.changeField('expenseDate', val),
          onValid: () => modelFormActions.resetFieldError('expenseDate'),
          onInvalid: err => modelFormActions.setFieldError('expenseDate', err),
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