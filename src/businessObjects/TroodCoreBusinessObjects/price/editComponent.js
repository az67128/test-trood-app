import React, { useState } from 'react'
import style from './editComponent.css'
import modalsStyle from '$trood/styles/modals.css'
import classNames from 'classnames'
import TInput, { INPUT_TYPES } from '$trood/components/TInput'
import TSelect, { SELECT_TYPES } from '$trood/components/TSelect'
import { RESTIFY_CONFIG } from 'redux-restify'
import DateTimePicker, { PICKER_TYPES } from '$trood/components/DateTimePicker'


const EditComponent = ({
  serviceTypeApiActions,
  serviceTypeEntities,
  utbmsApiActions,
  utbmsEntities,
  employeeApiActions,
  employeeEntities,
  priceUnitApiActions,
  priceUnitEntities,
  modelFormActions,
  modelErrors,
  model, 
}) => {
  const [priceUnitSearch, priceUnitSearchSet] = useState('')
  const priceUnitModelConfig = RESTIFY_CONFIG.registeredModels.priceUnit
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
      <TInput
          {...{
            type: INPUT_TYPES.float,
            label: 'number',
            className: modalsStyle.control,
            value: model.number,
            errors: modelErrors.number,
            onChange: val => modelFormActions.changeField('number', val),
            onValid: () => modelFormActions.resetFieldError('number'),
            onInvalid: err => modelFormActions.setFieldError('number', err),
            validate: {
              checkOnBlur: true,
              required: true,
            },
          }}
      />
      <TInput
          {...{
            type: INPUT_TYPES.multi,
            label: 'name',
            className: modalsStyle.control,
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
          className: modalsStyle.control,
          items: priceUnitArray.map(item => ({
            value: item[priceUnitModelConfig.idField], 
            label: item.name || item[priceUnitModelConfig.idField],
          })),
          values: model.priceUnit 
            ? [model.priceUnit] 
            : [],
          onChange: vals => modelFormActions.changeField('priceUnit',
            vals[0],
          ),
          onSearch: (value) => priceUnitSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: priceUnitArrayIsLoading ? '' : undefined,
          onScrollToEnd: priceUnitNextPageAction,
          isLoading: priceUnitArrayIsLoading,
          missingValueResolver: value => priceUnitEntities.getById(value)['priceUnit'],
          label: 'priceUnit',
          errors: modelErrors.priceUnit,
          onValid: () => modelFormActions.resetFieldError('priceUnit'),
          onInvalid: err => modelFormActions.setFieldError('priceUnit', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: true,
          placeHolder: 'Not set',
        }}
      />
      <TInput
          {...{
            type: INPUT_TYPES.float,
            label: 'amount',
            className: modalsStyle.control,
            value: model.amount,
            errors: modelErrors.amount,
            onChange: val => modelFormActions.changeField('amount', val),
            onValid: () => modelFormActions.resetFieldError('amount'),
            onInvalid: err => modelFormActions.setFieldError('amount', err),
            validate: {
              checkOnBlur: true,
              required: true,
            },
          }}
      />
      <TSelect
        {...{
          className: modalsStyle.control,
          items: employeeArray.map(item => ({
            value: item[employeeModelConfig.idField], 
            label: item.name || item[employeeModelConfig.idField],
          })),
          values: model.author 
            ? [model.author] 
            : [],
          onChange: vals => modelFormActions.changeField('author',
            vals[0],
          ),
          onSearch: (value) => employeeSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: employeeArrayIsLoading ? '' : undefined,
          onScrollToEnd: employeeNextPageAction,
          isLoading: employeeArrayIsLoading,
          missingValueResolver: value => employeeEntities.getById(value)['author'],
          label: 'author',
          errors: modelErrors.author,
          onValid: () => modelFormActions.resetFieldError('author'),
          onInvalid: err => modelFormActions.setFieldError('author', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: true,
          placeHolder: 'Not set',
        }}
      />
      <DateTimePicker
          {...{
            label: 'created',
            className: modalsStyle.control,
            value: model.created,
            errors: modelErrors.created,
            onChange: val => modelFormActions.changeField('created', val),
            onValid: () => modelFormActions.resetFieldError('created'),
            onInvalid: err => modelFormActions.setFieldError('created', err),
            type: PICKER_TYPES.dateTime,
            validate: {
              checkOnBlur: true,
              requiredDate: false,
              requiredTime: false,

          },
        }}
      />
      <TSelect
        {...{
          className: modalsStyle.control,
          items: utbmsArray.map(item => ({
            value: item[utbmsModelConfig.idField], 
            label: item.name || item[utbmsModelConfig.idField],
          })),
          values: model.utbms 
            ? [model.utbms] 
            : [],
          onChange: vals => modelFormActions.changeField('utbms',
            vals[0],
          ),
          onSearch: (value) => utbmsSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: utbmsArrayIsLoading ? '' : undefined,
          onScrollToEnd: utbmsNextPageAction,
          isLoading: utbmsArrayIsLoading,
          missingValueResolver: value => utbmsEntities.getById(value)['utbms'],
          label: 'utbms',
          errors: modelErrors.utbms,
          onValid: () => modelFormActions.resetFieldError('utbms'),
          onInvalid: err => modelFormActions.setFieldError('utbms', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: false,
          placeHolder: 'Not set',
        }}
      />
      <TSelect
        {...{
          className: modalsStyle.control,
          items: serviceTypeArray.map(item => ({
            value: item[serviceTypeModelConfig.idField], 
            label: item.name || item[serviceTypeModelConfig.idField],
          })),
          values: model.serviceType 
            ? [model.serviceType] 
            : [],
          onChange: vals => modelFormActions.changeField('serviceType',
            vals[0],
          ),
          onSearch: (value) => serviceTypeSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: serviceTypeArrayIsLoading ? '' : undefined,
          onScrollToEnd: serviceTypeNextPageAction,
          isLoading: serviceTypeArrayIsLoading,
          missingValueResolver: value => serviceTypeEntities.getById(value)['serviceType'],
          label: 'serviceType',
          errors: modelErrors.serviceType,
          onValid: () => modelFormActions.resetFieldError('serviceType'),
          onInvalid: err => modelFormActions.setFieldError('serviceType', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: false,
          placeHolder: 'Not set',
        }}
      />
    </div>
  )
}

export default EditComponent