import React, { useState } from 'react'
import style from './editComponent.css'
import modalsStyle from '$trood/styles/modals.css'
import classNames from 'classnames'
import { INPUT_TYPES } from '$trood/components/TInput'
import { RESTIFY_CONFIG } from 'redux-restify'
import { templateApplyValues } from '$trood/helpers/templates'
import { PICKER_TYPES } from '$trood/components/DateTimePicker'


const EditComponent = ({
  serviceTypeApiActions,
  serviceTypeEntities,
  utbmsApiActions,
  utbmsEntities,
  employeeApiActions,
  employeeEntities,
  priceUnitApiActions,
  priceUnitEntities,
  ModalComponents, 
}) => {
  const [priceUnitSearch, priceUnitSearchSet] = useState('')
  const priceUnitModelConfig = RESTIFY_CONFIG.registeredModels.priceUnit
  const priceUnitTemplate = priceUnitModelConfig.views.selectOption ||
    priceUnitModelConfig.views.default ||
    `priceUnit/{${priceUnitModelConfig.idField}}`
  const priceUnitApiConfig = {
    filter: {
      q: priceUnitSearch 
        ? `eq(${priceUnitModelConfig.idField},${priceUnitSearch})`
        : '',
      depth: 1,
    },
  }
  const priceUnitArray = priceUnitEntities.getArray(priceUnitApiConfig)
  const priceUnitArrayIsLoading = priceUnitEntities.getIsLoadingArray(
    priceUnitApiConfig,
  )
  const priceUnitNextPage = priceUnitEntities.getNextPage(priceUnitApiConfig)
  const priceUnitNextPageAction = () => {
    if (priceUnitNextPage) {
      priceUnitApiActions.loadNextPage(priceUnitApiConfig)
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
      
  const [serviceTypeSearch, serviceTypeSearchSet] = useState('')
  const serviceTypeModelConfig = RESTIFY_CONFIG.registeredModels.serviceType
  const serviceTypeTemplate = serviceTypeModelConfig.views.selectOption ||
    serviceTypeModelConfig.views.default ||
    `serviceType/{${serviceTypeModelConfig.idField}}`
  const serviceTypeApiConfig = {
    filter: {
      q: serviceTypeSearch 
        ? `eq(${serviceTypeModelConfig.idField},${serviceTypeSearch})`
        : '',
      depth: 1,
    },
  }
  const serviceTypeArray = serviceTypeEntities.getArray(serviceTypeApiConfig)
  const serviceTypeArrayIsLoading = serviceTypeEntities.getIsLoadingArray(
    serviceTypeApiConfig,
  )
  const serviceTypeNextPage = serviceTypeEntities.getNextPage(serviceTypeApiConfig)
  const serviceTypeNextPageAction = () => {
    if (serviceTypeNextPage) {
      serviceTypeApiActions.loadNextPage(serviceTypeApiConfig)
    }
  }
      
  return (
    <div className={classNames(style.root, modalsStyle.root)}>
      <ModalComponents.ModalInput
        {...{
          fieldName: 'number',
          type: INPUT_TYPES.float,
          validate: {
            checkOnBlur: true,
            required: true,
          },
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
          fieldName: 'priceUnit',
          items: priceUnitArray.map(item => ({
            value: item[priceUnitModelConfig.idField], 
            label: templateApplyValues(priceUnitTemplate, item),
          })),
          onSearch: (value) => priceUnitSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: priceUnitArrayIsLoading ? '' : undefined,
          onScrollToEnd: priceUnitNextPageAction,
          isLoading: priceUnitArrayIsLoading,
          missingValueResolver: value => 
            priceUnitEntities.getById(value)[priceUnitModelConfig.idField],
          multi: false,
          clearable: false,
        }}
      />
      <ModalComponents.ModalInput
        {...{
          fieldName: 'amount',
          type: INPUT_TYPES.float,
          validate: {
            checkOnBlur: true,
            required: true,
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
          fieldName: 'serviceType',
          items: serviceTypeArray.map(item => ({
            value: item[serviceTypeModelConfig.idField], 
            label: templateApplyValues(serviceTypeTemplate, item),
          })),
          onSearch: (value) => serviceTypeSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: serviceTypeArrayIsLoading ? '' : undefined,
          onScrollToEnd: serviceTypeNextPageAction,
          isLoading: serviceTypeArrayIsLoading,
          missingValueResolver: value => 
            serviceTypeEntities.getById(value)[serviceTypeModelConfig.idField],
          multi: false,
          clearable: true,
        }}
      />
    </div>
  )
}

export default EditComponent