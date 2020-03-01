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
  requestVacationEntities,
  requestVacationApiActions, 
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
      
      const [requestVacationSearch, requestVacationSearchSet] = React.useState('')
      const requestVacationApiConfig = {
        filter: {
          q: requestVacationSearch ? 'like(name,*' + requestVacationSearch + ')' : '',
          depth: 1,
        },
      }
      const requestVacationArray = requestVacationEntities.getArray(requestVacationApiConfig)
      const requestVacationArrayIsLoading = requestVacationEntities.getIsLoadingArray(requestVacationApiConfig)
      const requestVacationNextPage = requestVacationEntities.getNextPage(requestVacationApiConfig)
      const requestVacationNextPageAction = () => {
        if (requestVacationNextPage) {
          requestVacationApiActions.loadNextPage(requestVacationApiConfig)
        }
      }
      
  return (
    <React.Fragment>
      <TInput
          {...{
          type: INPUT_TYPES.float,
          label: 'priority',
          placeholder: 'Not chosen',
          value: model.priority,
          errors: modelErrors.priority,
          onChange: val => modelFormActions.changeField('priority', val),
          onValid: () => modelFormActions.resetFieldError('priority'),
          onInvalid: err => modelFormActions.setFieldError('priority', err),
          validate: {
            checkOnBlur: true,
            required: true,
          },
        }}
      />
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
          label: 'requestVacation',
          items: requestVacationArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.requestVacation && [model.requestVacation],
          onChange: values => modelFormActions.changeField('requestVacation', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('requestVacation', errs),
          onValid: () => modelFormActions.resetFieldError('requestVacation'),
          errors: getNestedObjectField(modelErrors, 'requestVacation'),
          validate: {
            required: false,
            checkOnBlur: true,
          },
          onSearch: (value) => requestVacationSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: requestVacationArrayIsLoading ? '' : undefined,
          onScrollToEnd: requestVacationNextPageAction,
          missingValueResolver: value => requestVacationEntities.getById(value).name,
          isLoading: requestVacationArrayIsLoading,
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'approve',
          placeholder: 'Not chosen',
          value: model.approve,
          errors: modelErrors.approve,
          onChange: val => modelFormActions.changeField('approve', val),
          onValid: () => modelFormActions.resetFieldError('approve'),
          onInvalid: err => modelFormActions.setFieldError('approve', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'comment',
          placeholder: 'Not chosen',
          value: model.comment,
          errors: modelErrors.comment,
          onChange: val => modelFormActions.changeField('comment', val),
          onValid: () => modelFormActions.resetFieldError('comment'),
          onInvalid: err => modelFormActions.setFieldError('comment', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <DateTimePicker
            {...{
            label: 'approveDate',
          placeholder: 'Not chosen',
          value: model.approveDate,
          errors: modelErrors.approveDate,
          onChange: val => modelFormActions.changeField('approveDate', val),
          onValid: () => modelFormActions.resetFieldError('approveDate'),
          onInvalid: err => modelFormActions.setFieldError('approveDate', err),
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