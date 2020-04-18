import React, { useState } from 'react'
import style from './editComponent.css'
import modalsStyle from '$trood/styles/modals.css'
import classNames from 'classnames'
import { RESTIFY_CONFIG } from 'redux-restify'
import { templateApplyValues } from '$trood/helpers/templates'
import { INPUT_TYPES } from '$trood/components/TInput'
import { PICKER_TYPES } from '$trood/components/DateTimePicker'


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
      
  const [timeEntryBillableSearch, timeEntryBillableSearchSet] = useState('')
  const timeEntryBillableModelConfig = RESTIFY_CONFIG.registeredModels.timeEntryBillable
  const timeEntryBillableTemplate = timeEntryBillableModelConfig.views.selectOption ||
    timeEntryBillableModelConfig.views.default ||
    `timeEntryBillable/{${timeEntryBillableModelConfig.idField}}`
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
      
  const [activitySearch, activitySearchSet] = useState('')
  const activityModelConfig = RESTIFY_CONFIG.registeredModels.activity
  const activityTemplate = activityModelConfig.views.selectOption ||
    activityModelConfig.views.default ||
    `activity/{${activityModelConfig.idField}}`
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
  const billTemplate = billModelConfig.views.selectOption ||
    billModelConfig.views.default ||
    `bill/{${billModelConfig.idField}}`
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
  const utbmsTemplate = utbmsModelConfig.views.selectOption ||
    utbmsModelConfig.views.default ||
    `utbms/{${utbmsModelConfig.idField}}`
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
  const timeEntryStatusTemplate = timeEntryStatusModelConfig.views.selectOption ||
    timeEntryStatusModelConfig.views.default ||
    `timeEntryStatus/{${timeEntryStatusModelConfig.idField}}`
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
      <ModalComponents.ModalSelect
        {...{
          fieldName: 'author',
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
          fieldName: 'timeEntryBillable',
          items: timeEntryBillableArray.map(item => ({
            value: item[timeEntryBillableModelConfig.idField], 
            label: templateApplyValues(timeEntryBillableTemplate, item),
          })),
          onSearch: (value) => timeEntryBillableSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: timeEntryBillableArrayIsLoading ? '' : undefined,
          onScrollToEnd: timeEntryBillableNextPageAction,
          isLoading: timeEntryBillableArrayIsLoading,
          missingValueResolver: value => 
            timeEntryBillableEntities.getById(value)[timeEntryBillableModelConfig.idField],
          multi: false,
          clearable: false,
        }}
      />
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
      <ModalComponents.ModalInput
        {...{
          fieldName: 'duration',
          type: INPUT_TYPES.float,
          validate: {
            checkOnBlur: true,
            required: true,
          },
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
          clearable: false,
        }}
      />
      <ModalComponents.ModalDateTimePicker
        {...{
          fieldName: 'timeEntryDate',
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
      <ModalComponents.ModalSelect
        {...{
          fieldName: 'activity',
          items: activityArray.map(item => ({
            value: item[activityModelConfig.idField], 
            label: templateApplyValues(activityTemplate, item),
          })),
          onSearch: (value) => activitySearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: activityArrayIsLoading ? '' : undefined,
          onScrollToEnd: activityNextPageAction,
          isLoading: activityArrayIsLoading,
          missingValueResolver: value => 
            activityEntities.getById(value)[activityModelConfig.idField],
          multi: false,
          clearable: true,
        }}
      />
      <ModalComponents.ModalSelect
        {...{
          fieldName: 'bill',
          items: billArray.map(item => ({
            value: item[billModelConfig.idField], 
            label: templateApplyValues(billTemplate, item),
          })),
          onSearch: (value) => billSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: billArrayIsLoading ? '' : undefined,
          onScrollToEnd: billNextPageAction,
          isLoading: billArrayIsLoading,
          missingValueResolver: value => 
            billEntities.getById(value)[billModelConfig.idField],
          multi: false,
          clearable: true,
        }}
      />
      <ModalComponents.ModalInput
        {...{
          fieldName: 'approvedDuration',
          type: INPUT_TYPES.float,
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <ModalComponents.ModalDateTimePicker
        {...{
          fieldName: 'approvedDate',
          type: PICKER_TYPES.dateTime,
          validate: {
            checkOnBlur: true,
            requiredDate: false,
            requiredTime: false,
          },
        }}
      />
      <ModalComponents.ModalSelect
        {...{
          fieldName: 'utbms',
          items: utbmsArray.map(item => ({
            value: item[utbmsModelConfig.idField], 
            label: templateApplyValues(utbmsTemplate, item),
          })),
          onSearch: (value) => utbmsSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: utbmsArrayIsLoading ? '' : undefined,
          onScrollToEnd: utbmsNextPageAction,
          isLoading: utbmsArrayIsLoading,
          missingValueResolver: value => 
            utbmsEntities.getById(value)[utbmsModelConfig.idField],
          multi: false,
          clearable: true,
        }}
      />
      <ModalComponents.ModalSelect
        {...{
          fieldName: 'timeEntryStatus',
          items: timeEntryStatusArray.map(item => ({
            value: item[timeEntryStatusModelConfig.idField], 
            label: templateApplyValues(timeEntryStatusTemplate, item),
          })),
          onSearch: (value) => timeEntryStatusSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: timeEntryStatusArrayIsLoading ? '' : undefined,
          onScrollToEnd: timeEntryStatusNextPageAction,
          isLoading: timeEntryStatusArrayIsLoading,
          missingValueResolver: value => 
            timeEntryStatusEntities.getById(value)[timeEntryStatusModelConfig.idField],
          multi: false,
          clearable: true,
        }}
      />
      <ModalComponents.ModalInput
        {...{
          fieldName: 'rate',
          type: INPUT_TYPES.float,
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <ModalComponents.ModalInput
        {...{
          fieldName: 'approveRate',
          type: INPUT_TYPES.float,
          validate: {
            checkOnBlur: true,
            required: false,
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
      <ModalComponents.ModalInput
        {...{
          fieldName: 'sumRecord',
          type: INPUT_TYPES.float,
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <ModalComponents.ModalInput
        {...{
          fieldName: 'approvedSumRecord',
          type: INPUT_TYPES.float,
          validate: {
            checkOnBlur: true,
            required: false,
          },
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
      <ModalComponents.ModalDateTimePicker
        {...{
          fieldName: 'timeEntryEndDate',
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