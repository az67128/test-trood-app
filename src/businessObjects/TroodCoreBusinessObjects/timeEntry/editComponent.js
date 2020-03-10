import React, { useState } from 'react'
import style from './editComponent.css'
import modalsStyle from '$trood/styles/modals.css'
import classNames from 'classnames'
import TSelect, { SELECT_TYPES } from '$trood/components/TSelect'
import { RESTIFY_CONFIG } from 'redux-restify'
import TInput, { INPUT_TYPES } from '$trood/components/TInput'
import DateTimePicker, { PICKER_TYPES } from '$trood/components/DateTimePicker'
import TCheckbox from '$trood/components/TCheckbox'


const EditComponent = ({
  timeEntryStatusApiActions,
  timeEntryStatusEntities,
  utbmsApiActions,
  utbmsEntities,
  billApiActions,
  billEntities,
  activityApiActions,
  activityEntities,
  matterApiActions,
  matterEntities,
  timeEntryBillableApiActions,
  timeEntryBillableEntities,
  employeeApiActions,
  employeeEntities,
  modelFormActions,
  modelErrors,
  model, 
}) => {
  const [employeeSearch, employeeSearchSet] = useState('')
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
      
  const [timeEntryBillableSearch, timeEntryBillableSearchSet] = useState('')
  const timeEntryBillableModelConfig = RESTIFY_CONFIG.registeredModels.timeEntryBillable
  const timeEntryBillableApiConfig = {
    filter: {
      q: timeEntryBillableSearch 
        ? `eq(${timeEntryBillableModelConfig.idField},${timeEntryBillableSearch})`
        : '',
      depth: 1,
    },
  }
  const timeEntryBillableArray = timeEntryBillableEntities.getArray(timeEntryBillableApiConfig)
  const timeEntryBillableArrayIsLoading = timeEntryBillableEntities.getIsLoadingArray(
    timeEntryBillableApiConfig,
  )
  const timeEntryBillableNextPage = timeEntryBillableEntities.getNextPage(timeEntryBillableApiConfig)
  const timeEntryBillableNextPageAction = () => {
    if (timeEntryBillableNextPage) {
      timeEntryBillableApiActions.loadNextPage(timeEntryBillableApiConfig)
    }
  }
      
  const [matterSearch, matterSearchSet] = useState('')
  const matterModelConfig = RESTIFY_CONFIG.registeredModels.matter
  const matterApiConfig = {
    filter: {
      q: matterSearch 
        ? `eq(${matterModelConfig.idField},${matterSearch})`
        : '',
      depth: 1,
    },
  }
  const matterArray = matterEntities.getArray(matterApiConfig)
  const matterArrayIsLoading = matterEntities.getIsLoadingArray(
    matterApiConfig,
  )
  const matterNextPage = matterEntities.getNextPage(matterApiConfig)
  const matterNextPageAction = () => {
    if (matterNextPage) {
      matterApiActions.loadNextPage(matterApiConfig)
    }
  }
      
  const [activitySearch, activitySearchSet] = useState('')
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
      
  const [billSearch, billSearchSet] = useState('')
  const billModelConfig = RESTIFY_CONFIG.registeredModels.bill
  const billApiConfig = {
    filter: {
      q: billSearch 
        ? `eq(${billModelConfig.idField},${billSearch})`
        : '',
      depth: 1,
    },
  }
  const billArray = billEntities.getArray(billApiConfig)
  const billArrayIsLoading = billEntities.getIsLoadingArray(
    billApiConfig,
  )
  const billNextPage = billEntities.getNextPage(billApiConfig)
  const billNextPageAction = () => {
    if (billNextPage) {
      billApiActions.loadNextPage(billApiConfig)
    }
  }
      
  const [utbmsSearch, utbmsSearchSet] = useState('')
  const utbmsModelConfig = RESTIFY_CONFIG.registeredModels.utbms
  const utbmsApiConfig = {
    filter: {
      q: utbmsSearch 
        ? `eq(${utbmsModelConfig.idField},${utbmsSearch})`
        : '',
      depth: 1,
    },
  }
  const utbmsArray = utbmsEntities.getArray(utbmsApiConfig)
  const utbmsArrayIsLoading = utbmsEntities.getIsLoadingArray(
    utbmsApiConfig,
  )
  const utbmsNextPage = utbmsEntities.getNextPage(utbmsApiConfig)
  const utbmsNextPageAction = () => {
    if (utbmsNextPage) {
      utbmsApiActions.loadNextPage(utbmsApiConfig)
    }
  }
      
  const [timeEntryStatusSearch, timeEntryStatusSearchSet] = useState('')
  const timeEntryStatusModelConfig = RESTIFY_CONFIG.registeredModels.timeEntryStatus
  const timeEntryStatusApiConfig = {
    filter: {
      q: timeEntryStatusSearch 
        ? `eq(${timeEntryStatusModelConfig.idField},${timeEntryStatusSearch})`
        : '',
      depth: 1,
    },
  }
  const timeEntryStatusArray = timeEntryStatusEntities.getArray(timeEntryStatusApiConfig)
  const timeEntryStatusArrayIsLoading = timeEntryStatusEntities.getIsLoadingArray(
    timeEntryStatusApiConfig,
  )
  const timeEntryStatusNextPage = timeEntryStatusEntities.getNextPage(timeEntryStatusApiConfig)
  const timeEntryStatusNextPageAction = () => {
    if (timeEntryStatusNextPage) {
      timeEntryStatusApiActions.loadNextPage(timeEntryStatusApiConfig)
    }
  }
      
  return (
    <div className={classNames(style.root, modalsStyle.root)}>
      <TSelect
        {...{
          className: modalsStyle.control,
          items: employeeArray.map(item => ({
            value: item[employeeModelConfig.idField], 
            label: item.name || item[employeeModelConfig.idField],
          })),
          values: model.author 
            ? [model.author] 
            : [],
          onChange: vals => modelFormActions.changeField('author',
            vals[0],
          ),
          onSearch: (value) => employeeSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: employeeArrayIsLoading ? '' : undefined,
          onScrollToEnd: employeeNextPageAction,
          isLoading: employeeArrayIsLoading,
          missingValueResolver: value => employeeEntities.getById(value)['author'],
          label: 'author',
          errors: modelErrors.author,
          onValid: () => modelFormActions.resetFieldError('author'),
          onInvalid: err => modelFormActions.setFieldError('author', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: true,
          placeHolder: 'Not set',
        }}
      />
      <TSelect
        {...{
          className: modalsStyle.control,
          items: timeEntryBillableArray.map(item => ({
            value: item[timeEntryBillableModelConfig.idField], 
            label: item.name || item[timeEntryBillableModelConfig.idField],
          })),
          values: model.timeEntryBillable 
            ? [model.timeEntryBillable] 
            : [],
          onChange: vals => modelFormActions.changeField('timeEntryBillable',
            vals[0],
          ),
          onSearch: (value) => timeEntryBillableSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: timeEntryBillableArrayIsLoading ? '' : undefined,
          onScrollToEnd: timeEntryBillableNextPageAction,
          isLoading: timeEntryBillableArrayIsLoading,
          missingValueResolver: value => timeEntryBillableEntities.getById(value)['timeEntryBillable'],
          label: 'timeEntryBillable',
          errors: modelErrors.timeEntryBillable,
          onValid: () => modelFormActions.resetFieldError('timeEntryBillable'),
          onInvalid: err => modelFormActions.setFieldError('timeEntryBillable', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: true,
          placeHolder: 'Not set',
        }}
      />
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
              required: true,
            },
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
          clearable: true,
          placeHolder: 'Not set',
        }}
      />
      <DateTimePicker
          {...{
            label: 'timeEntryDate',
            className: modalsStyle.control,
            value: model.timeEntryDate,
            errors: modelErrors.timeEntryDate,
            onChange: val => modelFormActions.changeField('timeEntryDate', val),
            onValid: () => modelFormActions.resetFieldError('timeEntryDate'),
            onInvalid: err => modelFormActions.setFieldError('timeEntryDate', err),
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
      <TSelect
        {...{
          className: modalsStyle.control,
          items: billArray.map(item => ({
            value: item[billModelConfig.idField], 
            label: item.name || item[billModelConfig.idField],
          })),
          values: model.bill 
            ? [model.bill] 
            : [],
          onChange: vals => modelFormActions.changeField('bill',
            vals[0],
          ),
          onSearch: (value) => billSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: billArrayIsLoading ? '' : undefined,
          onScrollToEnd: billNextPageAction,
          isLoading: billArrayIsLoading,
          missingValueResolver: value => billEntities.getById(value)['bill'],
          label: 'bill',
          errors: modelErrors.bill,
          onValid: () => modelFormActions.resetFieldError('bill'),
          onInvalid: err => modelFormActions.setFieldError('bill', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: false,
          placeHolder: 'Not set',
        }}
      />
      <TInput
          {...{
            type: INPUT_TYPES.float,
            label: 'approvedDuration',
            className: modalsStyle.control,
            value: model.approvedDuration,
            errors: modelErrors.approvedDuration,
            onChange: val => modelFormActions.changeField('approvedDuration', val),
            onValid: () => modelFormActions.resetFieldError('approvedDuration'),
            onInvalid: err => modelFormActions.setFieldError('approvedDuration', err),
            validate: {
              checkOnBlur: true,
              required: false,
            },
          }}
      />
      <DateTimePicker
          {...{
            label: 'approvedDate',
            className: modalsStyle.control,
            value: model.approvedDate,
            errors: modelErrors.approvedDate,
            onChange: val => modelFormActions.changeField('approvedDate', val),
            onValid: () => modelFormActions.resetFieldError('approvedDate'),
            onInvalid: err => modelFormActions.setFieldError('approvedDate', err),
            type: PICKER_TYPES.dateTime,
            validate: {
              checkOnBlur: true,
              requiredDate: false,
              requiredTime: false,

          },
        }}
      />
      <TSelect
        {...{
          className: modalsStyle.control,
          items: utbmsArray.map(item => ({
            value: item[utbmsModelConfig.idField], 
            label: item.name || item[utbmsModelConfig.idField],
          })),
          values: model.utbms 
            ? [model.utbms] 
            : [],
          onChange: vals => modelFormActions.changeField('utbms',
            vals[0],
          ),
          onSearch: (value) => utbmsSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: utbmsArrayIsLoading ? '' : undefined,
          onScrollToEnd: utbmsNextPageAction,
          isLoading: utbmsArrayIsLoading,
          missingValueResolver: value => utbmsEntities.getById(value)['utbms'],
          label: 'utbms',
          errors: modelErrors.utbms,
          onValid: () => modelFormActions.resetFieldError('utbms'),
          onInvalid: err => modelFormActions.setFieldError('utbms', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: false,
          placeHolder: 'Not set',
        }}
      />
      <TSelect
        {...{
          className: modalsStyle.control,
          items: timeEntryStatusArray.map(item => ({
            value: item[timeEntryStatusModelConfig.idField], 
            label: item.name || item[timeEntryStatusModelConfig.idField],
          })),
          values: model.timeEntryStatus 
            ? [model.timeEntryStatus] 
            : [],
          onChange: vals => modelFormActions.changeField('timeEntryStatus',
            vals[0],
          ),
          onSearch: (value) => timeEntryStatusSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: timeEntryStatusArrayIsLoading ? '' : undefined,
          onScrollToEnd: timeEntryStatusNextPageAction,
          isLoading: timeEntryStatusArrayIsLoading,
          missingValueResolver: value => timeEntryStatusEntities.getById(value)['timeEntryStatus'],
          label: 'timeEntryStatus',
          errors: modelErrors.timeEntryStatus,
          onValid: () => modelFormActions.resetFieldError('timeEntryStatus'),
          onInvalid: err => modelFormActions.setFieldError('timeEntryStatus', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: false,
          placeHolder: 'Not set',
        }}
      />
      <TInput
          {...{
            type: INPUT_TYPES.float,
            label: 'rate',
            className: modalsStyle.control,
            value: model.rate,
            errors: modelErrors.rate,
            onChange: val => modelFormActions.changeField('rate', val),
            onValid: () => modelFormActions.resetFieldError('rate'),
            onInvalid: err => modelFormActions.setFieldError('rate', err),
            validate: {
              checkOnBlur: true,
              required: false,
            },
          }}
      />
      <TInput
          {...{
            type: INPUT_TYPES.float,
            label: 'approveRate',
            className: modalsStyle.control,
            value: model.approveRate,
            errors: modelErrors.approveRate,
            onChange: val => modelFormActions.changeField('approveRate', val),
            onValid: () => modelFormActions.resetFieldError('approveRate'),
            onInvalid: err => modelFormActions.setFieldError('approveRate', err),
            validate: {
              checkOnBlur: true,
              required: false,
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
      <TInput
          {...{
            type: INPUT_TYPES.float,
            label: 'sumRecord',
            className: modalsStyle.control,
            value: model.sumRecord,
            errors: modelErrors.sumRecord,
            onChange: val => modelFormActions.changeField('sumRecord', val),
            onValid: () => modelFormActions.resetFieldError('sumRecord'),
            onInvalid: err => modelFormActions.setFieldError('sumRecord', err),
            validate: {
              checkOnBlur: true,
              required: false,
            },
          }}
      />
      <TInput
          {...{
            type: INPUT_TYPES.float,
            label: 'approvedSumRecord',
            className: modalsStyle.control,
            value: model.approvedSumRecord,
            errors: modelErrors.approvedSumRecord,
            onChange: val => modelFormActions.changeField('approvedSumRecord', val),
            onValid: () => modelFormActions.resetFieldError('approvedSumRecord'),
            onInvalid: err => modelFormActions.setFieldError('approvedSumRecord', err),
            validate: {
              checkOnBlur: true,
              required: false,
            },
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
      <DateTimePicker
          {...{
            label: 'timeEntryEndDate',
            className: modalsStyle.control,
            value: model.timeEntryEndDate,
            errors: modelErrors.timeEntryEndDate,
            onChange: val => modelFormActions.changeField('timeEntryEndDate', val),
            onValid: () => modelFormActions.resetFieldError('timeEntryEndDate'),
            onInvalid: err => modelFormActions.setFieldError('timeEntryEndDate', err),
            type: PICKER_TYPES.dateTime,
            validate: {
              checkOnBlur: true,
              requiredDate: false,
              requiredTime: false,

          },
        }}
      />
    </div>
  )
}

export default EditComponent