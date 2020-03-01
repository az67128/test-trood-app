import React from 'react'
import TSelect, { SELECT_TYPES } from '$trood/components/TSelect'
import { getNestedObjectField } from '$trood/helpers/nestedObjects'
import DateTimePicker from '$trood/components/DateTimePicker'
import TInput, { INPUT_TYPES } from '$trood/components/TInput'

const EditComponent = ({
  model,
  modelErrors,
  modelFormActions,
  employeeEntities,
  employeeApiActions,
  statusRequestVacationEntities,
  statusRequestVacationApiActions, 
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
      
      const [statusRequestVacationSearch, statusRequestVacationSearchSet] = React.useState('')
      const statusRequestVacationApiConfig = {
        filter: {
          q: statusRequestVacationSearch ? 'like(name,*' + statusRequestVacationSearch + ')' : '',
          depth: 1,
        },
      }
      const statusRequestVacationArray = statusRequestVacationEntities.getArray(statusRequestVacationApiConfig)
      const statusRequestVacationArrayIsLoading = statusRequestVacationEntities.getIsLoadingArray(statusRequestVacationApiConfig)
      const statusRequestVacationNextPage = statusRequestVacationEntities.getNextPage(statusRequestVacationApiConfig)
      const statusRequestVacationNextPageAction = () => {
        if (statusRequestVacationNextPage) {
          statusRequestVacationApiActions.loadNextPage(statusRequestVacationApiConfig)
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
      <TSelect
        {...{
          label: 'statusRequestVacation',
          items: statusRequestVacationArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.statusRequestVacation && [model.statusRequestVacation],
          onChange: values => modelFormActions.changeField('statusRequestVacation', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('statusRequestVacation', errs),
          onValid: () => modelFormActions.resetFieldError('statusRequestVacation'),
          errors: getNestedObjectField(modelErrors, 'statusRequestVacation'),
          validate: {
            required: false,
            checkOnBlur: true,
          },
          onSearch: (value) => statusRequestVacationSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: statusRequestVacationArrayIsLoading ? '' : undefined,
          onScrollToEnd: statusRequestVacationNextPageAction,
          missingValueResolver: value => statusRequestVacationEntities.getById(value).name,
          isLoading: statusRequestVacationArrayIsLoading,
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
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'vacationPeriodSet',
          placeholder: 'Not chosen',
          value: model.vacationPeriodSet,
          errors: modelErrors.vacationPeriodSet,
          onChange: val => modelFormActions.changeField('vacationPeriodSet', val),
          onValid: () => modelFormActions.resetFieldError('vacationPeriodSet'),
          onInvalid: err => modelFormActions.setFieldError('vacationPeriodSet', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'approverSet',
          placeholder: 'Not chosen',
          value: model.approverSet,
          errors: modelErrors.approverSet,
          onChange: val => modelFormActions.changeField('approverSet', val),
          onValid: () => modelFormActions.resetFieldError('approverSet'),
          onInvalid: err => modelFormActions.setFieldError('approverSet', err),
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