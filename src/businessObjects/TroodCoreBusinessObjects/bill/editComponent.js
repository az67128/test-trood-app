import React from 'react'
import TInput, { INPUT_TYPES } from '$trood/components/TInput'
import TSelect, { SELECT_TYPES } from '$trood/components/TSelect'
import { getNestedObjectField } from '$trood/helpers/nestedObjects'
import DateTimePicker from '$trood/components/DateTimePicker'
import TCheckbox from '$trood/components/TCheckbox'

const EditComponent = ({
  model,
  modelErrors,
  modelFormActions,
  employeeEntities,
  employeeApiActions,
  matterEntities,
  matterApiActions,
  billStatusEntities,
  billStatusApiActions,
  documentEntities,
  documentApiActions, 
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
      
      const [billStatusSearch, billStatusSearchSet] = React.useState('')
      const billStatusApiConfig = {
        filter: {
          q: billStatusSearch ? 'like(name,*' + billStatusSearch + ')' : '',
          depth: 1,
        },
      }
      const billStatusArray = billStatusEntities.getArray(billStatusApiConfig)
      const billStatusArrayIsLoading = billStatusEntities.getIsLoadingArray(billStatusApiConfig)
      const billStatusNextPage = billStatusEntities.getNextPage(billStatusApiConfig)
      const billStatusNextPageAction = () => {
        if (billStatusNextPage) {
          billStatusApiActions.loadNextPage(billStatusApiConfig)
        }
      }
      
      const [documentSearch, documentSearchSet] = React.useState('')
      const documentApiConfig = {
        filter: {
          q: documentSearch ? 'like(name,*' + documentSearch + ')' : '',
          depth: 1,
        },
      }
      const documentArray = documentEntities.getArray(documentApiConfig)
      const documentArrayIsLoading = documentEntities.getIsLoadingArray(documentApiConfig)
      const documentNextPage = documentEntities.getNextPage(documentApiConfig)
      const documentNextPageAction = () => {
        if (documentNextPage) {
          documentApiActions.loadNextPage(documentApiConfig)
        }
      }
      
  return (
    <React.Fragment>
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
            required: true,
          },
        }}
      />
      <TSelect
        {...{
          label: 'approver',
          items: employeeArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.approver && [model.approver],
          onChange: values => modelFormActions.changeField('approver', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('approver', errs),
          onValid: () => modelFormActions.resetFieldError('approver'),
          errors: getNestedObjectField(modelErrors, 'approver'),
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
            required: true,
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
            label: 'approvedDate',
          placeholder: 'Not chosen',
          value: model.approvedDate,
          errors: modelErrors.approvedDate,
          onChange: val => modelFormActions.changeField('approvedDate', val),
          onValid: () => modelFormActions.resetFieldError('approvedDate'),
          onInvalid: err => modelFormActions.setFieldError('approvedDate', err),
            validate: {
              checkOnBlur: true,
              requiredDate: false,
              requiredTime: false,
            },
          }}
        />
      <TSelect
        {...{
          label: 'billStatus',
          items: billStatusArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.billStatus && [model.billStatus],
          onChange: values => modelFormActions.changeField('billStatus', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('billStatus', errs),
          onValid: () => modelFormActions.resetFieldError('billStatus'),
          errors: getNestedObjectField(modelErrors, 'billStatus'),
          validate: {
            required: false,
            checkOnBlur: true,
          },
          onSearch: (value) => billStatusSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: billStatusArrayIsLoading ? '' : undefined,
          onScrollToEnd: billStatusNextPageAction,
          missingValueResolver: value => billStatusEntities.getById(value).name,
          isLoading: billStatusArrayIsLoading,
        }}
      />
      <DateTimePicker
            {...{
            label: 'dateInvoiceSent',
          placeholder: 'Not chosen',
          value: model.dateInvoiceSent,
          errors: modelErrors.dateInvoiceSent,
          onChange: val => modelFormActions.changeField('dateInvoiceSent', val),
          onValid: () => modelFormActions.resetFieldError('dateInvoiceSent'),
          onInvalid: err => modelFormActions.setFieldError('dateInvoiceSent', err),
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
          label: 'sumBill',
          placeholder: 'Not chosen',
          value: model.sumBill,
          errors: modelErrors.sumBill,
          onChange: val => modelFormActions.changeField('sumBill', val),
          onValid: () => modelFormActions.resetFieldError('sumBill'),
          onInvalid: err => modelFormActions.setFieldError('sumBill', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.float,
          label: 'totalSumPayment',
          placeholder: 'Not chosen',
          value: model.totalSumPayment,
          errors: modelErrors.totalSumPayment,
          onChange: val => modelFormActions.changeField('totalSumPayment', val),
          onValid: () => modelFormActions.resetFieldError('totalSumPayment'),
          onInvalid: err => modelFormActions.setFieldError('totalSumPayment', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TCheckbox
            {...{
            label: 'deleted',
          placeholder: 'Not chosen',
          value: model.deleted,
          errors: modelErrors.deleted,
          onChange: val => modelFormActions.changeField('deleted', val),
          onValid: () => modelFormActions.resetFieldError('deleted'),
          onInvalid: err => modelFormActions.setFieldError('deleted', err),
            validate: {
              checkOnBlur: true,
              required: false,
            },
          }}
        />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'timeEntrySet',
          placeholder: 'Not chosen',
          value: model.timeEntrySet,
          errors: modelErrors.timeEntrySet,
          onChange: val => modelFormActions.changeField('timeEntrySet', val),
          onValid: () => modelFormActions.resetFieldError('timeEntrySet'),
          onInvalid: err => modelFormActions.setFieldError('timeEntrySet', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'expenseSet',
          placeholder: 'Not chosen',
          value: model.expenseSet,
          errors: modelErrors.expenseSet,
          onChange: val => modelFormActions.changeField('expenseSet', val),
          onValid: () => modelFormActions.resetFieldError('expenseSet'),
          onInvalid: err => modelFormActions.setFieldError('expenseSet', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'invoiceSet',
          placeholder: 'Not chosen',
          value: model.invoiceSet,
          errors: modelErrors.invoiceSet,
          onChange: val => modelFormActions.changeField('invoiceSet', val),
          onValid: () => modelFormActions.resetFieldError('invoiceSet'),
          onInvalid: err => modelFormActions.setFieldError('invoiceSet', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TSelect
        {...{
          label: 'documentSet',
          items: documentArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.documentSet && [model.documentSet],
          onChange: values => modelFormActions.changeField('documentSet', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('documentSet', errs),
          onValid: () => modelFormActions.resetFieldError('documentSet'),
          errors: getNestedObjectField(modelErrors, 'documentSet'),
          validate: {
            required: false,
            checkOnBlur: true,
          },
          onSearch: (value) => documentSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: documentArrayIsLoading ? '' : undefined,
          onScrollToEnd: documentNextPageAction,
          missingValueResolver: value => documentEntities.getById(value).name,
          isLoading: documentArrayIsLoading,
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'paymentSet',
          placeholder: 'Not chosen',
          value: model.paymentSet,
          errors: modelErrors.paymentSet,
          onChange: val => modelFormActions.changeField('paymentSet', val),
          onValid: () => modelFormActions.resetFieldError('paymentSet'),
          onInvalid: err => modelFormActions.setFieldError('paymentSet', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <DateTimePicker
            {...{
            label: 'dateFullPaid',
          placeholder: 'Not chosen',
          value: model.dateFullPaid,
          errors: modelErrors.dateFullPaid,
          onChange: val => modelFormActions.changeField('dateFullPaid', val),
          onValid: () => modelFormActions.resetFieldError('dateFullPaid'),
          onInvalid: err => modelFormActions.setFieldError('dateFullPaid', err),
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