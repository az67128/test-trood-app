import React, { useState } from 'react'
import style from './editComponent.css'
import modalsStyle from '$trood/styles/modals.css'
import classNames from 'classnames'
import { INPUT_TYPES } from '$trood/components/TInput'
import { RESTIFY_CONFIG } from 'redux-restify'
import { templateApplyValues } from '$trood/helpers/templates'
import { PICKER_TYPES } from '$trood/components/DateTimePicker'


const EditComponent = ({
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
      <ModalComponents.ModalInput
        {...{
          fieldName: 'position',
          type: INPUT_TYPES.multi,
          validate: {
            checkOnBlur: true,
            required: false,
          },
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
      <ModalComponents.ModalInput
        {...{
          fieldName: 'phone',
          type: INPUT_TYPES.multi,
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <ModalComponents.ModalInput
        {...{
          fieldName: 'email',
          type: INPUT_TYPES.multi,
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <ModalComponents.ModalInput
        {...{
          fieldName: 'avatar',
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