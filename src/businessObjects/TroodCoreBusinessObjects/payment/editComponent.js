import React from 'react'
import TSelect, { SELECT_TYPES } from '$trood/components/TSelect'
import { getNestedObjectField } from '$trood/helpers/nestedObjects'
import TInput, { INPUT_TYPES } from '$trood/components/TInput'
import DateTimePicker from '$trood/components/DateTimePicker'

const EditComponent = ({
  model,
  modelErrors,
  modelFormActions,
  employeeEntities,
  employeeApiActions,
  clientEntities,
  clientApiActions,
  matterEntities,
  matterApiActions,
  billEntities,
  billApiActions, 
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
      
      const [clientSearch, clientSearchSet] = React.useState('')
      const clientApiConfig = {
        filter: {
          q: clientSearch ? 'like(name,*' + clientSearch + ')' : '',
          depth: 1,
        },
      }
      const clientArray = clientEntities.getArray(clientApiConfig)
      const clientArrayIsLoading = clientEntities.getIsLoadingArray(clientApiConfig)
      const clientNextPage = clientEntities.getNextPage(clientApiConfig)
      const clientNextPageAction = () => {
        if (clientNextPage) {
          clientApiActions.loadNextPage(clientApiConfig)
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
          label: 'sumPayment',
          placeholder: 'Not chosen',
          value: model.sumPayment,
          errors: modelErrors.sumPayment,
          onChange: val => modelFormActions.changeField('sumPayment', val),
          onValid: () => modelFormActions.resetFieldError('sumPayment'),
          onInvalid: err => modelFormActions.setFieldError('sumPayment', err),
          validate: {
            checkOnBlur: true,
            required: true,
          },
        }}
      />
      <TSelect
        {...{
          label: 'client',
          items: clientArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.client && [model.client],
          onChange: values => modelFormActions.changeField('client', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('client', errs),
          onValid: () => modelFormActions.resetFieldError('client'),
          errors: getNestedObjectField(modelErrors, 'client'),
          validate: {
            required: true,
            checkOnBlur: true,
          },
          onSearch: (value) => clientSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: clientArrayIsLoading ? '' : undefined,
          onScrollToEnd: clientNextPageAction,
          missingValueResolver: value => clientEntities.getById(value).name,
          isLoading: clientArrayIsLoading,
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'number',
          placeholder: 'Not chosen',
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
      <DateTimePicker
            {...{
            label: 'paymentDate',
          placeholder: 'Not chosen',
          value: model.paymentDate,
          errors: modelErrors.paymentDate,
          onChange: val => modelFormActions.changeField('paymentDate', val),
          onValid: () => modelFormActions.resetFieldError('paymentDate'),
          onInvalid: err => modelFormActions.setFieldError('paymentDate', err),
            validate: {
              checkOnBlur: true,
              requiredDate: false,
              requiredTime: false,
            },
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
    </React.Fragment>
  )
}
export default EditComponent