import React from 'react'
import TSelect, { SELECT_TYPES } from '$trood/components/TSelect'
import { getNestedObjectField } from '$trood/helpers/nestedObjects'
import DateTimePicker from '$trood/components/DateTimePicker'
import TInput, { INPUT_TYPES } from '$trood/components/TInput'

const EditComponent = ({
  model,
  modelErrors,
  modelFormActions,
  timerStatusEntities,
  timerStatusApiActions,
  employeeEntities,
  employeeApiActions,
  activityEntities,
  activityApiActions, 
}) => {
      const [timerStatusSearch, timerStatusSearchSet] = React.useState('')
      const timerStatusApiConfig = {
        filter: {
          q: timerStatusSearch ? 'like(name,*' + timerStatusSearch + ')' : '',
          depth: 1,
        },
      }
      const timerStatusArray = timerStatusEntities.getArray(timerStatusApiConfig)
      const timerStatusArrayIsLoading = timerStatusEntities.getIsLoadingArray(timerStatusApiConfig)
      const timerStatusNextPage = timerStatusEntities.getNextPage(timerStatusApiConfig)
      const timerStatusNextPageAction = () => {
        if (timerStatusNextPage) {
          timerStatusApiActions.loadNextPage(timerStatusApiConfig)
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
      
      const [activitySearch, activitySearchSet] = React.useState('')
      const activityApiConfig = {
        filter: {
          q: activitySearch ? 'like(name,*' + activitySearch + ')' : '',
          depth: 1,
        },
      }
      const activityArray = activityEntities.getArray(activityApiConfig)
      const activityArrayIsLoading = activityEntities.getIsLoadingArray(activityApiConfig)
      const activityNextPage = activityEntities.getNextPage(activityApiConfig)
      const activityNextPageAction = () => {
        if (activityNextPage) {
          activityApiActions.loadNextPage(activityApiConfig)
        }
      }
      
  return (
    <React.Fragment>
      <TSelect
        {...{
          label: 'timerStatus',
          items: timerStatusArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.timerStatus && [model.timerStatus],
          onChange: values => modelFormActions.changeField('timerStatus', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('timerStatus', errs),
          onValid: () => modelFormActions.resetFieldError('timerStatus'),
          errors: getNestedObjectField(modelErrors, 'timerStatus'),
          validate: {
            required: true,
            checkOnBlur: true,
          },
          onSearch: (value) => timerStatusSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: timerStatusArrayIsLoading ? '' : undefined,
          onScrollToEnd: timerStatusNextPageAction,
          missingValueResolver: value => timerStatusEntities.getById(value).name,
          isLoading: timerStatusArrayIsLoading,
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
          label: 'activity',
          items: activityArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.activity && [model.activity],
          onChange: values => modelFormActions.changeField('activity', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('activity', errs),
          onValid: () => modelFormActions.resetFieldError('activity'),
          errors: getNestedObjectField(modelErrors, 'activity'),
          validate: {
            required: false,
            checkOnBlur: true,
          },
          onSearch: (value) => activitySearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: activityArrayIsLoading ? '' : undefined,
          onScrollToEnd: activityNextPageAction,
          missingValueResolver: value => activityEntities.getById(value).name,
          isLoading: activityArrayIsLoading,
        }}
      />
      <DateTimePicker
            {...{
            label: 'start',
          placeholder: 'Not chosen',
          value: model.start,
          errors: modelErrors.start,
          onChange: val => modelFormActions.changeField('start', val),
          onValid: () => modelFormActions.resetFieldError('start'),
          onInvalid: err => modelFormActions.setFieldError('start', err),
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
          label: 'duration',
          placeholder: 'Not chosen',
          value: model.duration,
          errors: modelErrors.duration,
          onChange: val => modelFormActions.changeField('duration', val),
          onValid: () => modelFormActions.resetFieldError('duration'),
          onInvalid: err => modelFormActions.setFieldError('duration', err),
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