import React from 'react'
import TSelect, { SELECT_TYPES } from '$trood/components/TSelect'
import { getNestedObjectField } from '$trood/helpers/nestedObjects'
import TInput, { INPUT_TYPES } from '$trood/components/TInput'

const EditComponent = ({
  model,
  modelErrors,
  modelFormActions,
  employeeEntities,
  employeeApiActions,
  billEntities,
  billApiActions,
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
            required: true,
            checkOnBlur: true,
          },
          onSearch: (value) => billSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: billArrayIsLoading ? '' : undefined,
          onScrollToEnd: billNextPageAction,
          missingValueResolver: value => billEntities.getById(value).name,
          isLoading: billArrayIsLoading,
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'file',
          placeholder: 'Not chosen',
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
    </React.Fragment>
  )
}
export default EditComponent