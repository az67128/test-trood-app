import React from 'react'
import TInput, { INPUT_TYPES } from '$trood/components/TInput'
import TSelect, { SELECT_TYPES } from '$trood/components/TSelect'
import { getNestedObjectField } from '$trood/helpers/nestedObjects'
import DateTimePicker from '$trood/components/DateTimePicker'

const EditComponent = ({
  model,
  modelErrors,
  modelFormActions,
  clientActiveStatusEntities,
  clientActiveStatusApiActions,
  employeeEntities,
  employeeApiActions,
  clientTypeEntities,
  clientTypeApiActions,
  contactEntities,
  contactApiActions,
  commentEntities,
  commentApiActions,
  documentEntities,
  documentApiActions,
  conflictStatusEntities,
  conflictStatusApiActions, 
}) => {
      const [clientActiveStatusSearch, clientActiveStatusSearchSet] = React.useState('')
      const clientActiveStatusApiConfig = {
        filter: {
          q: clientActiveStatusSearch ? 'like(name,*' + clientActiveStatusSearch + ')' : '',
          depth: 1,
        },
      }
      const clientActiveStatusArray = clientActiveStatusEntities.getArray(clientActiveStatusApiConfig)
      const clientActiveStatusArrayIsLoading = clientActiveStatusEntities.getIsLoadingArray(clientActiveStatusApiConfig)
      const clientActiveStatusNextPage = clientActiveStatusEntities.getNextPage(clientActiveStatusApiConfig)
      const clientActiveStatusNextPageAction = () => {
        if (clientActiveStatusNextPage) {
          clientActiveStatusApiActions.loadNextPage(clientActiveStatusApiConfig)
        }
      }
      
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
      
      const [clientTypeSearch, clientTypeSearchSet] = React.useState('')
      const clientTypeApiConfig = {
        filter: {
          q: clientTypeSearch ? 'like(name,*' + clientTypeSearch + ')' : '',
          depth: 1,
        },
      }
      const clientTypeArray = clientTypeEntities.getArray(clientTypeApiConfig)
      const clientTypeArrayIsLoading = clientTypeEntities.getIsLoadingArray(clientTypeApiConfig)
      const clientTypeNextPage = clientTypeEntities.getNextPage(clientTypeApiConfig)
      const clientTypeNextPageAction = () => {
        if (clientTypeNextPage) {
          clientTypeApiActions.loadNextPage(clientTypeApiConfig)
        }
      }
      
      const [contactSearch, contactSearchSet] = React.useState('')
      const contactApiConfig = {
        filter: {
          q: contactSearch ? 'like(name,*' + contactSearch + ')' : '',
          depth: 1,
        },
      }
      const contactArray = contactEntities.getArray(contactApiConfig)
      const contactArrayIsLoading = contactEntities.getIsLoadingArray(contactApiConfig)
      const contactNextPage = contactEntities.getNextPage(contactApiConfig)
      const contactNextPageAction = () => {
        if (contactNextPage) {
          contactApiActions.loadNextPage(contactApiConfig)
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
      
      const [conflictStatusSearch, conflictStatusSearchSet] = React.useState('')
      const conflictStatusApiConfig = {
        filter: {
          q: conflictStatusSearch ? 'like(name,*' + conflictStatusSearch + ')' : '',
          depth: 1,
        },
      }
      const conflictStatusArray = conflictStatusEntities.getArray(conflictStatusApiConfig)
      const conflictStatusArrayIsLoading = conflictStatusEntities.getIsLoadingArray(conflictStatusApiConfig)
      const conflictStatusNextPage = conflictStatusEntities.getNextPage(conflictStatusApiConfig)
      const conflictStatusNextPageAction = () => {
        if (conflictStatusNextPage) {
          conflictStatusApiActions.loadNextPage(conflictStatusApiConfig)
        }
      }
      
  return (
    <React.Fragment>
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
          label: 'clientActiveStatus',
          items: clientActiveStatusArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.clientActiveStatus && [model.clientActiveStatus],
          onChange: values => modelFormActions.changeField('clientActiveStatus', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('clientActiveStatus', errs),
          onValid: () => modelFormActions.resetFieldError('clientActiveStatus'),
          errors: getNestedObjectField(modelErrors, 'clientActiveStatus'),
          validate: {
            required: true,
            checkOnBlur: true,
          },
          onSearch: (value) => clientActiveStatusSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: clientActiveStatusArrayIsLoading ? '' : undefined,
          onScrollToEnd: clientActiveStatusNextPageAction,
          missingValueResolver: value => clientActiveStatusEntities.getById(value).name,
          isLoading: clientActiveStatusArrayIsLoading,
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
          label: 'clientType',
          items: clientTypeArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.clientType && [model.clientType],
          onChange: values => modelFormActions.changeField('clientType', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('clientType', errs),
          onValid: () => modelFormActions.resetFieldError('clientType'),
          errors: getNestedObjectField(modelErrors, 'clientType'),
          validate: {
            required: true,
            checkOnBlur: true,
          },
          onSearch: (value) => clientTypeSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: clientTypeArrayIsLoading ? '' : undefined,
          onScrollToEnd: clientTypeNextPageAction,
          missingValueResolver: value => clientTypeEntities.getById(value).name,
          isLoading: clientTypeArrayIsLoading,
        }}
      />
      <DateTimePicker
            {...{
            label: 'conflictCheckDate',
          placeholder: 'Not chosen',
          value: model.conflictCheckDate,
          errors: modelErrors.conflictCheckDate,
          onChange: val => modelFormActions.changeField('conflictCheckDate', val),
          onValid: () => modelFormActions.resetFieldError('conflictCheckDate'),
          onInvalid: err => modelFormActions.setFieldError('conflictCheckDate', err),
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
          label: 'revenue',
          placeholder: 'Not chosen',
          value: model.revenue,
          errors: modelErrors.revenue,
          onChange: val => modelFormActions.changeField('revenue', val),
          onValid: () => modelFormActions.resetFieldError('revenue'),
          onInvalid: err => modelFormActions.setFieldError('revenue', err),
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
      <TSelect
        {...{
          label: 'contactSet',
          items: contactArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.contactSet && [model.contactSet],
          onChange: values => modelFormActions.changeField('contactSet', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('contactSet', errs),
          onValid: () => modelFormActions.resetFieldError('contactSet'),
          errors: getNestedObjectField(modelErrors, 'contactSet'),
          validate: {
            required: false,
            checkOnBlur: true,
          },
          onSearch: (value) => contactSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: contactArrayIsLoading ? '' : undefined,
          onScrollToEnd: contactNextPageAction,
          missingValueResolver: value => contactEntities.getById(value).name,
          isLoading: contactArrayIsLoading,
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
          label: 'conflictFirmSet',
          placeholder: 'Not chosen',
          value: model.conflictFirmSet,
          errors: modelErrors.conflictFirmSet,
          onChange: val => modelFormActions.changeField('conflictFirmSet', val),
          onValid: () => modelFormActions.resetFieldError('conflictFirmSet'),
          onInvalid: err => modelFormActions.setFieldError('conflictFirmSet', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'contactPersonSet',
          placeholder: 'Not chosen',
          value: model.contactPersonSet,
          errors: modelErrors.contactPersonSet,
          onChange: val => modelFormActions.changeField('contactPersonSet', val),
          onValid: () => modelFormActions.resetFieldError('contactPersonSet'),
          onInvalid: err => modelFormActions.setFieldError('contactPersonSet', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'matterSet',
          placeholder: 'Not chosen',
          value: model.matterSet,
          errors: modelErrors.matterSet,
          onChange: val => modelFormActions.changeField('matterSet', val),
          onValid: () => modelFormActions.resetFieldError('matterSet'),
          onInvalid: err => modelFormActions.setFieldError('matterSet', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'requisitesSet',
          placeholder: 'Not chosen',
          value: model.requisitesSet,
          errors: modelErrors.requisitesSet,
          onChange: val => modelFormActions.changeField('requisitesSet', val),
          onValid: () => modelFormActions.resetFieldError('requisitesSet'),
          onInvalid: err => modelFormActions.setFieldError('requisitesSet', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TSelect
        {...{
          label: 'conflictStatus',
          items: conflictStatusArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.conflictStatus && [model.conflictStatus],
          onChange: values => modelFormActions.changeField('conflictStatus', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('conflictStatus', errs),
          onValid: () => modelFormActions.resetFieldError('conflictStatus'),
          errors: getNestedObjectField(modelErrors, 'conflictStatus'),
          validate: {
            required: false,
            checkOnBlur: true,
          },
          onSearch: (value) => conflictStatusSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: conflictStatusArrayIsLoading ? '' : undefined,
          onScrollToEnd: conflictStatusNextPageAction,
          missingValueResolver: value => conflictStatusEntities.getById(value).name,
          isLoading: conflictStatusArrayIsLoading,
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'clientRateSet',
          placeholder: 'Not chosen',
          value: model.clientRateSet,
          errors: modelErrors.clientRateSet,
          onChange: val => modelFormActions.changeField('clientRateSet', val),
          onValid: () => modelFormActions.resetFieldError('clientRateSet'),
          onInvalid: err => modelFormActions.setFieldError('clientRateSet', err),
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