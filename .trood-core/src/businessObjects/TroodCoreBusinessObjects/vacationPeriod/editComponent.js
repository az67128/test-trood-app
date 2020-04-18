import React, { useState } from 'react'
import style from './editComponent.css'
import modalsStyle from '$trood/styles/modals.css'
import classNames from 'classnames'
import { PICKER_TYPES } from '$trood/components/DateTimePicker'
import { RESTIFY_CONFIG } from 'redux-restify'
import { templateApplyValues } from '$trood/helpers/templates'


const EditComponent = ({
  employeeApiActions,
  employeeEntities,
  requestVacationApiActions,
  requestVacationEntities,
  ModalComponents, 
}) => {
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
      
  return (
    <div className={classNames(style.root, modalsStyle.root)}>
      <ModalComponents.ModalDateTimePicker
        {...{
          fieldName: 'startDate',
          type: PICKER_TYPES.dateTime,
          validate: {
            checkOnBlur: true,
            requiredDate: true,
            requiredTime: true,
          },
        }}
      />
      <ModalComponents.ModalDateTimePicker
        {...{
          fieldName: 'endDate',
          type: PICKER_TYPES.dateTime,
          validate: {
            checkOnBlur: true,
            requiredDate: true,
            requiredTime: true,
          },
        }}
      />
      <ModalComponents.ModalCheckbox
          {...{
            fieldName: 'paid',
            validate: {
              checkOnBlur: true,
              required: true,
            },
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
          fieldName: 'vacationIs',
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
    </div>
  )
}

export default EditComponent