import React, { useState } from 'react'
import style from './editComponent.css'
import modalsStyle from '$trood/styles/modals.css'
import classNames from 'classnames'
import TSelect, { SELECT_TYPES } from '$trood/components/TSelect'
import { RESTIFY_CONFIG } from 'redux-restify'


const EditComponent = ({
  contactPersonApiActions,
  contactPersonEntities,
  matterApiActions,
  matterEntities,
  modelFormActions,
  modelErrors,
  model, 
}) => {
  const [matterSearch, matterSearchSet] = useState('')
  const matterModelConfig = RESTIFY_CONFIG.registeredModels.matter
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
      <TSelect
        {...{
          className: modalsStyle.control,
          items: matterArray.map(item => ({
            value: item[matterModelConfig.idField], 
            label: item.name || item[matterModelConfig.idField],
          })),
          values: model.matter 
            ? [model.matter] 
            : [],
          onChange: vals => modelFormActions.changeField('matter',
            vals[0],
          ),
          onSearch: (value) => matterSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: matterArrayIsLoading ? '' : undefined,
          onScrollToEnd: matterNextPageAction,
          isLoading: matterArrayIsLoading,
          missingValueResolver: value => 
            matterEntities.getById(value)[matterModelConfig.idField],
          label: 'matter',
          errors: modelErrors.matter,
          onValid: () => modelFormActions.resetFieldError('matter'),
          onInvalid: err => modelFormActions.setFieldError('matter', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: true,
          placeHolder: 'Not set',
        }}
      />
      <TSelect
        {...{
          className: modalsStyle.control,
          items: contactPersonArray.map(item => ({
            value: item[contactPersonModelConfig.idField], 
            label: item.name || item[contactPersonModelConfig.idField],
          })),
          values: model.contactPerson 
            ? [model.contactPerson] 
            : [],
          onChange: vals => modelFormActions.changeField('contactPerson',
            vals[0],
          ),
          onSearch: (value) => contactPersonSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: contactPersonArrayIsLoading ? '' : undefined,
          onScrollToEnd: contactPersonNextPageAction,
          isLoading: contactPersonArrayIsLoading,
          missingValueResolver: value => 
            contactPersonEntities.getById(value)[contactPersonModelConfig.idField],
          label: 'contactPerson',
          errors: modelErrors.contactPerson,
          onValid: () => modelFormActions.resetFieldError('contactPerson'),
          onInvalid: err => modelFormActions.setFieldError('contactPerson', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: true,
          placeHolder: 'Not set',
        }}
      />
    </div>
  )
}

export default EditComponent