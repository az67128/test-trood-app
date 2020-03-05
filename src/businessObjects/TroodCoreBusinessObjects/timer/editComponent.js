import React from 'react'
import style from './editComponent.css'
import modalsStyle from '$trood/styles/modals.css'
import classNames from 'classnames'
import TSelect, { SELECT_TYPES } from '$trood/components/TSelect'
import { RESTIFY_CONFIG } from 'redux-restify'
import DateTimePicker, { PICKER_TYPES } from '$trood/components/DateTimePicker'
import TInput, { INPUT_TYPES } from '$trood/components/TInput'


const EditComponent = ({
  activityApiActions,
  activityEntities,
  employeeApiActions,
  employeeEntities,
  timerStatusApiActions,
  timerStatusEntities,
  modelFormActions,
  modelErrors,
  model, 
}) => {
  const [timerStatusSearch, timerStatusSearchSet] = React.useState('')
  const timerStatusModelConfig = RESTIFY_CONFIG.registeredModels.timerStatus
  const timerStatusApiConfig = {
    filter: {
      q: timerStatusSearch 
        ? `eq(${timerStatusModelConfig.idField},${timerStatusSearch})`
        : '',
      depth: 1,
    },
  }
  const timerStatusArray = timerStatusEntities.getArray(timerStatusApiConfig)
  const timerStatusArrayIsLoading = timerStatusEntities.getIsLoadingArray(
    timerStatusApiConfig,
  )
  const timerStatusNextPage = timerStatusEntities.getNextPage(timerStatusApiConfig)
  const timerStatusNextPageAction = () => {
    if (timerStatusNextPage) {
      timerStatusApiActions.loadNextPage(timerStatusApiConfig)
    }
  }
      
  const [employeeSearch, employeeSearchSet] = React.useState('')
  const employeeModelConfig = RESTIFY_CONFIG.registeredModels.employee
  const employeeApiConfig = {
    filter: {
      q: employeeSearch 
        ? `eq(${employeeModelConfig.idField},${employeeSearch})`
        : '',
      depth: 1,
    },
  }
  const employeeArray = employeeEntities.getArray(employeeApiConfig)
  const employeeArrayIsLoading = employeeEntities.getIsLoadingArray(
    employeeApiConfig,
  )
  const employeeNextPage = employeeEntities.getNextPage(employeeApiConfig)
  const employeeNextPageAction = () => {
    if (employeeNextPage) {
      employeeApiActions.loadNextPage(employeeApiConfig)
    }
  }
      
  const [activitySearch, activitySearchSet] = React.useState('')
  const activityModelConfig = RESTIFY_CONFIG.registeredModels.activity
  const activityApiConfig = {
    filter: {
      q: activitySearch 
        ? `eq(${activityModelConfig.idField},${activitySearch})`
        : '',
      depth: 1,
    },
  }
  const activityArray = activityEntities.getArray(activityApiConfig)
  const activityArrayIsLoading = activityEntities.getIsLoadingArray(
    activityApiConfig,
  )
  const activityNextPage = activityEntities.getNextPage(activityApiConfig)
  const activityNextPageAction = () => {
    if (activityNextPage) {
      activityApiActions.loadNextPage(activityApiConfig)
    }
  }
      
  return (
    <div className={classNames(style.root, modalsStyle.root)}>
      <TSelect
        {...{
          className: modalsStyle.control,
          items: timerStatusArray.map(item => ({
            value: item[timerStatusModelConfig.idField], 
            label: item.name || item[timerStatusModelConfig.idField],
          })),
          values: model.timerStatus 
            ? [model.timerStatus] 
            : [],
          onChange: vals => modelFormActions.changeField('timerStatus',
            vals[0],
          ),
          onSearch: (value) => timerStatusSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: timerStatusArrayIsLoading ? '' : undefined,
          onScrollToEnd: timerStatusNextPageAction,
          isLoading: timerStatusArrayIsLoading,
          missingValueResolver: value => timerStatusEntities.getById(value)['timerStatus'],
          label: 'timerStatus',
          errors: modelErrors.timerStatus,
          onValid: () => modelFormActions.resetFieldError('timerStatus'),
          onInvalid: err => modelFormActions.setFieldError('timerStatus', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: true,
          placeHolder: 'Not set',
        }}
      />
      <TSelect
        {...{
          className: modalsStyle.control,
          items: employeeArray.map(item => ({
            value: item[employeeModelConfig.idField], 
            label: item.name || item[employeeModelConfig.idField],
          })),
          values: model.employee 
            ? [model.employee] 
            : [],
          onChange: vals => modelFormActions.changeField('employee',
            vals[0],
          ),
          onSearch: (value) => employeeSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: employeeArrayIsLoading ? '' : undefined,
          onScrollToEnd: employeeNextPageAction,
          isLoading: employeeArrayIsLoading,
          missingValueResolver: value => employeeEntities.getById(value)['employee'],
          label: 'employee',
          errors: modelErrors.employee,
          onValid: () => modelFormActions.resetFieldError('employee'),
          onInvalid: err => modelFormActions.setFieldError('employee', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: true,
          placeHolder: 'Not set',
        }}
      />
      <TSelect
        {...{
          className: modalsStyle.control,
          items: activityArray.map(item => ({
            value: item[activityModelConfig.idField], 
            label: item.name || item[activityModelConfig.idField],
          })),
          values: model.activity 
            ? [model.activity] 
            : [],
          onChange: vals => modelFormActions.changeField('activity',
            vals[0],
          ),
          onSearch: (value) => activitySearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: activityArrayIsLoading ? '' : undefined,
          onScrollToEnd: activityNextPageAction,
          isLoading: activityArrayIsLoading,
          missingValueResolver: value => activityEntities.getById(value)['activity'],
          label: 'activity',
          errors: modelErrors.activity,
          onValid: () => modelFormActions.resetFieldError('activity'),
          onInvalid: err => modelFormActions.setFieldError('activity', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: false,
          placeHolder: 'Not set',
        }}
      />
      <DateTimePicker
            {...{
              label: 'start',
            className: modalsStyle.control,
            value: model.start,
            errors: modelErrors.start,
            onChange: val => modelFormActions.changeField('start', val),
            onValid: () => modelFormActions.resetFieldError('start'),
            onInvalid: err => modelFormActions.setFieldError('start', err),
              type: PICKER_TYPES.dateTime,
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
            className: modalsStyle.control,
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
    </div>
  )
}
export default EditComponent