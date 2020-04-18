import React, { useState } from 'react'
import style from './editComponent.css'
import modalsStyle from '$trood/styles/modals.css'
import classNames from 'classnames'
import { RESTIFY_CONFIG } from 'redux-restify'
import { templateApplyValues } from '$trood/helpers/templates'


const EditComponent = ({
  contactPersonApiActions,
  contactPersonEntities,
  matterApiActions,
  matterEntities,
  ModalComponents, 
}) => {
  const [matterSearch, matterSearchSet] = useState('')
  const matterModelConfig = RESTIFY_CONFIG.registeredModels.matter
  const matterTemplate = matterModelConfig.views.selectOption ||
    matterModelConfig.views.default ||
    `matter/{${matterModelConfig.idField}}`
  const matterApiConfig = {
    filter: {
      q: matterSearch 
        ? `eq(${matterModelConfig.idField},${matterSearch})`
        : '',
      depth: 1,
    },
  }
  const matterArray = matterEntities.getArray(matterApiConfig)
  const matterArrayIsLoading = matterEntities.getIsLoadingArray(
    matterApiConfig,
  )
  const matterNextPage = matterEntities.getNextPage(matterApiConfig)
  const matterNextPageAction = () => {
    if (matterNextPage) {
      matterApiActions.loadNextPage(matterApiConfig)
    }
  }
      
  const [contactPersonSearch, contactPersonSearchSet] = useState('')
  const contactPersonModelConfig = RESTIFY_CONFIG.registeredModels.contactPerson
  const contactPersonTemplate = contactPersonModelConfig.views.selectOption ||
    contactPersonModelConfig.views.default ||
    `contactPerson/{${contactPersonModelConfig.idField}}`
  const contactPersonApiConfig = {
    filter: {
      q: contactPersonSearch 
        ? `eq(${contactPersonModelConfig.idField},${contactPersonSearch})`
        : '',
      depth: 1,
    },
  }
  const contactPersonArray = contactPersonEntities.getArray(contactPersonApiConfig)
  const contactPersonArrayIsLoading = contactPersonEntities.getIsLoadingArray(
    contactPersonApiConfig,
  )
  const contactPersonNextPage = contactPersonEntities.getNextPage(contactPersonApiConfig)
  const contactPersonNextPageAction = () => {
    if (contactPersonNextPage) {
      contactPersonApiActions.loadNextPage(contactPersonApiConfig)
    }
  }
      
  return (
    <div className={classNames(style.root, modalsStyle.root)}>
      <ModalComponents.ModalSelect
        {...{
          fieldName: 'matter',
          items: matterArray.map(item => ({
            value: item[matterModelConfig.idField], 
            label: templateApplyValues(matterTemplate, item),
          })),
          onSearch: (value) => matterSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: matterArrayIsLoading ? '' : undefined,
          onScrollToEnd: matterNextPageAction,
          isLoading: matterArrayIsLoading,
          missingValueResolver: value => 
            matterEntities.getById(value)[matterModelConfig.idField],
          multi: false,
          clearable: false,
        }}
      />
      <ModalComponents.ModalSelect
        {...{
          fieldName: 'contactPerson',
          items: contactPersonArray.map(item => ({
            value: item[contactPersonModelConfig.idField], 
            label: templateApplyValues(contactPersonTemplate, item),
          })),
          onSearch: (value) => contactPersonSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: contactPersonArrayIsLoading ? '' : undefined,
          onScrollToEnd: contactPersonNextPageAction,
          isLoading: contactPersonArrayIsLoading,
          missingValueResolver: value => 
            contactPersonEntities.getById(value)[contactPersonModelConfig.idField],
          multi: false,
          clearable: false,
        }}
      />
    </div>
  )
}

export default EditComponent