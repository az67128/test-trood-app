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
  Entities,
  ApiActions,
  docCustomTypeEntities,
  docCustomTypeApiActions, 
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
      
      const [Search, SearchSet] = React.useState('')
      const ApiConfig = {
        filter: {
          q: Search ? 'like(name,*' + Search + ')' : '',
          depth: 1,
        },
      }
      const Array = Entities.getArray(ApiConfig)
      const ArrayIsLoading = Entities.getIsLoadingArray(ApiConfig)
      const NextPage = Entities.getNextPage(ApiConfig)
      const NextPageAction = () => {
        if (NextPage) {
          ApiActions.loadNextPage(ApiConfig)
        }
      }
      
      const [docCustomTypeSearch, docCustomTypeSearchSet] = React.useState('')
      const docCustomTypeApiConfig = {
        filter: {
          q: docCustomTypeSearch ? 'like(name,*' + docCustomTypeSearch + ')' : '',
          depth: 1,
        },
      }
      const docCustomTypeArray = docCustomTypeEntities.getArray(docCustomTypeApiConfig)
      const docCustomTypeArrayIsLoading = docCustomTypeEntities.getIsLoadingArray(docCustomTypeApiConfig)
      const docCustomTypeNextPage = docCustomTypeEntities.getNextPage(docCustomTypeApiConfig)
      const docCustomTypeNextPageAction = () => {
        if (docCustomTypeNextPage) {
          docCustomTypeApiActions.loadNextPage(docCustomTypeApiConfig)
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
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'documentType',
          placeholder: 'Not chosen',
          value: model.documentType,
          errors: modelErrors.documentType,
          onChange: val => modelFormActions.changeField('documentType', val),
          onValid: () => modelFormActions.resetFieldError('documentType'),
          onInvalid: err => modelFormActions.setFieldError('documentType', err),
          validate: {
            checkOnBlur: true,
            required: true,
          },
        }}
      />
      <TSelect
        {...{
          label: 'docCustomType',
          items: docCustomTypeArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.docCustomType && [model.docCustomType],
          onChange: values => modelFormActions.changeField('docCustomType', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('docCustomType', errs),
          onValid: () => modelFormActions.resetFieldError('docCustomType'),
          errors: getNestedObjectField(modelErrors, 'docCustomType'),
          validate: {
            required: false,
            checkOnBlur: true,
          },
          onSearch: (value) => docCustomTypeSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: docCustomTypeArrayIsLoading ? '' : undefined,
          onScrollToEnd: docCustomTypeNextPageAction,
          missingValueResolver: value => docCustomTypeEntities.getById(value).name,
          isLoading: docCustomTypeArrayIsLoading,
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
          type: INPUT_TYPES.multi,
          label: 'filename',
          placeholder: 'Not chosen',
          value: model.filename,
          errors: modelErrors.filename,
          onChange: val => modelFormActions.changeField('filename', val),
          onValid: () => modelFormActions.resetFieldError('filename'),
          onInvalid: err => modelFormActions.setFieldError('filename', err),
          validate: {
            checkOnBlur: true,
            required: true,
          },
        }}
      />
    </React.Fragment>
  )
}
export default EditComponent