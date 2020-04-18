import React, { useState } from 'react'
import style from './editComponent.css'
import modalsStyle from '$trood/styles/modals.css'
import classNames from 'classnames'
import { RESTIFY_CONFIG } from 'redux-restify'
import { templateApplyValues } from '$trood/helpers/templates'
import { PICKER_TYPES } from '$trood/components/DateTimePicker'
import { INPUT_TYPES } from '$trood/components/TInput'


const EditComponent = ({
  activityApiActions,
  activityEntities,
  employeeApiActions,
  employeeEntities,
  timerStatusApiActions,
  timerStatusEntities,
  ModalComponents, 
}) => {
  const [timerStatusSearch, timerStatusSearchSet] = useState('')
  const timerStatusModelConfig = RESTIFY_CONFIG.registeredModels.timerStatus
  const timerStatusTemplate = timerStatusModelConfig.views.selectOption ||
    timerStatusModelConfig.views.default ||
    `timerStatus/{${timerStatusModelConfig.idField}}`
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
      
  return (
    <div className={classNames(style.root, modalsStyle.root)}>
      <ModalComponents.ModalSelect
        {...{
          fieldName: 'timerStatus',
          items: timerStatusArray.map(item => ({
            value: item[timerStatusModelConfig.idField], 
            label: templateApplyValues(timerStatusTemplate, item),
          })),
          onSearch: (value) => timerStatusSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: timerStatusArrayIsLoading ? '' : undefined,
          onScrollToEnd: timerStatusNextPageAction,
          isLoading: timerStatusArrayIsLoading,
          missingValueResolver: value => 
            timerStatusEntities.getById(value)[timerStatusModelConfig.idField],
          multi: false,
          clearable: false,
        }}
      />
      <ModalComponents.ModalSelect
        {...{
          fieldName: 'employee',
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
      <ModalComponents.ModalInput
        {...{
          fieldName: 'duration',
          type: INPUT_TYPES.float,
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