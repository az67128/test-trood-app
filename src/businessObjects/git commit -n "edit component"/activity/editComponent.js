import React from 'react'
import style from './editComponent.css'
import modalsStyle from '$trood/styles/modals.css'
import classNames from 'classnames'
import TInput, { INPUT_TYPES } from '$trood/components/TInput'
import TSelect, { SELECT_TYPES } from '$trood/components/TSelect'
import { RESTIFY_CONFIG } from 'redux-restify'
import TCheckbox from '$trood/components/TCheckbox'
import DateTimePicker, { PICKER_TYPES } from '$trood/components/DateTimePicker'


const EditComponent = ({
  activityAccessStatusApiActions,
  activityAccessStatusEntities,
  invitationListApiActions,
  invitationListEntities,
  activityTypeApiActions,
  activityTypeEntities,
  matterApiActions,
  matterEntities,
  activityStatusApiActions,
  activityStatusEntities,
  employeeApiActions,
  employeeEntities,
  modelFormActions,
  modelErrors,
  model, 
}) => {
  const [employeeSearch, employeeSearchSet] = React.useState('')
  const employeeModelConfig = RESTIFY_CONFIG.registeredModels.employee
  const employeeApiConfig = {
    filter: {
      q: employeeSearch ? `eq(${employeeModelConfig.idField},${employeeSearch})` : '',
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
      
  const [activityStatusSearch, activityStatusSearchSet] = React.useState('')
  const activityStatusModelConfig = RESTIFY_CONFIG.registeredModels.activityStatus
  const activityStatusApiConfig = {
    filter: {
      q: activityStatusSearch ? `eq(${activityStatusModelConfig.idField},${activityStatusSearch})` : '',
      depth: 1,
    },
  }
  const activityStatusArray = activityStatusEntities.getArray(activityStatusApiConfig)
  const activityStatusArrayIsLoading = activityStatusEntities.getIsLoadingArray(activityStatusApiConfig)
  const activityStatusNextPage = activityStatusEntities.getNextPage(activityStatusApiConfig)
  const activityStatusNextPageAction = () => {
    if (activityStatusNextPage) {
      activityStatusApiActions.loadNextPage(activityStatusApiConfig)
    }
  }
      
  const [matterSearch, matterSearchSet] = React.useState('')
  const matterModelConfig = RESTIFY_CONFIG.registeredModels.matter
  const matterApiConfig = {
    filter: {
      q: matterSearch ? `eq(${matterModelConfig.idField},${matterSearch})` : '',
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
      
  const [activityTypeSearch, activityTypeSearchSet] = React.useState('')
  const activityTypeModelConfig = RESTIFY_CONFIG.registeredModels.activityType
  const activityTypeApiConfig = {
    filter: {
      q: activityTypeSearch ? `eq(${activityTypeModelConfig.idField},${activityTypeSearch})` : '',
      depth: 1,
    },
  }
  const activityTypeArray = activityTypeEntities.getArray(activityTypeApiConfig)
  const activityTypeArrayIsLoading = activityTypeEntities.getIsLoadingArray(activityTypeApiConfig)
  const activityTypeNextPage = activityTypeEntities.getNextPage(activityTypeApiConfig)
  const activityTypeNextPageAction = () => {
    if (activityTypeNextPage) {
      activityTypeApiActions.loadNextPage(activityTypeApiConfig)
    }
  }
      
  const [invitationListSearch, invitationListSearchSet] = React.useState('')
  const invitationListModelConfig = RESTIFY_CONFIG.registeredModels.invitationList
  const invitationListApiConfig = {
    filter: {
      q: invitationListSearch ? `eq(${invitationListModelConfig.idField},${invitationListSearch})` : '',
      depth: 1,
    },
  }
  const invitationListArray = invitationListEntities.getArray(invitationListApiConfig)
  const invitationListArrayIsLoading = invitationListEntities.getIsLoadingArray(invitationListApiConfig)
  const invitationListNextPage = invitationListEntities.getNextPage(invitationListApiConfig)
  const invitationListNextPageAction = () => {
    if (invitationListNextPage) {
      invitationListApiActions.loadNextPage(invitationListApiConfig)
    }
  }
      
  const [activityAccessStatusSearch, activityAccessStatusSearchSet] = React.useState('')
  const activityAccessStatusModelConfig = RESTIFY_CONFIG.registeredModels.activityAccessStatus
  const activityAccessStatusApiConfig = {
    filter: {
      q: activityAccessStatusSearch ? `eq(${activityAccessStatusModelConfig.idField},${activityAccessStatusSearch})` : '',
      depth: 1,
    },
  }
  const activityAccessStatusArray = activityAccessStatusEntities.getArray(activityAccessStatusApiConfig)
  const activityAccessStatusArrayIsLoading = activityAccessStatusEntities.getIsLoadingArray(activityAccessStatusApiConfig)
  const activityAccessStatusNextPage = activityAccessStatusEntities.getNextPage(activityAccessStatusApiConfig)
  const activityAccessStatusNextPageAction = () => {
    if (activityAccessStatusNextPage) {
      activityAccessStatusApiActions.loadNextPage(activityAccessStatusApiConfig)
    }
  }
      
  return (
    <div {...{className: classNames(style.root, modalsStyle.root)}}>
      <TInput
          {...{
            type: INPUT_TYPES.multi,
            label: 'name',
            className: modalsStyle.control,
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
          className: modalsStyle.control,
          items: employeeArray.map(item => ({
            value: item[employeeModelConfig.idField], 
            label: item.name || item[employeeModelConfig.idField],
          })),
          values: model.responsible 
            ? [model.responsible] 
            : [],
          onChange: vals => modelFormActions.changeField('responsible',
            vals[0],
          ),
          onSearch: (value) => employeeSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: employeeArrayIsLoading ? '' : undefined,
          onScrollToEnd: employeeNextPageAction,
          isLoading: employeeArrayIsLoading,
          missingValueResolver: value => employeeEntities.getById(value)['responsible'],
          label: 'responsible',
          errors: modelErrors.responsible,
          onValid: () => modelFormActions.resetFieldError('responsible'),
          onInvalid: err => modelFormActions.setFieldError('responsible', err),
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
          values: model.executor 
            ? [model.executor] 
            : [],
          onChange: vals => modelFormActions.changeField('executor',
            vals[0],
          ),
          onSearch: (value) => employeeSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: employeeArrayIsLoading ? '' : undefined,
          onScrollToEnd: employeeNextPageAction,
          isLoading: employeeArrayIsLoading,
          missingValueResolver: value => employeeEntities.getById(value)['executor'],
          label: 'executor',
          errors: modelErrors.executor,
          onValid: () => modelFormActions.resetFieldError('executor'),
          onInvalid: err => modelFormActions.setFieldError('executor', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: false,
          placeHolder: 'Not set',
        }}
      />
      <TSelect
        {...{
          className: modalsStyle.control,
          items: activityStatusArray.map(item => ({
            value: item[activityStatusModelConfig.idField], 
            label: item.name || item[activityStatusModelConfig.idField],
          })),
          values: model.activityStatus 
            ? [model.activityStatus] 
            : [],
          onChange: vals => modelFormActions.changeField('activityStatus',
            vals[0],
          ),
          onSearch: (value) => activityStatusSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: activityStatusArrayIsLoading ? '' : undefined,
          onScrollToEnd: activityStatusNextPageAction,
          isLoading: activityStatusArrayIsLoading,
          missingValueResolver: value => activityStatusEntities.getById(value)['activityStatus'],
          label: 'activityStatus',
          errors: modelErrors.activityStatus,
          onValid: () => modelFormActions.resetFieldError('activityStatus'),
          onInvalid: err => modelFormActions.setFieldError('activityStatus', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: true,
          placeHolder: 'Not set',
        }}
      />
      <TSelect
        {...{
          className: modalsStyle.control,
          items: matterArray.map(item => ({
            value: item[matterModelConfig.idField], 
            label: item.name || item[matterModelConfig.idField],
          })),
          values: model.matter 
            ? [model.matter] 
            : [],
          onChange: vals => modelFormActions.changeField('matter',
            vals[0],
          ),
          onSearch: (value) => matterSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: matterArrayIsLoading ? '' : undefined,
          onScrollToEnd: matterNextPageAction,
          isLoading: matterArrayIsLoading,
          missingValueResolver: value => matterEntities.getById(value)['matter'],
          label: 'matter',
          errors: modelErrors.matter,
          onValid: () => modelFormActions.resetFieldError('matter'),
          onInvalid: err => modelFormActions.setFieldError('matter', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: false,
          placeHolder: 'Not set',
        }}
      />
      <TCheckbox
          {...{
            label: 'important',
            className: modalsStyle.control,
            value: model.important,
            errors: modelErrors.important,
            onChange: val => modelFormActions.changeField('important', val),
            onValid: () => modelFormActions.resetFieldError('important'),
            onInvalid: err => modelFormActions.setFieldError('important', err),
            validate: {
              checkOnBlur: true,
              required: false,
            },
          }}
        />
      <DateTimePicker
            {...{
              label: 'created',
            className: modalsStyle.control,
            value: model.created,
            errors: modelErrors.created,
            onChange: val => modelFormActions.changeField('created', val),
            onValid: () => modelFormActions.resetFieldError('created'),
            onInvalid: err => modelFormActions.setFieldError('created', err),
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
            type: INPUT_TYPES.multi,
            label: 'details',
            className: modalsStyle.control,
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
      <DateTimePicker
            {...{
              label: 'deadline',
            className: modalsStyle.control,
            value: model.deadline,
            errors: modelErrors.deadline,
            onChange: val => modelFormActions.changeField('deadline', val),
            onValid: () => modelFormActions.resetFieldError('deadline'),
            onInvalid: err => modelFormActions.setFieldError('deadline', err),
              type: PICKER_TYPES.dateTime,
              validate: {
                checkOnBlur: true,
                requiredDate: false,
                requiredTime: false,
            },
          }}
        />
      <TCheckbox
          {...{
            label: 'deleted',
            className: modalsStyle.control,
            value: model.deleted,
            errors: modelErrors.deleted,
            onChange: val => modelFormActions.changeField('deleted', val),
            onValid: () => modelFormActions.resetFieldError('deleted'),
            onInvalid: err => modelFormActions.setFieldError('deleted', err),
            validate: {
              checkOnBlur: true,
              required: false,
            },
          }}
        />
      <TSelect
        {...{
          className: modalsStyle.control,
          items: activityTypeArray.map(item => ({
            value: item[activityTypeModelConfig.idField], 
            label: item.name || item[activityTypeModelConfig.idField],
          })),
          values: model.activityType 
            ? [model.activityType] 
            : [],
          onChange: vals => modelFormActions.changeField('activityType',
            vals[0],
          ),
          onSearch: (value) => activityTypeSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: activityTypeArrayIsLoading ? '' : undefined,
          onScrollToEnd: activityTypeNextPageAction,
          isLoading: activityTypeArrayIsLoading,
          missingValueResolver: value => activityTypeEntities.getById(value)['activityType'],
          label: 'activityType',
          errors: modelErrors.activityType,
          onValid: () => modelFormActions.resetFieldError('activityType'),
          onInvalid: err => modelFormActions.setFieldError('activityType', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: true,
          placeHolder: 'Not set',
        }}
      />
      <TSelect
        {...{
          className: modalsStyle.control,
          items: invitationListArray.map(item => ({
            value: item[invitationListModelConfig.idField], 
            label: item.name || item[invitationListModelConfig.idField],
          })),
          values: model.invitationList 
            ? [model.invitationList] 
            : [],
          onChange: vals => modelFormActions.changeField('invitationList',
            vals[0],
          ),
          onSearch: (value) => invitationListSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: invitationListArrayIsLoading ? '' : undefined,
          onScrollToEnd: invitationListNextPageAction,
          isLoading: invitationListArrayIsLoading,
          missingValueResolver: value => invitationListEntities.getById(value)['invitationList'],
          label: 'invitationList',
          errors: modelErrors.invitationList,
          onValid: () => modelFormActions.resetFieldError('invitationList'),
          onInvalid: err => modelFormActions.setFieldError('invitationList', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: false,
          placeHolder: 'Not set',
        }}
      />
      <TSelect
        {...{
          className: modalsStyle.control,
          items: activityAccessStatusArray.map(item => ({
            value: item[activityAccessStatusModelConfig.idField], 
            label: item.name || item[activityAccessStatusModelConfig.idField],
          })),
          values: model.activityAccessStatus 
            ? [model.activityAccessStatus] 
            : [],
          onChange: vals => modelFormActions.changeField('activityAccessStatus',
            vals[0],
          ),
          onSearch: (value) => activityAccessStatusSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: activityAccessStatusArrayIsLoading ? '' : undefined,
          onScrollToEnd: activityAccessStatusNextPageAction,
          isLoading: activityAccessStatusArrayIsLoading,
          missingValueResolver: value => activityAccessStatusEntities.getById(value)['activityAccessStatus'],
          label: 'activityAccessStatus',
          errors: modelErrors.activityAccessStatus,
          onValid: () => modelFormActions.resetFieldError('activityAccessStatus'),
          onInvalid: err => modelFormActions.setFieldError('activityAccessStatus', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: true,
          placeHolder: 'Not set',
        }}
      />
      <TCheckbox
          {...{
            label: 'haveTime',
            className: modalsStyle.control,
            value: model.haveTime,
            errors: modelErrors.haveTime,
            onChange: val => modelFormActions.changeField('haveTime', val),
            onValid: () => modelFormActions.resetFieldError('haveTime'),
            onInvalid: err => modelFormActions.setFieldError('haveTime', err),
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