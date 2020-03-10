import React, { useState } from 'react'
import style from './editComponent.css'
import modalsStyle from '$trood/styles/modals.css'
import classNames from 'classnames'
import TInput, { INPUT_TYPES } from '$trood/components/TInput'
import TSelect, { SELECT_TYPES } from '$trood/components/TSelect'
import { RESTIFY_CONFIG } from 'redux-restify'
import DateTimePicker, { PICKER_TYPES } from '$trood/components/DateTimePicker'


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
  modelFormActions,
  modelErrors,
  model, 
}) => {
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
      
  const [matterTypeSearch, matterTypeSearchSet] = useState('')
  const matterTypeModelConfig = RESTIFY_CONFIG.registeredModels.matterType
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
      <TInput
          {...{
            type: INPUT_TYPES.multi,
            label: 'code',
            className: modalsStyle.control,
            value: model.code,
            errors: modelErrors.code,
            onChange: val => modelFormActions.changeField('code', val),
            onValid: () => modelFormActions.resetFieldError('code'),
            onInvalid: err => modelFormActions.setFieldError('code', err),
            validate: {
              checkOnBlur: true,
              required: false,
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
          items: employeeArray.map(item => ({
            value: item[employeeModelConfig.idField], 
            label: item.name || item[employeeModelConfig.idField],
          })),
          values: model.responsible 
            ? [model.responsible] 
            : [],
          onChange: vals => modelFormActions.changeField('responsible',
            vals[0],
          ),
          onSearch: (value) => employeeSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: employeeArrayIsLoading ? '' : undefined,
          onScrollToEnd: employeeNextPageAction,
          isLoading: employeeArrayIsLoading,
          missingValueResolver: value => employeeEntities.getById(value)['responsible'],
          label: 'responsible',
          errors: modelErrors.responsible,
          onValid: () => modelFormActions.resetFieldError('responsible'),
          onInvalid: err => modelFormActions.setFieldError('responsible', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: true,
          placeHolder: 'Not set',
        }}
      />
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
          items: matterTypeArray.map(item => ({
            value: item[matterTypeModelConfig.idField], 
            label: item.name || item[matterTypeModelConfig.idField],
          })),
          values: model.matterType 
            ? [model.matterType] 
            : [],
          onChange: vals => modelFormActions.changeField('matterType',
            vals[0],
          ),
          onSearch: (value) => matterTypeSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: matterTypeArrayIsLoading ? '' : undefined,
          onScrollToEnd: matterTypeNextPageAction,
          isLoading: matterTypeArrayIsLoading,
          missingValueResolver: value => matterTypeEntities.getById(value)['matterType'],
          label: 'matterType',
          errors: modelErrors.matterType,
          onValid: () => modelFormActions.resetFieldError('matterType'),
          onInvalid: err => modelFormActions.setFieldError('matterType', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: true,
          placeHolder: 'Not set',
        }}
      />
      <TSelect
        {...{
          className: modalsStyle.control,
          items: matterStatusArray.map(item => ({
            value: item[matterStatusModelConfig.idField], 
            label: item.name || item[matterStatusModelConfig.idField],
          })),
          values: model.matterStatus 
            ? [model.matterStatus] 
            : [],
          onChange: vals => modelFormActions.changeField('matterStatus',
            vals[0],
          ),
          onSearch: (value) => matterStatusSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: matterStatusArrayIsLoading ? '' : undefined,
          onScrollToEnd: matterStatusNextPageAction,
          isLoading: matterStatusArrayIsLoading,
          missingValueResolver: value => matterStatusEntities.getById(value)['matterStatus'],
          label: 'matterStatus',
          errors: modelErrors.matterStatus,
          onValid: () => modelFormActions.resetFieldError('matterStatus'),
          onInvalid: err => modelFormActions.setFieldError('matterStatus', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: true,
          placeHolder: 'Not set',
        }}
      />
      <TSelect
        {...{
          className: modalsStyle.control,
          items: matterActiveStatusArray.map(item => ({
            value: item[matterActiveStatusModelConfig.idField], 
            label: item.name || item[matterActiveStatusModelConfig.idField],
          })),
          values: model.matterActiveStatus 
            ? [model.matterActiveStatus] 
            : [],
          onChange: vals => modelFormActions.changeField('matterActiveStatus',
            vals[0],
          ),
          onSearch: (value) => matterActiveStatusSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: matterActiveStatusArrayIsLoading ? '' : undefined,
          onScrollToEnd: matterActiveStatusNextPageAction,
          isLoading: matterActiveStatusArrayIsLoading,
          missingValueResolver: value => matterActiveStatusEntities.getById(value)['matterActiveStatus'],
          label: 'matterActiveStatus',
          errors: modelErrors.matterActiveStatus,
          onValid: () => modelFormActions.resetFieldError('matterActiveStatus'),
          onInvalid: err => modelFormActions.setFieldError('matterActiveStatus', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: true,
          placeHolder: 'Not set',
        }}
      />
      <TSelect
        {...{
          className: modalsStyle.control,
          items: budgetTypeArray.map(item => ({
            value: item[budgetTypeModelConfig.idField], 
            label: item.name || item[budgetTypeModelConfig.idField],
          })),
          values: model.budgetType 
            ? [model.budgetType] 
            : [],
          onChange: vals => modelFormActions.changeField('budgetType',
            vals[0],
          ),
          onSearch: (value) => budgetTypeSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: budgetTypeArrayIsLoading ? '' : undefined,
          onScrollToEnd: budgetTypeNextPageAction,
          isLoading: budgetTypeArrayIsLoading,
          missingValueResolver: value => budgetTypeEntities.getById(value)['budgetType'],
          label: 'budgetType',
          errors: modelErrors.budgetType,
          onValid: () => modelFormActions.resetFieldError('budgetType'),
          onInvalid: err => modelFormActions.setFieldError('budgetType', err),
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
          values: model.contactPersons,
          onChange: vals => modelFormActions.changeField('contactPersons',
            vals,
          ),
          onSearch: (value) => contactPersonSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: contactPersonArrayIsLoading ? '' : undefined,
          onScrollToEnd: contactPersonNextPageAction,
          isLoading: contactPersonArrayIsLoading,
          missingValueResolver: value => contactPersonEntities.getById(value)['contactPersons'],
          label: 'contactPersons',
          errors: modelErrors.contactPersons,
          onValid: () => modelFormActions.resetFieldError('contactPersons'),
          onInvalid: err => modelFormActions.setFieldError('contactPersons', err),
          type: SELECT_TYPES.filterDropdown,
          multi: true,
          clearable: false,
          placeHolder: 'Not set',
        }}
      />
      <TInput
          {...{
            type: INPUT_TYPES.multi,
            label: 'description',
            className: modalsStyle.control,
            value: model.description,
            errors: modelErrors.description,
            onChange: val => modelFormActions.changeField('description', val),
            onValid: () => modelFormActions.resetFieldError('description'),
            onInvalid: err => modelFormActions.setFieldError('description', err),
            validate: {
              checkOnBlur: true,
              required: false,
            },
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
              required: false,
            },
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
      <TInput
          {...{
            type: INPUT_TYPES.float,
            label: 'totalBillAmount',
            className: modalsStyle.control,
            value: model.totalBillAmount,
            errors: modelErrors.totalBillAmount,
            onChange: val => modelFormActions.changeField('totalBillAmount', val),
            onValid: () => modelFormActions.resetFieldError('totalBillAmount'),
            onInvalid: err => modelFormActions.setFieldError('totalBillAmount', err),
            validate: {
              checkOnBlur: true,
              required: false,
            },
          }}
      />
      <DateTimePicker
          {...{
            label: 'startDate',
            className: modalsStyle.control,
            value: model.startDate,
            errors: modelErrors.startDate,
            onChange: val => modelFormActions.changeField('startDate', val),
            onValid: () => modelFormActions.resetFieldError('startDate'),
            onInvalid: err => modelFormActions.setFieldError('startDate', err),
            type: PICKER_TYPES.dateTime,
            validate: {
              checkOnBlur: true,
              requiredDate: false,
              requiredTime: false,

          },
        }}
      />
      <DateTimePicker
          {...{
            label: 'endDate',
            className: modalsStyle.control,
            value: model.endDate,
            errors: modelErrors.endDate,
            onChange: val => modelFormActions.changeField('endDate', val),
            onValid: () => modelFormActions.resetFieldError('endDate'),
            onInvalid: err => modelFormActions.setFieldError('endDate', err),
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