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
  matterEntities,
  matterApiActions,
  rateTypeEntities,
  rateTypeApiActions, 
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
      
      const [rateTypeSearch, rateTypeSearchSet] = React.useState('')
      const rateTypeApiConfig = {
        filter: {
          q: rateTypeSearch ? 'like(name,*' + rateTypeSearch + ')' : '',
          depth: 1,
        },
      }
      const rateTypeArray = rateTypeEntities.getArray(rateTypeApiConfig)
      const rateTypeArrayIsLoading = rateTypeEntities.getIsLoadingArray(rateTypeApiConfig)
      const rateTypeNextPage = rateTypeEntities.getNextPage(rateTypeApiConfig)
      const rateTypeNextPageAction = () => {
        if (rateTypeNextPage) {
          rateTypeApiActions.loadNextPage(rateTypeApiConfig)
        }
      }
      
  return (
    <React.Fragment>
      <TSelect
        {...{
          label: 'employee',
          items: employeeArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.employee && [model.employee],
          onChange: values => modelFormActions.changeField('employee', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('employee', errs),
          onValid: () => modelFormActions.resetFieldError('employee'),
          errors: getNestedObjectField(modelErrors, 'employee'),
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
      <TSelect
        {...{
          label: 'rateType',
          items: rateTypeArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.rateType && [model.rateType],
          onChange: values => modelFormActions.changeField('rateType', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('rateType', errs),
          onValid: () => modelFormActions.resetFieldError('rateType'),
          errors: getNestedObjectField(modelErrors, 'rateType'),
          validate: {
            required: true,
            checkOnBlur: true,
          },
          onSearch: (value) => rateTypeSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: rateTypeArrayIsLoading ? '' : undefined,
          onScrollToEnd: rateTypeNextPageAction,
          missingValueResolver: value => rateTypeEntities.getById(value).name,
          isLoading: rateTypeArrayIsLoading,
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.float,
          label: 'rate',
          placeholder: 'Not chosen',
          value: model.rate,
          errors: modelErrors.rate,
          onChange: val => modelFormActions.changeField('rate', val),
          onValid: () => modelFormActions.resetFieldError('rate'),
          onInvalid: err => modelFormActions.setFieldError('rate', err),
          validate: {
            checkOnBlur: true,
            required: true,
          },
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'assessmentSet',
          placeholder: 'Not chosen',
          value: model.assessmentSet,
          errors: modelErrors.assessmentSet,
          onChange: val => modelFormActions.changeField('assessmentSet', val),
          onValid: () => modelFormActions.resetFieldError('assessmentSet'),
          onInvalid: err => modelFormActions.setFieldError('assessmentSet', err),
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