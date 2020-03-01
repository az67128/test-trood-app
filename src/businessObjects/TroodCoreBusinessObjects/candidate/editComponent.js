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
  commentEntities,
  commentApiActions,
  cvRecordEntities,
  cvRecordApiActions,
  documentEntities,
  documentApiActions,
  contactEntities,
  contactApiActions, 
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
      
      const [cvRecordSearch, cvRecordSearchSet] = React.useState('')
      const cvRecordApiConfig = {
        filter: {
          q: cvRecordSearch ? 'like(name,*' + cvRecordSearch + ')' : '',
          depth: 1,
        },
      }
      const cvRecordArray = cvRecordEntities.getArray(cvRecordApiConfig)
      const cvRecordArrayIsLoading = cvRecordEntities.getIsLoadingArray(cvRecordApiConfig)
      const cvRecordNextPage = cvRecordEntities.getNextPage(cvRecordApiConfig)
      const cvRecordNextPageAction = () => {
        if (cvRecordNextPage) {
          cvRecordApiActions.loadNextPage(cvRecordApiConfig)
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
      
  return (
    <React.Fragment>
      <TSelect
        {...{
          label: 'recruiter',
          items: employeeArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.recruiter && [model.recruiter],
          onChange: values => modelFormActions.changeField('recruiter', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('recruiter', errs),
          onValid: () => modelFormActions.resetFieldError('recruiter'),
          errors: getNestedObjectField(modelErrors, 'recruiter'),
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
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'avatar',
          placeholder: 'Not chosen',
          value: model.avatar,
          errors: modelErrors.avatar,
          onChange: val => modelFormActions.changeField('avatar', val),
          onValid: () => modelFormActions.resetFieldError('avatar'),
          onInvalid: err => modelFormActions.setFieldError('avatar', err),
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
      <TSelect
        {...{
          label: 'cvRecordSet',
          items: cvRecordArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.cvRecordSet && [model.cvRecordSet],
          onChange: values => modelFormActions.changeField('cvRecordSet', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('cvRecordSet', errs),
          onValid: () => modelFormActions.resetFieldError('cvRecordSet'),
          errors: getNestedObjectField(modelErrors, 'cvRecordSet'),
          validate: {
            required: false,
            checkOnBlur: true,
          },
          onSearch: (value) => cvRecordSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: cvRecordArrayIsLoading ? '' : undefined,
          onScrollToEnd: cvRecordNextPageAction,
          missingValueResolver: value => cvRecordEntities.getById(value).name,
          isLoading: cvRecordArrayIsLoading,
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
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'vacancyCandidateSet',
          placeholder: 'Not chosen',
          value: model.vacancyCandidateSet,
          errors: modelErrors.vacancyCandidateSet,
          onChange: val => modelFormActions.changeField('vacancyCandidateSet', val),
          onValid: () => modelFormActions.resetFieldError('vacancyCandidateSet'),
          onInvalid: err => modelFormActions.setFieldError('vacancyCandidateSet', err),
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