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
  vacancyStatusEntities,
  vacancyStatusApiActions, 
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
      
      const [vacancyStatusSearch, vacancyStatusSearchSet] = React.useState('')
      const vacancyStatusApiConfig = {
        filter: {
          q: vacancyStatusSearch ? 'like(name,*' + vacancyStatusSearch + ')' : '',
          depth: 1,
        },
      }
      const vacancyStatusArray = vacancyStatusEntities.getArray(vacancyStatusApiConfig)
      const vacancyStatusArrayIsLoading = vacancyStatusEntities.getIsLoadingArray(vacancyStatusApiConfig)
      const vacancyStatusNextPage = vacancyStatusEntities.getNextPage(vacancyStatusApiConfig)
      const vacancyStatusNextPageAction = () => {
        if (vacancyStatusNextPage) {
          vacancyStatusApiActions.loadNextPage(vacancyStatusApiConfig)
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
      <TSelect
        {...{
          label: 'vacancyStatus',
          items: vacancyStatusArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.vacancyStatus && [model.vacancyStatus],
          onChange: values => modelFormActions.changeField('vacancyStatus', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('vacancyStatus', errs),
          onValid: () => modelFormActions.resetFieldError('vacancyStatus'),
          errors: getNestedObjectField(modelErrors, 'vacancyStatus'),
          validate: {
            required: true,
            checkOnBlur: true,
          },
          onSearch: (value) => vacancyStatusSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: vacancyStatusArrayIsLoading ? '' : undefined,
          onScrollToEnd: vacancyStatusNextPageAction,
          missingValueResolver: value => vacancyStatusEntities.getById(value).name,
          isLoading: vacancyStatusArrayIsLoading,
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