import React from 'react'
import TInput, { INPUT_TYPES } from '$trood/components/TInput'
import TSelect, { SELECT_TYPES } from '$trood/components/TSelect'
import { getNestedObjectField } from '$trood/helpers/nestedObjects'
import TCheckbox from '$trood/components/TCheckbox'
import DateTimePicker from '$trood/components/DateTimePicker'

const EditComponent = ({
  model,
  modelErrors,
  modelFormActions,
  employeeEntities,
  employeeApiActions,
  activityStatusEntities,
  activityStatusApiActions,
  matterEntities,
  matterApiActions,
  documentEntities,
  documentApiActions,
  commentEntities,
  commentApiActions,
  activityTypeEntities,
  activityTypeApiActions,
  invitationListEntities,
  invitationListApiActions,
  activityAccessStatusEntities,
  activityAccessStatusApiActions, 
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
      
      const [activityStatusSearch, activityStatusSearchSet] = React.useState('')
      const activityStatusApiConfig = {
        filter: {
          q: activityStatusSearch ? 'like(name,*' + activityStatusSearch + ')' : '',
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
      
      const [documentSearch, documentSearchSet] = React.useState('')
      const documentApiConfig = {
        filter: {
          q: documentSearch ? 'like(name,*' + documentSearch + ')' : '',
          depth: 1,
        },
      }
      const documentArray = documentEntities.getArray(documentApiConfig)
      const documentArrayIsLoading = documentEntities.getIsLoadingArray(documentApiConfig)
      const documentNextPage = documentEntities.getNextPage(documentApiConfig)
      const documentNextPageAction = () => {
        if (documentNextPage) {
          documentApiActions.loadNextPage(documentApiConfig)
        }
      }
      
      const [commentSearch, commentSearchSet] = React.useState('')
      const commentApiConfig = {
        filter: {
          q: commentSearch ? 'like(name,*' + commentSearch + ')' : '',
          depth: 1,
        },
      }
      const commentArray = commentEntities.getArray(commentApiConfig)
      const commentArrayIsLoading = commentEntities.getIsLoadingArray(commentApiConfig)
      const commentNextPage = commentEntities.getNextPage(commentApiConfig)
      const commentNextPageAction = () => {
        if (commentNextPage) {
          commentApiActions.loadNextPage(commentApiConfig)
        }
      }
      
      const [activityTypeSearch, activityTypeSearchSet] = React.useState('')
      const activityTypeApiConfig = {
        filter: {
          q: activityTypeSearch ? 'like(name,*' + activityTypeSearch + ')' : '',
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
      const invitationListApiConfig = {
        filter: {
          q: invitationListSearch ? 'like(name,*' + invitationListSearch + ')' : '',
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
      const activityAccessStatusApiConfig = {
        filter: {
          q: activityAccessStatusSearch ? 'like(name,*' + activityAccessStatusSearch + ')' : '',
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
    <React.Fragment>
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
          label: 'responsible',
          items: employeeArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.responsible && [model.responsible],
          onChange: values => modelFormActions.changeField('responsible', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('responsible', errs),
          onValid: () => modelFormActions.resetFieldError('responsible'),
          errors: getNestedObjectField(modelErrors, 'responsible'),
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
          label: 'executor',
          items: employeeArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.executor && [model.executor],
          onChange: values => modelFormActions.changeField('executor', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('executor', errs),
          onValid: () => modelFormActions.resetFieldError('executor'),
          errors: getNestedObjectField(modelErrors, 'executor'),
          validate: {
            required: false,
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
          label: 'activityStatus',
          items: activityStatusArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.activityStatus && [model.activityStatus],
          onChange: values => modelFormActions.changeField('activityStatus', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('activityStatus', errs),
          onValid: () => modelFormActions.resetFieldError('activityStatus'),
          errors: getNestedObjectField(modelErrors, 'activityStatus'),
          validate: {
            required: true,
            checkOnBlur: true,
          },
          onSearch: (value) => activityStatusSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: activityStatusArrayIsLoading ? '' : undefined,
          onScrollToEnd: activityStatusNextPageAction,
          missingValueResolver: value => activityStatusEntities.getById(value).name,
          isLoading: activityStatusArrayIsLoading,
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
            required: false,
            checkOnBlur: true,
          },
          onSearch: (value) => matterSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: matterArrayIsLoading ? '' : undefined,
          onScrollToEnd: matterNextPageAction,
          missingValueResolver: value => matterEntities.getById(value).name,
          isLoading: matterArrayIsLoading,
        }}
      />
      <TCheckbox
            {...{
            label: 'important',
          placeholder: 'Not chosen',
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
      <DateTimePicker
            {...{
            label: 'deadline',
          placeholder: 'Not chosen',
          value: model.deadline,
          errors: modelErrors.deadline,
          onChange: val => modelFormActions.changeField('deadline', val),
          onValid: () => modelFormActions.resetFieldError('deadline'),
          onInvalid: err => modelFormActions.setFieldError('deadline', err),
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
      <TSelect
        {...{
          label: 'documentSet',
          items: documentArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.documentSet && [model.documentSet],
          onChange: values => modelFormActions.changeField('documentSet', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('documentSet', errs),
          onValid: () => modelFormActions.resetFieldError('documentSet'),
          errors: getNestedObjectField(modelErrors, 'documentSet'),
          validate: {
            required: false,
            checkOnBlur: true,
          },
          onSearch: (value) => documentSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: documentArrayIsLoading ? '' : undefined,
          onScrollToEnd: documentNextPageAction,
          missingValueResolver: value => documentEntities.getById(value).name,
          isLoading: documentArrayIsLoading,
        }}
      />
      <TSelect
        {...{
          label: 'commentSet',
          items: commentArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.commentSet && [model.commentSet],
          onChange: values => modelFormActions.changeField('commentSet', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('commentSet', errs),
          onValid: () => modelFormActions.resetFieldError('commentSet'),
          errors: getNestedObjectField(modelErrors, 'commentSet'),
          validate: {
            required: false,
            checkOnBlur: true,
          },
          onSearch: (value) => commentSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: commentArrayIsLoading ? '' : undefined,
          onScrollToEnd: commentNextPageAction,
          missingValueResolver: value => commentEntities.getById(value).name,
          isLoading: commentArrayIsLoading,
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'timeEntrySet',
          placeholder: 'Not chosen',
          value: model.timeEntrySet,
          errors: modelErrors.timeEntrySet,
          onChange: val => modelFormActions.changeField('timeEntrySet', val),
          onValid: () => modelFormActions.resetFieldError('timeEntrySet'),
          onInvalid: err => modelFormActions.setFieldError('timeEntrySet', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TSelect
        {...{
          label: 'activityType',
          items: activityTypeArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.activityType && [model.activityType],
          onChange: values => modelFormActions.changeField('activityType', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('activityType', errs),
          onValid: () => modelFormActions.resetFieldError('activityType'),
          errors: getNestedObjectField(modelErrors, 'activityType'),
          validate: {
            required: true,
            checkOnBlur: true,
          },
          onSearch: (value) => activityTypeSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: activityTypeArrayIsLoading ? '' : undefined,
          onScrollToEnd: activityTypeNextPageAction,
          missingValueResolver: value => activityTypeEntities.getById(value).name,
          isLoading: activityTypeArrayIsLoading,
        }}
      />
      <TSelect
        {...{
          label: 'invitationList',
          items: invitationListArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.invitationList && [model.invitationList],
          onChange: values => modelFormActions.changeField('invitationList', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('invitationList', errs),
          onValid: () => modelFormActions.resetFieldError('invitationList'),
          errors: getNestedObjectField(modelErrors, 'invitationList'),
          validate: {
            required: false,
            checkOnBlur: true,
          },
          onSearch: (value) => invitationListSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: invitationListArrayIsLoading ? '' : undefined,
          onScrollToEnd: invitationListNextPageAction,
          missingValueResolver: value => invitationListEntities.getById(value).name,
          isLoading: invitationListArrayIsLoading,
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'timerSet',
          placeholder: 'Not chosen',
          value: model.timerSet,
          errors: modelErrors.timerSet,
          onChange: val => modelFormActions.changeField('timerSet', val),
          onValid: () => modelFormActions.resetFieldError('timerSet'),
          onInvalid: err => modelFormActions.setFieldError('timerSet', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TSelect
        {...{
          label: 'activityAccessStatus',
          items: activityAccessStatusArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.activityAccessStatus && [model.activityAccessStatus],
          onChange: values => modelFormActions.changeField('activityAccessStatus', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('activityAccessStatus', errs),
          onValid: () => modelFormActions.resetFieldError('activityAccessStatus'),
          errors: getNestedObjectField(modelErrors, 'activityAccessStatus'),
          validate: {
            required: true,
            checkOnBlur: true,
          },
          onSearch: (value) => activityAccessStatusSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: activityAccessStatusArrayIsLoading ? '' : undefined,
          onScrollToEnd: activityAccessStatusNextPageAction,
          missingValueResolver: value => activityAccessStatusEntities.getById(value).name,
          isLoading: activityAccessStatusArrayIsLoading,
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
    </React.Fragment>
  )
}
export default EditComponent