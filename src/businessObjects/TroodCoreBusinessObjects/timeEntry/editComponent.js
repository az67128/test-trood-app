import React from 'react'
import TSelect, { SELECT_TYPES } from '$trood/components/TSelect'
import { getNestedObjectField } from '$trood/helpers/nestedObjects'
import TInput, { INPUT_TYPES } from '$trood/components/TInput'
import DateTimePicker from '$trood/components/DateTimePicker'
import TCheckbox from '$trood/components/TCheckbox'

const EditComponent = ({
  model,
  modelErrors,
  modelFormActions,
  employeeEntities,
  employeeApiActions,
  timeEntryBillableEntities,
  timeEntryBillableApiActions,
  matterEntities,
  matterApiActions,
  activityEntities,
  activityApiActions,
  billEntities,
  billApiActions,
  utbmsEntities,
  utbmsApiActions,
  timeEntryStatusEntities,
  timeEntryStatusApiActions, 
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
      
      const [timeEntryBillableSearch, timeEntryBillableSearchSet] = React.useState('')
      const timeEntryBillableApiConfig = {
        filter: {
          q: timeEntryBillableSearch ? 'like(name,*' + timeEntryBillableSearch + ')' : '',
          depth: 1,
        },
      }
      const timeEntryBillableArray = timeEntryBillableEntities.getArray(timeEntryBillableApiConfig)
      const timeEntryBillableArrayIsLoading = timeEntryBillableEntities.getIsLoadingArray(timeEntryBillableApiConfig)
      const timeEntryBillableNextPage = timeEntryBillableEntities.getNextPage(timeEntryBillableApiConfig)
      const timeEntryBillableNextPageAction = () => {
        if (timeEntryBillableNextPage) {
          timeEntryBillableApiActions.loadNextPage(timeEntryBillableApiConfig)
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
      
      const [billSearch, billSearchSet] = React.useState('')
      const billApiConfig = {
        filter: {
          q: billSearch ? 'like(name,*' + billSearch + ')' : '',
          depth: 1,
        },
      }
      const billArray = billEntities.getArray(billApiConfig)
      const billArrayIsLoading = billEntities.getIsLoadingArray(billApiConfig)
      const billNextPage = billEntities.getNextPage(billApiConfig)
      const billNextPageAction = () => {
        if (billNextPage) {
          billApiActions.loadNextPage(billApiConfig)
        }
      }
      
      const [utbmsSearch, utbmsSearchSet] = React.useState('')
      const utbmsApiConfig = {
        filter: {
          q: utbmsSearch ? 'like(name,*' + utbmsSearch + ')' : '',
          depth: 1,
        },
      }
      const utbmsArray = utbmsEntities.getArray(utbmsApiConfig)
      const utbmsArrayIsLoading = utbmsEntities.getIsLoadingArray(utbmsApiConfig)
      const utbmsNextPage = utbmsEntities.getNextPage(utbmsApiConfig)
      const utbmsNextPageAction = () => {
        if (utbmsNextPage) {
          utbmsApiActions.loadNextPage(utbmsApiConfig)
        }
      }
      
      const [timeEntryStatusSearch, timeEntryStatusSearchSet] = React.useState('')
      const timeEntryStatusApiConfig = {
        filter: {
          q: timeEntryStatusSearch ? 'like(name,*' + timeEntryStatusSearch + ')' : '',
          depth: 1,
        },
      }
      const timeEntryStatusArray = timeEntryStatusEntities.getArray(timeEntryStatusApiConfig)
      const timeEntryStatusArrayIsLoading = timeEntryStatusEntities.getIsLoadingArray(timeEntryStatusApiConfig)
      const timeEntryStatusNextPage = timeEntryStatusEntities.getNextPage(timeEntryStatusApiConfig)
      const timeEntryStatusNextPageAction = () => {
        if (timeEntryStatusNextPage) {
          timeEntryStatusApiActions.loadNextPage(timeEntryStatusApiConfig)
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
          label: 'timeEntryBillable',
          items: timeEntryBillableArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.timeEntryBillable && [model.timeEntryBillable],
          onChange: values => modelFormActions.changeField('timeEntryBillable', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('timeEntryBillable', errs),
          onValid: () => modelFormActions.resetFieldError('timeEntryBillable'),
          errors: getNestedObjectField(modelErrors, 'timeEntryBillable'),
          validate: {
            required: true,
            checkOnBlur: true,
          },
          onSearch: (value) => timeEntryBillableSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: timeEntryBillableArrayIsLoading ? '' : undefined,
          onScrollToEnd: timeEntryBillableNextPageAction,
          missingValueResolver: value => timeEntryBillableEntities.getById(value).name,
          isLoading: timeEntryBillableArrayIsLoading,
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
            required: true,
          },
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
      <DateTimePicker
            {...{
            label: 'timeEntryDate',
          placeholder: 'Not chosen',
          value: model.timeEntryDate,
          errors: modelErrors.timeEntryDate,
          onChange: val => modelFormActions.changeField('timeEntryDate', val),
          onValid: () => modelFormActions.resetFieldError('timeEntryDate'),
          onInvalid: err => modelFormActions.setFieldError('timeEntryDate', err),
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
      <TSelect
        {...{
          label: 'bill',
          items: billArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.bill && [model.bill],
          onChange: values => modelFormActions.changeField('bill', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('bill', errs),
          onValid: () => modelFormActions.resetFieldError('bill'),
          errors: getNestedObjectField(modelErrors, 'bill'),
          validate: {
            required: false,
            checkOnBlur: true,
          },
          onSearch: (value) => billSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: billArrayIsLoading ? '' : undefined,
          onScrollToEnd: billNextPageAction,
          missingValueResolver: value => billEntities.getById(value).name,
          isLoading: billArrayIsLoading,
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.float,
          label: 'approvedDuration',
          placeholder: 'Not chosen',
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
          placeholder: 'Not chosen',
          value: model.approvedDate,
          errors: modelErrors.approvedDate,
          onChange: val => modelFormActions.changeField('approvedDate', val),
          onValid: () => modelFormActions.resetFieldError('approvedDate'),
          onInvalid: err => modelFormActions.setFieldError('approvedDate', err),
            validate: {
              checkOnBlur: true,
              requiredDate: false,
              requiredTime: false,
            },
          }}
        />
      <TSelect
        {...{
          label: 'utbms',
          items: utbmsArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.utbms && [model.utbms],
          onChange: values => modelFormActions.changeField('utbms', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('utbms', errs),
          onValid: () => modelFormActions.resetFieldError('utbms'),
          errors: getNestedObjectField(modelErrors, 'utbms'),
          validate: {
            required: false,
            checkOnBlur: true,
          },
          onSearch: (value) => utbmsSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: utbmsArrayIsLoading ? '' : undefined,
          onScrollToEnd: utbmsNextPageAction,
          missingValueResolver: value => utbmsEntities.getById(value).name,
          isLoading: utbmsArrayIsLoading,
        }}
      />
      <TSelect
        {...{
          label: 'timeEntryStatus',
          items: timeEntryStatusArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.timeEntryStatus && [model.timeEntryStatus],
          onChange: values => modelFormActions.changeField('timeEntryStatus', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('timeEntryStatus', errs),
          onValid: () => modelFormActions.resetFieldError('timeEntryStatus'),
          errors: getNestedObjectField(modelErrors, 'timeEntryStatus'),
          validate: {
            required: false,
            checkOnBlur: true,
          },
          onSearch: (value) => timeEntryStatusSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: timeEntryStatusArrayIsLoading ? '' : undefined,
          onScrollToEnd: timeEntryStatusNextPageAction,
          missingValueResolver: value => timeEntryStatusEntities.getById(value).name,
          isLoading: timeEntryStatusArrayIsLoading,
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
            required: false,
          },
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.float,
          label: 'approveRate',
          placeholder: 'Not chosen',
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
          placeholder: 'Not chosen',
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
          placeholder: 'Not chosen',
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
          placeholder: 'Not chosen',
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
          placeholder: 'Not chosen',
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
          placeholder: 'Not chosen',
          value: model.timeEntryEndDate,
          errors: modelErrors.timeEntryEndDate,
          onChange: val => modelFormActions.changeField('timeEntryEndDate', val),
          onValid: () => modelFormActions.resetFieldError('timeEntryEndDate'),
          onInvalid: err => modelFormActions.setFieldError('timeEntryEndDate', err),
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