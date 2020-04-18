import React, { useState } from 'react'
import style from './editComponent.css'
import modalsStyle from '$trood/styles/modals.css'
import classNames from 'classnames'
import { INPUT_TYPES } from '$trood/components/TInput'
import { RESTIFY_CONFIG } from 'redux-restify'
import { templateApplyValues } from '$trood/helpers/templates'
import { PICKER_TYPES } from '$trood/components/DateTimePicker'


const EditComponent = ({
  conflictStatusApiActions,
  conflictStatusEntities,
  clientTypeApiActions,
  clientTypeEntities,
  employeeApiActions,
  employeeEntities,
  clientActiveStatusApiActions,
  clientActiveStatusEntities,
  ModalComponents, 
}) => {
  const [clientActiveStatusSearch, clientActiveStatusSearchSet] = useState('')
  const clientActiveStatusModelConfig = RESTIFY_CONFIG.registeredModels.clientActiveStatus
  const clientActiveStatusTemplate = clientActiveStatusModelConfig.views.selectOption ||
    clientActiveStatusModelConfig.views.default ||
    `clientActiveStatus/{${clientActiveStatusModelConfig.idField}}`
  const clientActiveStatusApiConfig = {
    filter: {
      q: clientActiveStatusSearch 
        ? `eq(${clientActiveStatusModelConfig.idField},${clientActiveStatusSearch})`
        : '',
      depth: 1,
    },
  }
  const clientActiveStatusArray = clientActiveStatusEntities.getArray(clientActiveStatusApiConfig)
  const clientActiveStatusArrayIsLoading = clientActiveStatusEntities.getIsLoadingArray(
    clientActiveStatusApiConfig,
  )
  const clientActiveStatusNextPage = clientActiveStatusEntities.getNextPage(clientActiveStatusApiConfig)
  const clientActiveStatusNextPageAction = () => {
    if (clientActiveStatusNextPage) {
      clientActiveStatusApiActions.loadNextPage(clientActiveStatusApiConfig)
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
      
  const [clientTypeSearch, clientTypeSearchSet] = useState('')
  const clientTypeModelConfig = RESTIFY_CONFIG.registeredModels.clientType
  const clientTypeTemplate = clientTypeModelConfig.views.selectOption ||
    clientTypeModelConfig.views.default ||
    `clientType/{${clientTypeModelConfig.idField}}`
  const clientTypeApiConfig = {
    filter: {
      q: clientTypeSearch 
        ? `eq(${clientTypeModelConfig.idField},${clientTypeSearch})`
        : '',
      depth: 1,
    },
  }
  const clientTypeArray = clientTypeEntities.getArray(clientTypeApiConfig)
  const clientTypeArrayIsLoading = clientTypeEntities.getIsLoadingArray(
    clientTypeApiConfig,
  )
  const clientTypeNextPage = clientTypeEntities.getNextPage(clientTypeApiConfig)
  const clientTypeNextPageAction = () => {
    if (clientTypeNextPage) {
      clientTypeApiActions.loadNextPage(clientTypeApiConfig)
    }
  }
      
  const [conflictStatusSearch, conflictStatusSearchSet] = useState('')
  const conflictStatusModelConfig = RESTIFY_CONFIG.registeredModels.conflictStatus
  const conflictStatusTemplate = conflictStatusModelConfig.views.selectOption ||
    conflictStatusModelConfig.views.default ||
    `conflictStatus/{${conflictStatusModelConfig.idField}}`
  const conflictStatusApiConfig = {
    filter: {
      q: conflictStatusSearch 
        ? `eq(${conflictStatusModelConfig.idField},${conflictStatusSearch})`
        : '',
      depth: 1,
    },
  }
  const conflictStatusArray = conflictStatusEntities.getArray(conflictStatusApiConfig)
  const conflictStatusArrayIsLoading = conflictStatusEntities.getIsLoadingArray(
    conflictStatusApiConfig,
  )
  const conflictStatusNextPage = conflictStatusEntities.getNextPage(conflictStatusApiConfig)
  const conflictStatusNextPageAction = () => {
    if (conflictStatusNextPage) {
      conflictStatusApiActions.loadNextPage(conflictStatusApiConfig)
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
          fieldName: 'clientActiveStatus',
          items: clientActiveStatusArray.map(item => ({
            value: item[clientActiveStatusModelConfig.idField], 
            label: templateApplyValues(clientActiveStatusTemplate, item),
          })),
          onSearch: (value) => clientActiveStatusSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: clientActiveStatusArrayIsLoading ? '' : undefined,
          onScrollToEnd: clientActiveStatusNextPageAction,
          isLoading: clientActiveStatusArrayIsLoading,
          missingValueResolver: value => 
            clientActiveStatusEntities.getById(value)[clientActiveStatusModelConfig.idField],
          multi: false,
          clearable: false,
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
          fieldName: 'clientType',
          items: clientTypeArray.map(item => ({
            value: item[clientTypeModelConfig.idField], 
            label: templateApplyValues(clientTypeTemplate, item),
          })),
          onSearch: (value) => clientTypeSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: clientTypeArrayIsLoading ? '' : undefined,
          onScrollToEnd: clientTypeNextPageAction,
          isLoading: clientTypeArrayIsLoading,
          missingValueResolver: value => 
            clientTypeEntities.getById(value)[clientTypeModelConfig.idField],
          multi: false,
          clearable: false,
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
      <ModalComponents.ModalDateTimePicker
        {...{
          fieldName: 'conflictCheckDate',
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
          fieldName: 'revenue',
          type: INPUT_TYPES.float,
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <ModalComponents.ModalSelect
        {...{
          fieldName: 'conflictStatus',
          items: conflictStatusArray.map(item => ({
            value: item[conflictStatusModelConfig.idField], 
            label: templateApplyValues(conflictStatusTemplate, item),
          })),
          onSearch: (value) => conflictStatusSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: conflictStatusArrayIsLoading ? '' : undefined,
          onScrollToEnd: conflictStatusNextPageAction,
          isLoading: conflictStatusArrayIsLoading,
          missingValueResolver: value => 
            conflictStatusEntities.getById(value)[conflictStatusModelConfig.idField],
          multi: false,
          clearable: true,
        }}
      />
    </div>
  )
}

export default EditComponent