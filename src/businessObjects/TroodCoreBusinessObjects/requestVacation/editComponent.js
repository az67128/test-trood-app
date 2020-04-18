import React, { useState } from 'react'
import style from './editComponent.css'
import modalsStyle from '$trood/styles/modals.css'
import classNames from 'classnames'
import { RESTIFY_CONFIG } from 'redux-restify'
import { templateApplyValues } from '$trood/helpers/templates'
import { PICKER_TYPES } from '$trood/components/DateTimePicker'
import { INPUT_TYPES } from '$trood/components/TInput'


const EditComponent = ({
  statusRequestVacationApiActions,
  statusRequestVacationEntities,
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
      
  const [statusRequestVacationSearch, statusRequestVacationSearchSet] = useState('')
  const statusRequestVacationModelConfig = RESTIFY_CONFIG.registeredModels.statusRequestVacation
  const statusRequestVacationTemplate = statusRequestVacationModelConfig.views.selectOption ||
    statusRequestVacationModelConfig.views.default ||
    `statusRequestVacation/{${statusRequestVacationModelConfig.idField}}`
  const statusRequestVacationApiConfig = {
    filter: {
      q: statusRequestVacationSearch 
        ? `eq(${statusRequestVacationModelConfig.idField},${statusRequestVacationSearch})`
        : '',
      depth: 1,
    },
  }
  const statusRequestVacationArray = statusRequestVacationEntities.getArray(statusRequestVacationApiConfig)
  const statusRequestVacationArrayIsLoading = statusRequestVacationEntities.getIsLoadingArray(
    statusRequestVacationApiConfig,
  )
  const statusRequestVacationNextPage = statusRequestVacationEntities.getNextPage(statusRequestVacationApiConfig)
  const statusRequestVacationNextPageAction = () => {
    if (statusRequestVacationNextPage) {
      statusRequestVacationApiActions.loadNextPage(statusRequestVacationApiConfig)
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
          fieldName: 'statusRequestVacation',
          items: statusRequestVacationArray.map(item => ({
            value: item[statusRequestVacationModelConfig.idField], 
            label: templateApplyValues(statusRequestVacationTemplate, item),
          })),
          onSearch: (value) => statusRequestVacationSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: statusRequestVacationArrayIsLoading ? '' : undefined,
          onScrollToEnd: statusRequestVacationNextPageAction,
          isLoading: statusRequestVacationArrayIsLoading,
          missingValueResolver: value => 
            statusRequestVacationEntities.getById(value)[statusRequestVacationModelConfig.idField],
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
      <ModalComponents.ModalDateTimePicker
        {...{
          fieldName: 'statusDate',
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
          fieldName: 'number',
          type: INPUT_TYPES.multi,
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