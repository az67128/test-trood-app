import React, { useState } from 'react'
import style from './editComponent.css'
import modalsStyle from '$trood/styles/modals.css'
import classNames from 'classnames'
import { RESTIFY_CONFIG } from 'redux-restify'
import { templateApplyValues } from '$trood/helpers/templates'
import { INPUT_TYPES } from '$trood/components/TInput'
import { PICKER_TYPES } from '$trood/components/DateTimePicker'


const EditComponent = ({
  vacancyStatusApiActions,
  vacancyStatusEntities,
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
      
  const [vacancyStatusSearch, vacancyStatusSearchSet] = useState('')
  const vacancyStatusModelConfig = RESTIFY_CONFIG.registeredModels.vacancyStatus
  const vacancyStatusTemplate = vacancyStatusModelConfig.views.selectOption ||
    vacancyStatusModelConfig.views.default ||
    `vacancyStatus/{${vacancyStatusModelConfig.idField}}`
  const vacancyStatusApiConfig = {
    filter: {
      q: vacancyStatusSearch 
        ? `eq(${vacancyStatusModelConfig.idField},${vacancyStatusSearch})`
        : '',
      depth: 1,
    },
  }
  const vacancyStatusArray = vacancyStatusEntities.getArray(vacancyStatusApiConfig)
  const vacancyStatusArrayIsLoading = vacancyStatusEntities.getIsLoadingArray(
    vacancyStatusApiConfig,
  )
  const vacancyStatusNextPage = vacancyStatusEntities.getNextPage(vacancyStatusApiConfig)
  const vacancyStatusNextPageAction = () => {
    if (vacancyStatusNextPage) {
      vacancyStatusApiActions.loadNextPage(vacancyStatusApiConfig)
    }
  }
      
  return (
    <div className={classNames(style.root, modalsStyle.root)}>
      <ModalComponents.ModalSelect
        {...{
          fieldName: 'recruiter',
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
          fieldName: 'vacancyStatus',
          items: vacancyStatusArray.map(item => ({
            value: item[vacancyStatusModelConfig.idField], 
            label: templateApplyValues(vacancyStatusTemplate, item),
          })),
          onSearch: (value) => vacancyStatusSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: vacancyStatusArrayIsLoading ? '' : undefined,
          onScrollToEnd: vacancyStatusNextPageAction,
          isLoading: vacancyStatusArrayIsLoading,
          missingValueResolver: value => 
            vacancyStatusEntities.getById(value)[vacancyStatusModelConfig.idField],
          multi: false,
          clearable: false,
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
          fieldName: 'created',
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