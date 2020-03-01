import React from 'react'
import TSelect, { SELECT_TYPES } from '$trood/components/TSelect'
import { getNestedObjectField } from '$trood/helpers/nestedObjects'
import TInput, { INPUT_TYPES } from '$trood/components/TInput'
import TCheckbox from '$trood/components/TCheckbox'
import DateTimePicker from '$trood/components/DateTimePicker'

const EditComponent = ({
  model,
  modelErrors,
  modelFormActions,
  employeeEntities,
  employeeApiActions,
  expenseTypeEntities,
  expenseTypeApiActions,
  billEntities,
  billApiActions,
  matterEntities,
  matterApiActions, 
}) => {
      const [employeeSearch, employeeSearchSet] = React.useState('')
      const employeeApiConfig = {
        filter: {
          q: employeeSearch ? 'like(name,*' + employeeSearch + ')' : '',
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
      
      const [expenseTypeSearch, expenseTypeSearchSet] = React.useState('')
      const expenseTypeApiConfig = {
        filter: {
          q: expenseTypeSearch ? 'like(name,*' + expenseTypeSearch + ')' : '',
          depth: 1,
        },
      }
      const expenseTypeArray = expenseTypeEntities.getArray(expenseTypeApiConfig)
      const expenseTypeArrayIsLoading = expenseTypeEntities.getIsLoadingArray(expenseTypeApiConfig)
      const expenseTypeNextPage = expenseTypeEntities.getNextPage(expenseTypeApiConfig)
      const expenseTypeNextPageAction = () => {
        if (expenseTypeNextPage) {
          expenseTypeApiActions.loadNextPage(expenseTypeApiConfig)
        }
      }
      
      const [billSearch, billSearchSet] = React.useState('')
      const billApiConfig = {
        filter: {
          q: billSearch ? 'like(name,*' + billSearch + ')' : '',
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
      
      const [matterSearch, matterSearchSet] = React.useState('')
      const matterApiConfig = {
        filter: {
          q: matterSearch ? 'like(name,*' + matterSearch + ')' : '',
          depth: 1,
        },
      }
      const matterArray = matterEntities.getArray(matterApiConfig)
      const matterArrayIsLoading = matterEntities.getIsLoadingArray(matterApiConfig)
      const matterNextPage = matterEntities.getNextPage(matterApiConfig)
      const matterNextPageAction = () => {
        if (matterNextPage) {
          matterApiActions.loadNextPage(matterApiConfig)
        }
      }
      
  return (
    <React.Fragment>
      <TSelect
        {...{
          label: 'author',
          items: employeeArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.author && [model.author],
          onChange: values => modelFormActions.changeField('author', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('author', errs),
          onValid: () => modelFormActions.resetFieldError('author'),
          errors: getNestedObjectField(modelErrors, 'author'),
          validate: {
            required: true,
            checkOnBlur: true,
          },
          onSearch: (value) => employeeSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: employeeArrayIsLoading ? '' : undefined,
          onScrollToEnd: employeeNextPageAction,
          missingValueResolver: value => employeeEntities.getById(value).name,
          isLoading: employeeArrayIsLoading,
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.float,
          label: 'amount',
          placeholder: 'Not chosen',
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
          placeholder: 'Not chosen',
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
          label: 'expenseType',
          items: expenseTypeArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.expenseType && [model.expenseType],
          onChange: values => modelFormActions.changeField('expenseType', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('expenseType', errs),
          onValid: () => modelFormActions.resetFieldError('expenseType'),
          errors: getNestedObjectField(modelErrors, 'expenseType'),
          validate: {
            required: false,
            checkOnBlur: true,
          },
          onSearch: (value) => expenseTypeSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: expenseTypeArrayIsLoading ? '' : undefined,
          onScrollToEnd: expenseTypeNextPageAction,
          missingValueResolver: value => expenseTypeEntities.getById(value).name,
          isLoading: expenseTypeArrayIsLoading,
        }}
      />
      <TCheckbox
            {...{
            label: 'billiable',
          placeholder: 'Not chosen',
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
          placeholder: 'Not chosen',
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
          label: 'bill',
          items: billArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.bill && [model.bill],
          onChange: values => modelFormActions.changeField('bill', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('bill', errs),
          onValid: () => modelFormActions.resetFieldError('bill'),
          errors: getNestedObjectField(modelErrors, 'bill'),
          validate: {
            required: false,
            checkOnBlur: true,
          },
          onSearch: (value) => billSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: billArrayIsLoading ? '' : undefined,
          onScrollToEnd: billNextPageAction,
          missingValueResolver: value => billEntities.getById(value).name,
          isLoading: billArrayIsLoading,
        }}
      />
      <TSelect
        {...{
          label: 'matter',
          items: matterArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.matter && [model.matter],
          onChange: values => modelFormActions.changeField('matter', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('matter', errs),
          onValid: () => modelFormActions.resetFieldError('matter'),
          errors: getNestedObjectField(modelErrors, 'matter'),
          validate: {
            required: false,
            checkOnBlur: true,
          },
          onSearch: (value) => matterSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: matterArrayIsLoading ? '' : undefined,
          onScrollToEnd: matterNextPageAction,
          missingValueResolver: value => matterEntities.getById(value).name,
          isLoading: matterArrayIsLoading,
        }}
      />
      <DateTimePicker
            {...{
            label: 'expenseDate',
          placeholder: 'Not chosen',
          value: model.expenseDate,
          errors: modelErrors.expenseDate,
          onChange: val => modelFormActions.changeField('expenseDate', val),
          onValid: () => modelFormActions.resetFieldError('expenseDate'),
          onInvalid: err => modelFormActions.setFieldError('expenseDate', err),
            validate: {
              checkOnBlur: true,
              requiredDate: false,
              requiredTime: false,
            },
          }}
        />
    </React.Fragment>
  )
}
export default EditComponent