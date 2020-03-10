import React, { useState } from 'react'
import style from './editComponent.css'
import modalsStyle from '$trood/styles/modals.css'
import classNames from 'classnames'
import TSelect, { SELECT_TYPES } from '$trood/components/TSelect'
import { RESTIFY_CONFIG } from 'redux-restify'
import TInput, { INPUT_TYPES } from '$trood/components/TInput'


const EditComponent = ({
  employeePositionApiActions,
  employeePositionEntities,
  clientApiActions,
  clientEntities,
  modelFormActions,
  modelErrors,
  model, 
}) => {
  const [clientSearch, clientSearchSet] = useState('')
  const clientModelConfig = RESTIFY_CONFIG.registeredModels.client
  const clientApiConfig = {
    filter: {
      q: clientSearch 
        ? `eq(${clientModelConfig.idField},${clientSearch})`
        : '',
      depth: 1,
    },
  }
  const clientArray = clientEntities.getArray(clientApiConfig)
  const clientArrayIsLoading = clientEntities.getIsLoadingArray(
    clientApiConfig,
  )
  const clientNextPage = clientEntities.getNextPage(clientApiConfig)
  const clientNextPageAction = () => {
    if (clientNextPage) {
      clientApiActions.loadNextPage(clientApiConfig)
    }
  }
      
  const [employeePositionSearch, employeePositionSearchSet] = useState('')
  const employeePositionModelConfig = RESTIFY_CONFIG.registeredModels.employeePosition
  const employeePositionApiConfig = {
    filter: {
      q: employeePositionSearch 
        ? `eq(${employeePositionModelConfig.idField},${employeePositionSearch})`
        : '',
      depth: 1,
    },
  }
  const employeePositionArray = employeePositionEntities.getArray(employeePositionApiConfig)
  const employeePositionArrayIsLoading = employeePositionEntities.getIsLoadingArray(
    employeePositionApiConfig,
  )
  const employeePositionNextPage = employeePositionEntities.getNextPage(employeePositionApiConfig)
  const employeePositionNextPageAction = () => {
    if (employeePositionNextPage) {
      employeePositionApiActions.loadNextPage(employeePositionApiConfig)
    }
  }
      
  return (
    <div className={classNames(style.root, modalsStyle.root)}>
      <TSelect
        {...{
          className: modalsStyle.control,
          items: clientArray.map(item => ({
            value: item[clientModelConfig.idField], 
            label: item.name || item[clientModelConfig.idField],
          })),
          values: model.client 
            ? [model.client] 
            : [],
          onChange: vals => modelFormActions.changeField('client',
            vals[0],
          ),
          onSearch: (value) => clientSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: clientArrayIsLoading ? '' : undefined,
          onScrollToEnd: clientNextPageAction,
          isLoading: clientArrayIsLoading,
          missingValueResolver: value => clientEntities.getById(value)['client'],
          label: 'client',
          errors: modelErrors.client,
          onValid: () => modelFormActions.resetFieldError('client'),
          onInvalid: err => modelFormActions.setFieldError('client', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: true,
          placeHolder: 'Not set',
        }}
      />
      <TSelect
        {...{
          className: modalsStyle.control,
          items: employeePositionArray.map(item => ({
            value: item[employeePositionModelConfig.idField], 
            label: item.name || item[employeePositionModelConfig.idField],
          })),
          values: model.employeePosition 
            ? [model.employeePosition] 
            : [],
          onChange: vals => modelFormActions.changeField('employeePosition',
            vals[0],
          ),
          onSearch: (value) => employeePositionSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: employeePositionArrayIsLoading ? '' : undefined,
          onScrollToEnd: employeePositionNextPageAction,
          isLoading: employeePositionArrayIsLoading,
          missingValueResolver: value => employeePositionEntities.getById(value)['employeePosition'],
          label: 'employeePosition',
          errors: modelErrors.employeePosition,
          onValid: () => modelFormActions.resetFieldError('employeePosition'),
          onInvalid: err => modelFormActions.setFieldError('employeePosition', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: true,
          placeHolder: 'Not set',
        }}
      />
      <TInput
          {...{
            type: INPUT_TYPES.float,
            label: 'rate',
            className: modalsStyle.control,
            value: model.rate,
            errors: modelErrors.rate,
            onChange: val => modelFormActions.changeField('rate', val),
            onValid: () => modelFormActions.resetFieldError('rate'),
            onInvalid: err => modelFormActions.setFieldError('rate', err),
            validate: {
              checkOnBlur: true,
              required: true,
            },
          }}
      />
    </div>
  )
}

export default EditComponent