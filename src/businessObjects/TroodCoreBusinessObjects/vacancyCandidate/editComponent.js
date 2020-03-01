import React from 'react'
import TSelect, { SELECT_TYPES } from '$trood/components/TSelect'
import { getNestedObjectField } from '$trood/helpers/nestedObjects'
import DateTimePicker from '$trood/components/DateTimePicker'

const EditComponent = ({
  model,
  modelErrors,
  modelFormActions,
  employeeEntities,
  employeeApiActions,
  candidateStatusEntities,
  candidateStatusApiActions,
  resolveCandidateEntities,
  resolveCandidateApiActions,
  candidateEntities,
  candidateApiActions,
  vacancyEntities,
  vacancyApiActions,
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
      
      const [candidateStatusSearch, candidateStatusSearchSet] = React.useState('')
      const candidateStatusApiConfig = {
        filter: {
          q: candidateStatusSearch ? 'like(name,*' + candidateStatusSearch + ')' : '',
          depth: 1,
        },
      }
      const candidateStatusArray = candidateStatusEntities.getArray(candidateStatusApiConfig)
      const candidateStatusArrayIsLoading = candidateStatusEntities.getIsLoadingArray(candidateStatusApiConfig)
      const candidateStatusNextPage = candidateStatusEntities.getNextPage(candidateStatusApiConfig)
      const candidateStatusNextPageAction = () => {
        if (candidateStatusNextPage) {
          candidateStatusApiActions.loadNextPage(candidateStatusApiConfig)
        }
      }
      
      const [resolveCandidateSearch, resolveCandidateSearchSet] = React.useState('')
      const resolveCandidateApiConfig = {
        filter: {
          q: resolveCandidateSearch ? 'like(name,*' + resolveCandidateSearch + ')' : '',
          depth: 1,
        },
      }
      const resolveCandidateArray = resolveCandidateEntities.getArray(resolveCandidateApiConfig)
      const resolveCandidateArrayIsLoading = resolveCandidateEntities.getIsLoadingArray(resolveCandidateApiConfig)
      const resolveCandidateNextPage = resolveCandidateEntities.getNextPage(resolveCandidateApiConfig)
      const resolveCandidateNextPageAction = () => {
        if (resolveCandidateNextPage) {
          resolveCandidateApiActions.loadNextPage(resolveCandidateApiConfig)
        }
      }
      
      const [candidateSearch, candidateSearchSet] = React.useState('')
      const candidateApiConfig = {
        filter: {
          q: candidateSearch ? 'like(name,*' + candidateSearch + ')' : '',
          depth: 1,
        },
      }
      const candidateArray = candidateEntities.getArray(candidateApiConfig)
      const candidateArrayIsLoading = candidateEntities.getIsLoadingArray(candidateApiConfig)
      const candidateNextPage = candidateEntities.getNextPage(candidateApiConfig)
      const candidateNextPageAction = () => {
        if (candidateNextPage) {
          candidateApiActions.loadNextPage(candidateApiConfig)
        }
      }
      
      const [vacancySearch, vacancySearchSet] = React.useState('')
      const vacancyApiConfig = {
        filter: {
          q: vacancySearch ? 'like(name,*' + vacancySearch + ')' : '',
          depth: 1,
        },
      }
      const vacancyArray = vacancyEntities.getArray(vacancyApiConfig)
      const vacancyArrayIsLoading = vacancyEntities.getIsLoadingArray(vacancyApiConfig)
      const vacancyNextPage = vacancyEntities.getNextPage(vacancyApiConfig)
      const vacancyNextPageAction = () => {
        if (vacancyNextPage) {
          vacancyApiActions.loadNextPage(vacancyApiConfig)
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
      <TSelect
        {...{
          label: 'candidateStatus',
          items: candidateStatusArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.candidateStatus && [model.candidateStatus],
          onChange: values => modelFormActions.changeField('candidateStatus', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('candidateStatus', errs),
          onValid: () => modelFormActions.resetFieldError('candidateStatus'),
          errors: getNestedObjectField(modelErrors, 'candidateStatus'),
          validate: {
            required: true,
            checkOnBlur: true,
          },
          onSearch: (value) => candidateStatusSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: candidateStatusArrayIsLoading ? '' : undefined,
          onScrollToEnd: candidateStatusNextPageAction,
          missingValueResolver: value => candidateStatusEntities.getById(value).name,
          isLoading: candidateStatusArrayIsLoading,
        }}
      />
      <TSelect
        {...{
          label: 'resolveCandidate',
          items: resolveCandidateArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.resolveCandidate && [model.resolveCandidate],
          onChange: values => modelFormActions.changeField('resolveCandidate', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('resolveCandidate', errs),
          onValid: () => modelFormActions.resetFieldError('resolveCandidate'),
          errors: getNestedObjectField(modelErrors, 'resolveCandidate'),
          validate: {
            required: true,
            checkOnBlur: true,
          },
          onSearch: (value) => resolveCandidateSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: resolveCandidateArrayIsLoading ? '' : undefined,
          onScrollToEnd: resolveCandidateNextPageAction,
          missingValueResolver: value => resolveCandidateEntities.getById(value).name,
          isLoading: resolveCandidateArrayIsLoading,
        }}
      />
      <TSelect
        {...{
          label: 'candidate',
          items: candidateArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.candidate && [model.candidate],
          onChange: values => modelFormActions.changeField('candidate', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('candidate', errs),
          onValid: () => modelFormActions.resetFieldError('candidate'),
          errors: getNestedObjectField(modelErrors, 'candidate'),
          validate: {
            required: true,
            checkOnBlur: true,
          },
          onSearch: (value) => candidateSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: candidateArrayIsLoading ? '' : undefined,
          onScrollToEnd: candidateNextPageAction,
          missingValueResolver: value => candidateEntities.getById(value).name,
          isLoading: candidateArrayIsLoading,
        }}
      />
      <TSelect
        {...{
          label: 'vacancy',
          items: vacancyArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.vacancy && [model.vacancy],
          onChange: values => modelFormActions.changeField('vacancy', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('vacancy', errs),
          onValid: () => modelFormActions.resetFieldError('vacancy'),
          errors: getNestedObjectField(modelErrors, 'vacancy'),
          validate: {
            required: true,
            checkOnBlur: true,
          },
          onSearch: (value) => vacancySearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: vacancyArrayIsLoading ? '' : undefined,
          onScrollToEnd: vacancyNextPageAction,
          missingValueResolver: value => vacancyEntities.getById(value).name,
          isLoading: vacancyArrayIsLoading,
        }}
      />
      <DateTimePicker
            {...{
            label: 'statusDate',
          placeholder: 'Not chosen',
          value: model.statusDate,
          errors: modelErrors.statusDate,
          onChange: val => modelFormActions.changeField('statusDate', val),
          onValid: () => modelFormActions.resetFieldError('statusDate'),
          onInvalid: err => modelFormActions.setFieldError('statusDate', err),
            validate: {
              checkOnBlur: true,
              requiredDate: false,
              requiredTime: false,
            },
          }}
        />
      <DateTimePicker
            {...{
            label: 'resolveDate',
          placeholder: 'Not chosen',
          value: model.resolveDate,
          errors: modelErrors.resolveDate,
          onChange: val => modelFormActions.changeField('resolveDate', val),
          onValid: () => modelFormActions.resetFieldError('resolveDate'),
          onInvalid: err => modelFormActions.setFieldError('resolveDate', err),
            validate: {
              checkOnBlur: true,
              requiredDate: false,
              requiredTime: false,
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
    </React.Fragment>
  )
}
export default EditComponent