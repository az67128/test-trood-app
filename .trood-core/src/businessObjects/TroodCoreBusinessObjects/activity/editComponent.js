import React, { useState } from 'react'
import style from './editComponent.css'
import modalsStyle from '$trood/styles/modals.css'
import classNames from 'classnames'
import { INPUT_TYPES } from '$trood/components/TInput'
import { RESTIFY_CONFIG } from 'redux-restify'
import { templateApplyValues } from '$trood/helpers/templates'
import { PICKER_TYPES } from '$trood/components/DateTimePicker'


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
  ModalComponents, 
}) => {
  const [employeeSearch, employeeSearchSet] = useState('')
  const employeeModelConfig = RESTIFY_CONFIG.registeredModels.employee
  const employeeTemplate = employeeModelConfig.views.selectOption ||
    employeeModelConfig.views.default ||
    `employee/{${employeeModelConfig.idField}}`
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
      
  const [activityStatusSearch, activityStatusSearchSet] = useState('')
  const activityStatusModelConfig = RESTIFY_CONFIG.registeredModels.activityStatus
  const activityStatusTemplate = activityStatusModelConfig.views.selectOption ||
    activityStatusModelConfig.views.default ||
    `activityStatus/{${activityStatusModelConfig.idField}}`
  const activityStatusApiConfig = {
    filter: {
      q: activityStatusSearch 
        ? `eq(${activityStatusModelConfig.idField},${activityStatusSearch})`
        : '',
      depth: 1,
    },
  }
  const activityStatusArray = activityStatusEntities.getArray(activityStatusApiConfig)
  const activityStatusArrayIsLoading = activityStatusEntities.getIsLoadingArray(
    activityStatusApiConfig,
  )
  const activityStatusNextPage = activityStatusEntities.getNextPage(activityStatusApiConfig)
  const activityStatusNextPageAction = () => {
    if (activityStatusNextPage) {
      activityStatusApiActions.loadNextPage(activityStatusApiConfig)
    }
  }
      
  const [matterSearch, matterSearchSet] = useState('')
  const matterModelConfig = RESTIFY_CONFIG.registeredModels.matter
  const matterTemplate = matterModelConfig.views.selectOption ||
    matterModelConfig.views.default ||
    `matter/{${matterModelConfig.idField}}`
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
      
  const [activityTypeSearch, activityTypeSearchSet] = useState('')
  const activityTypeModelConfig = RESTIFY_CONFIG.registeredModels.activityType
  const activityTypeTemplate = activityTypeModelConfig.views.selectOption ||
    activityTypeModelConfig.views.default ||
    `activityType/{${activityTypeModelConfig.idField}}`
  const activityTypeApiConfig = {
    filter: {
      q: activityTypeSearch 
        ? `eq(${activityTypeModelConfig.idField},${activityTypeSearch})`
        : '',
      depth: 1,
    },
  }
  const activityTypeArray = activityTypeEntities.getArray(activityTypeApiConfig)
  const activityTypeArrayIsLoading = activityTypeEntities.getIsLoadingArray(
    activityTypeApiConfig,
  )
  const activityTypeNextPage = activityTypeEntities.getNextPage(activityTypeApiConfig)
  const activityTypeNextPageAction = () => {
    if (activityTypeNextPage) {
      activityTypeApiActions.loadNextPage(activityTypeApiConfig)
    }
  }
      
  const [invitationListSearch, invitationListSearchSet] = useState('')
  const invitationListModelConfig = RESTIFY_CONFIG.registeredModels.invitationList
  const invitationListTemplate = invitationListModelConfig.views.selectOption ||
    invitationListModelConfig.views.default ||
    `invitationList/{${invitationListModelConfig.idField}}`
  const invitationListApiConfig = {
    filter: {
      q: invitationListSearch 
        ? `eq(${invitationListModelConfig.idField},${invitationListSearch})`
        : '',
      depth: 1,
    },
  }
  const invitationListArray = invitationListEntities.getArray(invitationListApiConfig)
  const invitationListArrayIsLoading = invitationListEntities.getIsLoadingArray(
    invitationListApiConfig,
  )
  const invitationListNextPage = invitationListEntities.getNextPage(invitationListApiConfig)
  const invitationListNextPageAction = () => {
    if (invitationListNextPage) {
      invitationListApiActions.loadNextPage(invitationListApiConfig)
    }
  }
      
  const [activityAccessStatusSearch, activityAccessStatusSearchSet] = useState('')
  const activityAccessStatusModelConfig = RESTIFY_CONFIG.registeredModels.activityAccessStatus
  const activityAccessStatusTemplate = activityAccessStatusModelConfig.views.selectOption ||
    activityAccessStatusModelConfig.views.default ||
    `activityAccessStatus/{${activityAccessStatusModelConfig.idField}}`
  const activityAccessStatusApiConfig = {
    filter: {
      q: activityAccessStatusSearch 
        ? `eq(${activityAccessStatusModelConfig.idField},${activityAccessStatusSearch})`
        : '',
      depth: 1,
    },
  }
  const activityAccessStatusArray = activityAccessStatusEntities.getArray(activityAccessStatusApiConfig)
  const activityAccessStatusArrayIsLoading = activityAccessStatusEntities.getIsLoadingArray(
    activityAccessStatusApiConfig,
  )
  const activityAccessStatusNextPage = activityAccessStatusEntities.getNextPage(activityAccessStatusApiConfig)
  const activityAccessStatusNextPageAction = () => {
    if (activityAccessStatusNextPage) {
      activityAccessStatusApiActions.loadNextPage(activityAccessStatusApiConfig)
    }
  }
      
  return (
    <div className={classNames(style.root, modalsStyle.root)}>
      <ModalComponents.ModalInput
        {...{
          fieldName: 'name',
          type: INPUT_TYPES.multi,
          validate: {
            checkOnBlur: true,
            required: true,
          },
        }}
      />
      <ModalComponents.ModalSelect
        {...{
          fieldName: 'responsible',
          items: employeeArray.map(item => ({
            value: item[employeeModelConfig.idField], 
            label: templateApplyValues(employeeTemplate, item),
          })),
          onSearch: (value) => employeeSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: employeeArrayIsLoading ? '' : undefined,
          onScrollToEnd: employeeNextPageAction,
          isLoading: employeeArrayIsLoading,
          missingValueResolver: value => 
            employeeEntities.getById(value)[employeeModelConfig.idField],
          multi: false,
          clearable: false,
        }}
      />
      <ModalComponents.ModalSelect
        {...{
          fieldName: 'executor',
          items: employeeArray.map(item => ({
            value: item[employeeModelConfig.idField], 
            label: templateApplyValues(employeeTemplate, item),
          })),
          onSearch: (value) => employeeSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: employeeArrayIsLoading ? '' : undefined,
          onScrollToEnd: employeeNextPageAction,
          isLoading: employeeArrayIsLoading,
          missingValueResolver: value => 
            employeeEntities.getById(value)[employeeModelConfig.idField],
          multi: false,
          clearable: true,
        }}
      />
      <ModalComponents.ModalSelect
        {...{
          fieldName: 'activityStatus',
          items: activityStatusArray.map(item => ({
            value: item[activityStatusModelConfig.idField], 
            label: templateApplyValues(activityStatusTemplate, item),
          })),
          onSearch: (value) => activityStatusSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: activityStatusArrayIsLoading ? '' : undefined,
          onScrollToEnd: activityStatusNextPageAction,
          isLoading: activityStatusArrayIsLoading,
          missingValueResolver: value => 
            activityStatusEntities.getById(value)[activityStatusModelConfig.idField],
          multi: false,
          clearable: false,
        }}
      />
      <ModalComponents.ModalSelect
        {...{
          fieldName: 'matter',
          items: matterArray.map(item => ({
            value: item[matterModelConfig.idField], 
            label: templateApplyValues(matterTemplate, item),
          })),
          onSearch: (value) => matterSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: matterArrayIsLoading ? '' : undefined,
          onScrollToEnd: matterNextPageAction,
          isLoading: matterArrayIsLoading,
          missingValueResolver: value => 
            matterEntities.getById(value)[matterModelConfig.idField],
          multi: false,
          clearable: true,
        }}
      />
      <ModalComponents.ModalCheckbox
          {...{
            fieldName: 'important',
            validate: {
              checkOnBlur: true,
              required: false,
            },
          }}
        />
      <ModalComponents.ModalDateTimePicker
        {...{
          fieldName: 'created',
          type: PICKER_TYPES.dateTime,
          validate: {
            checkOnBlur: true,
            requiredDate: false,
            requiredTime: false,
          },
        }}
      />
      <ModalComponents.ModalInput
        {...{
          fieldName: 'details',
          type: INPUT_TYPES.multi,
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <ModalComponents.ModalDateTimePicker
        {...{
          fieldName: 'start',
          type: PICKER_TYPES.dateTime,
          validate: {
            checkOnBlur: true,
            requiredDate: false,
            requiredTime: false,
          },
        }}
      />
      <ModalComponents.ModalDateTimePicker
        {...{
          fieldName: 'deadline',
          type: PICKER_TYPES.dateTime,
          validate: {
            checkOnBlur: true,
            requiredDate: false,
            requiredTime: false,
          },
        }}
      />
      <ModalComponents.ModalCheckbox
          {...{
            fieldName: 'deleted',
            validate: {
              checkOnBlur: true,
              required: false,
            },
          }}
        />
      <ModalComponents.ModalSelect
        {...{
          fieldName: 'activityType',
          items: activityTypeArray.map(item => ({
            value: item[activityTypeModelConfig.idField], 
            label: templateApplyValues(activityTypeTemplate, item),
          })),
          onSearch: (value) => activityTypeSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: activityTypeArrayIsLoading ? '' : undefined,
          onScrollToEnd: activityTypeNextPageAction,
          isLoading: activityTypeArrayIsLoading,
          missingValueResolver: value => 
            activityTypeEntities.getById(value)[activityTypeModelConfig.idField],
          multi: false,
          clearable: false,
        }}
      />
      <ModalComponents.ModalSelect
        {...{
          fieldName: 'invitationList',
          items: invitationListArray.map(item => ({
            value: item[invitationListModelConfig.idField], 
            label: templateApplyValues(invitationListTemplate, item),
          })),
          onSearch: (value) => invitationListSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: invitationListArrayIsLoading ? '' : undefined,
          onScrollToEnd: invitationListNextPageAction,
          isLoading: invitationListArrayIsLoading,
          missingValueResolver: value => 
            invitationListEntities.getById(value)[invitationListModelConfig.idField],
          multi: false,
          clearable: true,
        }}
      />
      <ModalComponents.ModalSelect
        {...{
          fieldName: 'activityAccessStatus',
          items: activityAccessStatusArray.map(item => ({
            value: item[activityAccessStatusModelConfig.idField], 
            label: templateApplyValues(activityAccessStatusTemplate, item),
          })),
          onSearch: (value) => activityAccessStatusSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: activityAccessStatusArrayIsLoading ? '' : undefined,
          onScrollToEnd: activityAccessStatusNextPageAction,
          isLoading: activityAccessStatusArrayIsLoading,
          missingValueResolver: value => 
            activityAccessStatusEntities.getById(value)[activityAccessStatusModelConfig.idField],
          multi: false,
          clearable: false,
        }}
      />
      <ModalComponents.ModalCheckbox
          {...{
            fieldName: 'haveTime',
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