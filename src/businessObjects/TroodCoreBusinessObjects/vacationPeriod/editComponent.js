import React from 'react'
import DateTimePicker from '$trood/components/DateTimePicker'
import TCheckbox from '$trood/components/TCheckbox'
import TSelect, { SELECT_TYPES } from '$trood/components/TSelect'
import { getNestedObjectField } from '$trood/helpers/nestedObjects'

const EditComponent = ({
  model,
  modelErrors,
  modelFormActions,
  requestVacationEntities,
  requestVacationApiActions,
  employeeEntities,
  employeeApiActions, 
}) => {
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
      
  return (
    <React.Fragment>
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
              requiredDate: true,
              requiredTime: true,
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
              requiredDate: true,
              requiredTime: true,
            },
          }}
        />
      <TCheckbox
            {...{
            label: 'paid',
          placeholder: 'Not chosen',
          value: model.paid,
          errors: modelErrors.paid,
          onChange: val => modelFormActions.changeField('paid', val),
          onValid: () => modelFormActions.resetFieldError('paid'),
          onInvalid: err => modelFormActions.setFieldError('paid', err),
            validate: {
              checkOnBlur: true,
              required: true,
            },
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
          label: 'vacationIs',
          items: employeeArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.vacationIs && [model.vacationIs],
          onChange: values => modelFormActions.changeField('vacationIs', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('vacationIs', errs),
          onValid: () => modelFormActions.resetFieldError('vacationIs'),
          errors: getNestedObjectField(modelErrors, 'vacationIs'),
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
    </React.Fragment>
  )
}
export default EditComponent