import React, { useState } from 'react'
import style from './editComponent.css'
import modalsStyle from '$trood/styles/modals.css'
import classNames from 'classnames'
import { RESTIFY_CONFIG } from 'redux-restify'
import { templateApplyValues } from '$trood/helpers/templates'
import { INPUT_TYPES } from '$trood/components/TInput'


const EditComponent = ({
  employeePositionApiActions,
  employeePositionEntities,
  clientApiActions,
  clientEntities,
  ModalComponents, 
}) => {
  const [clientSearch, clientSearchSet] = useState('')
  const clientModelConfig = RESTIFY_CONFIG.registeredModels.client
  const clientTemplate = clientModelConfig.views.selectOption ||
    clientModelConfig.views.default ||
    `client/{${clientModelConfig.idField}}`
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
  const employeePositionTemplate = employeePositionModelConfig.views.selectOption ||
    employeePositionModelConfig.views.default ||
    `employeePosition/{${employeePositionModelConfig.idField}}`
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
      <ModalComponents.ModalSelect
        {...{
          fieldName: 'client',
          items: clientArray.map(item => ({
            value: item[clientModelConfig.idField], 
            label: templateApplyValues(clientTemplate, item),
          })),
          onSearch: (value) => clientSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: clientArrayIsLoading ? '' : undefined,
          onScrollToEnd: clientNextPageAction,
          isLoading: clientArrayIsLoading,
          missingValueResolver: value => 
            clientEntities.getById(value)[clientModelConfig.idField],
          multi: false,
          clearable: false,
        }}
      />
      <ModalComponents.ModalSelect
        {...{
          fieldName: 'employeePosition',
          items: employeePositionArray.map(item => ({
            value: item[employeePositionModelConfig.idField], 
            label: templateApplyValues(employeePositionTemplate, item),
          })),
          onSearch: (value) => employeePositionSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: employeePositionArrayIsLoading ? '' : undefined,
          onScrollToEnd: employeePositionNextPageAction,
          isLoading: employeePositionArrayIsLoading,
          missingValueResolver: value => 
            employeePositionEntities.getById(value)[employeePositionModelConfig.idField],
          multi: false,
          clearable: false,
        }}
      />
      <ModalComponents.ModalInput
        {...{
          fieldName: 'rate',
          type: INPUT_TYPES.float,
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