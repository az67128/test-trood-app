import React, { useState } from 'react'
import style from './editComponent.css'
import modalsStyle from '$trood/styles/modals.css'
import classNames from 'classnames'
import { INPUT_TYPES } from '$trood/components/TInput'
import { RESTIFY_CONFIG } from 'redux-restify'
import { templateApplyValues } from '$trood/helpers/templates'


const EditComponent = ({
  requisitesApiActions,
  requisitesEntities,
  ModalComponents, 
}) => {
  const [requisitesSearch, requisitesSearchSet] = useState('')
  const requisitesModelConfig = RESTIFY_CONFIG.registeredModels.requisites
  const requisitesTemplate = requisitesModelConfig.views.selectOption ||
    requisitesModelConfig.views.default ||
    `requisites/{${requisitesModelConfig.idField}}`
  const requisitesApiConfig = {
    filter: {
      q: requisitesSearch 
        ? `eq(${requisitesModelConfig.idField},${requisitesSearch})`
        : '',
      depth: 1,
    },
  }
  const requisitesArray = requisitesEntities.getArray(requisitesApiConfig)
  const requisitesArrayIsLoading = requisitesEntities.getIsLoadingArray(
    requisitesApiConfig,
  )
  const requisitesNextPage = requisitesEntities.getNextPage(requisitesApiConfig)
  const requisitesNextPageAction = () => {
    if (requisitesNextPage) {
      requisitesApiActions.loadNextPage(requisitesApiConfig)
    }
  }
      
  return (
    <div className={classNames(style.root, modalsStyle.root)}>
      <ModalComponents.ModalInput
        {...{
          fieldName: 'bankName',
          type: INPUT_TYPES.multi,
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <ModalComponents.ModalInput
        {...{
          fieldName: 'bankAddress',
          type: INPUT_TYPES.multi,
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <ModalComponents.ModalInput
        {...{
          fieldName: 'bik',
          type: INPUT_TYPES.multi,
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <ModalComponents.ModalInput
        {...{
          fieldName: 'ks',
          type: INPUT_TYPES.multi,
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <ModalComponents.ModalInput
        {...{
          fieldName: 'rs',
          type: INPUT_TYPES.multi,
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <ModalComponents.ModalSelect
        {...{
          fieldName: 'requisites',
          items: requisitesArray.map(item => ({
            value: item[requisitesModelConfig.idField], 
            label: templateApplyValues(requisitesTemplate, item),
          })),
          onSearch: (value) => requisitesSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: requisitesArrayIsLoading ? '' : undefined,
          onScrollToEnd: requisitesNextPageAction,
          isLoading: requisitesArrayIsLoading,
          missingValueResolver: value => 
            requisitesEntities.getById(value)[requisitesModelConfig.idField],
          multi: false,
          clearable: true,
        }}
      />
      <ModalComponents.ModalInput
        {...{
          fieldName: 'inn',
          type: INPUT_TYPES.multi,
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <ModalComponents.ModalInput
        {...{
          fieldName: 'kpp',
          type: INPUT_TYPES.multi,
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <ModalComponents.ModalInput
        {...{
          fieldName: 'swift',
          type: INPUT_TYPES.multi,
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <ModalComponents.ModalInput
        {...{
          fieldName: 'iban',
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