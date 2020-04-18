import React, { useState } from 'react'
import style from './editComponent.css'
import modalsStyle from '$trood/styles/modals.css'
import classNames from 'classnames'
import { INPUT_TYPES } from '$trood/components/TInput'
import { RESTIFY_CONFIG } from 'redux-restify'
import { templateApplyValues } from '$trood/helpers/templates'
import { PICKER_TYPES } from '$trood/components/DateTimePicker'


const EditComponent = ({
  requestVacationApiActions,
  requestVacationEntities,
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
      
  const [requestVacationSearch, requestVacationSearchSet] = useState('')
  const requestVacationModelConfig = RESTIFY_CONFIG.registeredModels.requestVacation
  const requestVacationTemplate = requestVacationModelConfig.views.selectOption ||
    requestVacationModelConfig.views.default ||
    `requestVacation/{${requestVacationModelConfig.idField}}`
  const requestVacationApiConfig = {
    filter: {
      q: requestVacationSearch 
        ? `eq(${requestVacationModelConfig.idField},${requestVacationSearch})`
        : '',
      depth: 1,
    },
  }
  const requestVacationArray = requestVacationEntities.getArray(requestVacationApiConfig)
  const requestVacationArrayIsLoading = requestVacationEntities.getIsLoadingArray(
    requestVacationApiConfig,
  )
  const requestVacationNextPage = requestVacationEntities.getNextPage(requestVacationApiConfig)
  const requestVacationNextPageAction = () => {
    if (requestVacationNextPage) {
      requestVacationApiActions.loadNextPage(requestVacationApiConfig)
    }
  }
      
  return (
    <div className={classNames(style.root, modalsStyle.root)}>
      <ModalComponents.ModalInput
        {...{
          fieldName: 'priority',
          type: INPUT_TYPES.float,
          validate: {
            checkOnBlur: true,
            required: true,
          },
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
          fieldName: 'requestVacation',
          items: requestVacationArray.map(item => ({
            value: item[requestVacationModelConfig.idField], 
            label: templateApplyValues(requestVacationTemplate, item),
          })),
          onSearch: (value) => requestVacationSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: requestVacationArrayIsLoading ? '' : undefined,
          onScrollToEnd: requestVacationNextPageAction,
          isLoading: requestVacationArrayIsLoading,
          missingValueResolver: value => 
            requestVacationEntities.getById(value)[requestVacationModelConfig.idField],
          multi: false,
          clearable: true,
        }}
      />
      <ModalComponents.ModalInput
        {...{
          fieldName: 'approve',
          type: INPUT_TYPES.multi,
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <ModalComponents.ModalInput
        {...{
          fieldName: 'comment',
          type: INPUT_TYPES.multi,
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <ModalComponents.ModalDateTimePicker
        {...{
          fieldName: 'approveDate',
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