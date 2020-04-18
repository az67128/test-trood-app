import React, { useState } from 'react'
import style from './editComponent.css'
import modalsStyle from '$trood/styles/modals.css'
import classNames from 'classnames'
import { INPUT_TYPES } from '$trood/components/TInput'
import { RESTIFY_CONFIG } from 'redux-restify'
import { templateApplyValues } from '$trood/helpers/templates'
import { PICKER_TYPES } from '$trood/components/DateTimePicker'


const EditComponent = ({
  contactPersonApiActions,
  contactPersonEntities,
  budgetTypeApiActions,
  budgetTypeEntities,
  matterActiveStatusApiActions,
  matterActiveStatusEntities,
  matterStatusApiActions,
  matterStatusEntities,
  matterTypeApiActions,
  matterTypeEntities,
  clientApiActions,
  clientEntities,
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
      
  const [matterTypeSearch, matterTypeSearchSet] = useState('')
  const matterTypeModelConfig = RESTIFY_CONFIG.registeredModels.matterType
  const matterTypeTemplate = matterTypeModelConfig.views.selectOption ||
    matterTypeModelConfig.views.default ||
    `matterType/{${matterTypeModelConfig.idField}}`
  const matterTypeApiConfig = {
    filter: {
      q: matterTypeSearch 
        ? `eq(${matterTypeModelConfig.idField},${matterTypeSearch})`
        : '',
      depth: 1,
    },
  }
  const matterTypeArray = matterTypeEntities.getArray(matterTypeApiConfig)
  const matterTypeArrayIsLoading = matterTypeEntities.getIsLoadingArray(
    matterTypeApiConfig,
  )
  const matterTypeNextPage = matterTypeEntities.getNextPage(matterTypeApiConfig)
  const matterTypeNextPageAction = () => {
    if (matterTypeNextPage) {
      matterTypeApiActions.loadNextPage(matterTypeApiConfig)
    }
  }
      
  const [matterStatusSearch, matterStatusSearchSet] = useState('')
  const matterStatusModelConfig = RESTIFY_CONFIG.registeredModels.matterStatus
  const matterStatusTemplate = matterStatusModelConfig.views.selectOption ||
    matterStatusModelConfig.views.default ||
    `matterStatus/{${matterStatusModelConfig.idField}}`
  const matterStatusApiConfig = {
    filter: {
      q: matterStatusSearch 
        ? `eq(${matterStatusModelConfig.idField},${matterStatusSearch})`
        : '',
      depth: 1,
    },
  }
  const matterStatusArray = matterStatusEntities.getArray(matterStatusApiConfig)
  const matterStatusArrayIsLoading = matterStatusEntities.getIsLoadingArray(
    matterStatusApiConfig,
  )
  const matterStatusNextPage = matterStatusEntities.getNextPage(matterStatusApiConfig)
  const matterStatusNextPageAction = () => {
    if (matterStatusNextPage) {
      matterStatusApiActions.loadNextPage(matterStatusApiConfig)
    }
  }
      
  const [matterActiveStatusSearch, matterActiveStatusSearchSet] = useState('')
  const matterActiveStatusModelConfig = RESTIFY_CONFIG.registeredModels.matterActiveStatus
  const matterActiveStatusTemplate = matterActiveStatusModelConfig.views.selectOption ||
    matterActiveStatusModelConfig.views.default ||
    `matterActiveStatus/{${matterActiveStatusModelConfig.idField}}`
  const matterActiveStatusApiConfig = {
    filter: {
      q: matterActiveStatusSearch 
        ? `eq(${matterActiveStatusModelConfig.idField},${matterActiveStatusSearch})`
        : '',
      depth: 1,
    },
  }
  const matterActiveStatusArray = matterActiveStatusEntities.getArray(matterActiveStatusApiConfig)
  const matterActiveStatusArrayIsLoading = matterActiveStatusEntities.getIsLoadingArray(
    matterActiveStatusApiConfig,
  )
  const matterActiveStatusNextPage = matterActiveStatusEntities.getNextPage(matterActiveStatusApiConfig)
  const matterActiveStatusNextPageAction = () => {
    if (matterActiveStatusNextPage) {
      matterActiveStatusApiActions.loadNextPage(matterActiveStatusApiConfig)
    }
  }
      
  const [budgetTypeSearch, budgetTypeSearchSet] = useState('')
  const budgetTypeModelConfig = RESTIFY_CONFIG.registeredModels.budgetType
  const budgetTypeTemplate = budgetTypeModelConfig.views.selectOption ||
    budgetTypeModelConfig.views.default ||
    `budgetType/{${budgetTypeModelConfig.idField}}`
  const budgetTypeApiConfig = {
    filter: {
      q: budgetTypeSearch 
        ? `eq(${budgetTypeModelConfig.idField},${budgetTypeSearch})`
        : '',
      depth: 1,
    },
  }
  const budgetTypeArray = budgetTypeEntities.getArray(budgetTypeApiConfig)
  const budgetTypeArrayIsLoading = budgetTypeEntities.getIsLoadingArray(
    budgetTypeApiConfig,
  )
  const budgetTypeNextPage = budgetTypeEntities.getNextPage(budgetTypeApiConfig)
  const budgetTypeNextPageAction = () => {
    if (budgetTypeNextPage) {
      budgetTypeApiActions.loadNextPage(budgetTypeApiConfig)
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
      <ModalComponents.ModalInput
        {...{
          fieldName: 'code',
          type: INPUT_TYPES.multi,
          validate: {
            checkOnBlur: true,
            required: false,
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
          fieldName: 'responsible',
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
          fieldName: 'matterType',
          items: matterTypeArray.map(item => ({
            value: item[matterTypeModelConfig.idField], 
            label: templateApplyValues(matterTypeTemplate, item),
          })),
          onSearch: (value) => matterTypeSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: matterTypeArrayIsLoading ? '' : undefined,
          onScrollToEnd: matterTypeNextPageAction,
          isLoading: matterTypeArrayIsLoading,
          missingValueResolver: value => 
            matterTypeEntities.getById(value)[matterTypeModelConfig.idField],
          multi: false,
          clearable: false,
        }}
      />
      <ModalComponents.ModalSelect
        {...{
          fieldName: 'matterStatus',
          items: matterStatusArray.map(item => ({
            value: item[matterStatusModelConfig.idField], 
            label: templateApplyValues(matterStatusTemplate, item),
          })),
          onSearch: (value) => matterStatusSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: matterStatusArrayIsLoading ? '' : undefined,
          onScrollToEnd: matterStatusNextPageAction,
          isLoading: matterStatusArrayIsLoading,
          missingValueResolver: value => 
            matterStatusEntities.getById(value)[matterStatusModelConfig.idField],
          multi: false,
          clearable: false,
        }}
      />
      <ModalComponents.ModalSelect
        {...{
          fieldName: 'matterActiveStatus',
          items: matterActiveStatusArray.map(item => ({
            value: item[matterActiveStatusModelConfig.idField], 
            label: templateApplyValues(matterActiveStatusTemplate, item),
          })),
          onSearch: (value) => matterActiveStatusSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: matterActiveStatusArrayIsLoading ? '' : undefined,
          onScrollToEnd: matterActiveStatusNextPageAction,
          isLoading: matterActiveStatusArrayIsLoading,
          missingValueResolver: value => 
            matterActiveStatusEntities.getById(value)[matterActiveStatusModelConfig.idField],
          multi: false,
          clearable: false,
        }}
      />
      <ModalComponents.ModalSelect
        {...{
          fieldName: 'budgetType',
          items: budgetTypeArray.map(item => ({
            value: item[budgetTypeModelConfig.idField], 
            label: templateApplyValues(budgetTypeTemplate, item),
          })),
          onSearch: (value) => budgetTypeSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: budgetTypeArrayIsLoading ? '' : undefined,
          onScrollToEnd: budgetTypeNextPageAction,
          isLoading: budgetTypeArrayIsLoading,
          missingValueResolver: value => 
            budgetTypeEntities.getById(value)[budgetTypeModelConfig.idField],
          multi: false,
          clearable: false,
        }}
      />
      <ModalComponents.ModalSelect
        {...{
          fieldName: 'contactPersons',
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
          multi: true,
          clearable: true,
        }}
      />
      <ModalComponents.ModalInput
        {...{
          fieldName: 'description',
          type: INPUT_TYPES.multi,
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <ModalComponents.ModalInput
        {...{
          fieldName: 'amount',
          type: INPUT_TYPES.float,
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
      <ModalComponents.ModalInput
        {...{
          fieldName: 'totalBillAmount',
          type: INPUT_TYPES.float,
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <ModalComponents.ModalDateTimePicker
        {...{
          fieldName: 'startDate',
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
          fieldName: 'endDate',
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