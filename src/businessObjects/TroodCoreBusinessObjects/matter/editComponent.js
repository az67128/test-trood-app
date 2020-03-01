import React from 'react'
import TInput, { INPUT_TYPES } from '$trood/components/TInput'
import TSelect, { SELECT_TYPES } from '$trood/components/TSelect'
import { getNestedObjectField } from '$trood/helpers/nestedObjects'
import DateTimePicker from '$trood/components/DateTimePicker'

const EditComponent = ({
  model,
  modelErrors,
  modelFormActions,
  employeeEntities,
  employeeApiActions,
  clientEntities,
  clientApiActions,
  matterTypeEntities,
  matterTypeApiActions,
  matterStatusEntities,
  matterStatusApiActions,
  matterActiveStatusEntities,
  matterActiveStatusApiActions,
  budgetTypeEntities,
  budgetTypeApiActions,
  documentEntities,
  documentApiActions,
  commentEntities,
  commentApiActions, 
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
      
      const [matterTypeSearch, matterTypeSearchSet] = React.useState('')
      const matterTypeApiConfig = {
        filter: {
          q: matterTypeSearch ? 'like(name,*' + matterTypeSearch + ')' : '',
          depth: 1,
        },
      }
      const matterTypeArray = matterTypeEntities.getArray(matterTypeApiConfig)
      const matterTypeArrayIsLoading = matterTypeEntities.getIsLoadingArray(matterTypeApiConfig)
      const matterTypeNextPage = matterTypeEntities.getNextPage(matterTypeApiConfig)
      const matterTypeNextPageAction = () => {
        if (matterTypeNextPage) {
          matterTypeApiActions.loadNextPage(matterTypeApiConfig)
        }
      }
      
      const [matterStatusSearch, matterStatusSearchSet] = React.useState('')
      const matterStatusApiConfig = {
        filter: {
          q: matterStatusSearch ? 'like(name,*' + matterStatusSearch + ')' : '',
          depth: 1,
        },
      }
      const matterStatusArray = matterStatusEntities.getArray(matterStatusApiConfig)
      const matterStatusArrayIsLoading = matterStatusEntities.getIsLoadingArray(matterStatusApiConfig)
      const matterStatusNextPage = matterStatusEntities.getNextPage(matterStatusApiConfig)
      const matterStatusNextPageAction = () => {
        if (matterStatusNextPage) {
          matterStatusApiActions.loadNextPage(matterStatusApiConfig)
        }
      }
      
      const [matterActiveStatusSearch, matterActiveStatusSearchSet] = React.useState('')
      const matterActiveStatusApiConfig = {
        filter: {
          q: matterActiveStatusSearch ? 'like(name,*' + matterActiveStatusSearch + ')' : '',
          depth: 1,
        },
      }
      const matterActiveStatusArray = matterActiveStatusEntities.getArray(matterActiveStatusApiConfig)
      const matterActiveStatusArrayIsLoading = matterActiveStatusEntities.getIsLoadingArray(matterActiveStatusApiConfig)
      const matterActiveStatusNextPage = matterActiveStatusEntities.getNextPage(matterActiveStatusApiConfig)
      const matterActiveStatusNextPageAction = () => {
        if (matterActiveStatusNextPage) {
          matterActiveStatusApiActions.loadNextPage(matterActiveStatusApiConfig)
        }
      }
      
      const [budgetTypeSearch, budgetTypeSearchSet] = React.useState('')
      const budgetTypeApiConfig = {
        filter: {
          q: budgetTypeSearch ? 'like(name,*' + budgetTypeSearch + ')' : '',
          depth: 1,
        },
      }
      const budgetTypeArray = budgetTypeEntities.getArray(budgetTypeApiConfig)
      const budgetTypeArrayIsLoading = budgetTypeEntities.getIsLoadingArray(budgetTypeApiConfig)
      const budgetTypeNextPage = budgetTypeEntities.getNextPage(budgetTypeApiConfig)
      const budgetTypeNextPageAction = () => {
        if (budgetTypeNextPage) {
          budgetTypeApiActions.loadNextPage(budgetTypeApiConfig)
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
      
      const [commentSearch, commentSearchSet] = React.useState('')
      const commentApiConfig = {
        filter: {
          q: commentSearch ? 'like(name,*' + commentSearch + ')' : '',
          depth: 1,
        },
      }
      const commentArray = commentEntities.getArray(commentApiConfig)
      const commentArrayIsLoading = commentEntities.getIsLoadingArray(commentApiConfig)
      const commentNextPage = commentEntities.getNextPage(commentApiConfig)
      const commentNextPageAction = () => {
        if (commentNextPage) {
          commentApiActions.loadNextPage(commentApiConfig)
        }
      }
      
  return (
    <React.Fragment>
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'code',
          placeholder: 'Not chosen',
          value: model.code,
          errors: modelErrors.code,
          onChange: val => modelFormActions.changeField('code', val),
          onValid: () => modelFormActions.resetFieldError('code'),
          onInvalid: err => modelFormActions.setFieldError('code', err),
          validate: {
            checkOnBlur: true,
            required: false,
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
          label: 'responsible',
          items: employeeArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.responsible && [model.responsible],
          onChange: values => modelFormActions.changeField('responsible', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('responsible', errs),
          onValid: () => modelFormActions.resetFieldError('responsible'),
          errors: getNestedObjectField(modelErrors, 'responsible'),
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
      <TSelect
        {...{
          label: 'matterType',
          items: matterTypeArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.matterType && [model.matterType],
          onChange: values => modelFormActions.changeField('matterType', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('matterType', errs),
          onValid: () => modelFormActions.resetFieldError('matterType'),
          errors: getNestedObjectField(modelErrors, 'matterType'),
          validate: {
            required: true,
            checkOnBlur: true,
          },
          onSearch: (value) => matterTypeSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: matterTypeArrayIsLoading ? '' : undefined,
          onScrollToEnd: matterTypeNextPageAction,
          missingValueResolver: value => matterTypeEntities.getById(value).name,
          isLoading: matterTypeArrayIsLoading,
        }}
      />
      <TSelect
        {...{
          label: 'matterStatus',
          items: matterStatusArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.matterStatus && [model.matterStatus],
          onChange: values => modelFormActions.changeField('matterStatus', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('matterStatus', errs),
          onValid: () => modelFormActions.resetFieldError('matterStatus'),
          errors: getNestedObjectField(modelErrors, 'matterStatus'),
          validate: {
            required: true,
            checkOnBlur: true,
          },
          onSearch: (value) => matterStatusSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: matterStatusArrayIsLoading ? '' : undefined,
          onScrollToEnd: matterStatusNextPageAction,
          missingValueResolver: value => matterStatusEntities.getById(value).name,
          isLoading: matterStatusArrayIsLoading,
        }}
      />
      <TSelect
        {...{
          label: 'matterActiveStatus',
          items: matterActiveStatusArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.matterActiveStatus && [model.matterActiveStatus],
          onChange: values => modelFormActions.changeField('matterActiveStatus', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('matterActiveStatus', errs),
          onValid: () => modelFormActions.resetFieldError('matterActiveStatus'),
          errors: getNestedObjectField(modelErrors, 'matterActiveStatus'),
          validate: {
            required: true,
            checkOnBlur: true,
          },
          onSearch: (value) => matterActiveStatusSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: matterActiveStatusArrayIsLoading ? '' : undefined,
          onScrollToEnd: matterActiveStatusNextPageAction,
          missingValueResolver: value => matterActiveStatusEntities.getById(value).name,
          isLoading: matterActiveStatusArrayIsLoading,
        }}
      />
      <TSelect
        {...{
          label: 'budgetType',
          items: budgetTypeArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.budgetType && [model.budgetType],
          onChange: values => modelFormActions.changeField('budgetType', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('budgetType', errs),
          onValid: () => modelFormActions.resetFieldError('budgetType'),
          errors: getNestedObjectField(modelErrors, 'budgetType'),
          validate: {
            required: true,
            checkOnBlur: true,
          },
          onSearch: (value) => budgetTypeSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: budgetTypeArrayIsLoading ? '' : undefined,
          onScrollToEnd: budgetTypeNextPageAction,
          missingValueResolver: value => budgetTypeEntities.getById(value).name,
          isLoading: budgetTypeArrayIsLoading,
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'contactPersons',
          placeholder: 'Not chosen',
          value: model.contactPersons,
          errors: modelErrors.contactPersons,
          onChange: val => modelFormActions.changeField('contactPersons', val),
          onValid: () => modelFormActions.resetFieldError('contactPersons'),
          onInvalid: err => modelFormActions.setFieldError('contactPersons', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'description',
          placeholder: 'Not chosen',
          value: model.description,
          errors: modelErrors.description,
          onChange: val => modelFormActions.changeField('description', val),
          onValid: () => modelFormActions.resetFieldError('description'),
          onInvalid: err => modelFormActions.setFieldError('description', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
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
            required: false,
          },
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.float,
          label: 'totalBillAmount',
          placeholder: 'Not chosen',
          value: model.totalBillAmount,
          errors: modelErrors.totalBillAmount,
          onChange: val => modelFormActions.changeField('totalBillAmount', val),
          onValid: () => modelFormActions.resetFieldError('totalBillAmount'),
          onInvalid: err => modelFormActions.setFieldError('totalBillAmount', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <DateTimePicker
            {...{
            label: 'startDate',
          placeholder: 'Not chosen',
          value: model.startDate,
          errors: modelErrors.startDate,
          onChange: val => modelFormActions.changeField('startDate', val),
          onValid: () => modelFormActions.resetFieldError('startDate'),
          onInvalid: err => modelFormActions.setFieldError('startDate', err),
            validate: {
              checkOnBlur: true,
              requiredDate: false,
              requiredTime: false,
            },
          }}
        />
      <DateTimePicker
            {...{
            label: 'endDate',
          placeholder: 'Not chosen',
          value: model.endDate,
          errors: modelErrors.endDate,
          onChange: val => modelFormActions.changeField('endDate', val),
          onValid: () => modelFormActions.resetFieldError('endDate'),
          onInvalid: err => modelFormActions.setFieldError('endDate', err),
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
          label: 'activitySet',
          placeholder: 'Not chosen',
          value: model.activitySet,
          errors: modelErrors.activitySet,
          onChange: val => modelFormActions.changeField('activitySet', val),
          onValid: () => modelFormActions.resetFieldError('activitySet'),
          onInvalid: err => modelFormActions.setFieldError('activitySet', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'billSet',
          placeholder: 'Not chosen',
          value: model.billSet,
          errors: modelErrors.billSet,
          onChange: val => modelFormActions.changeField('billSet', val),
          onValid: () => modelFormActions.resetFieldError('billSet'),
          onInvalid: err => modelFormActions.setFieldError('billSet', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
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
          label: 'billPriceListSet',
          placeholder: 'Not chosen',
          value: model.billPriceListSet,
          errors: modelErrors.billPriceListSet,
          onChange: val => modelFormActions.changeField('billPriceListSet', val),
          onValid: () => modelFormActions.resetFieldError('billPriceListSet'),
          onInvalid: err => modelFormActions.setFieldError('billPriceListSet', err),
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
          label: 'matterContactPersonSet',
          placeholder: 'Not chosen',
          value: model.matterContactPersonSet,
          errors: modelErrors.matterContactPersonSet,
          onChange: val => modelFormActions.changeField('matterContactPersonSet', val),
          onValid: () => modelFormActions.resetFieldError('matterContactPersonSet'),
          onInvalid: err => modelFormActions.setFieldError('matterContactPersonSet', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TSelect
        {...{
          label: 'commentSet',
          items: commentArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.commentSet && [model.commentSet],
          onChange: values => modelFormActions.changeField('commentSet', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('commentSet', errs),
          onValid: () => modelFormActions.resetFieldError('commentSet'),
          errors: getNestedObjectField(modelErrors, 'commentSet'),
          validate: {
            required: false,
            checkOnBlur: true,
          },
          onSearch: (value) => commentSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: commentArrayIsLoading ? '' : undefined,
          onScrollToEnd: commentNextPageAction,
          missingValueResolver: value => commentEntities.getById(value).name,
          isLoading: commentArrayIsLoading,
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'matterInfoSet',
          placeholder: 'Not chosen',
          value: model.matterInfoSet,
          errors: modelErrors.matterInfoSet,
          onChange: val => modelFormActions.changeField('matterInfoSet', val),
          onValid: () => modelFormActions.resetFieldError('matterInfoSet'),
          onInvalid: err => modelFormActions.setFieldError('matterInfoSet', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'teamMemberSet',
          placeholder: 'Not chosen',
          value: model.teamMemberSet,
          errors: modelErrors.teamMemberSet,
          onChange: val => modelFormActions.changeField('teamMemberSet', val),
          onValid: () => modelFormActions.resetFieldError('teamMemberSet'),
          onInvalid: err => modelFormActions.setFieldError('teamMemberSet', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
    </React.Fragment>
  )
}
export default EditComponent