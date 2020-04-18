import React, { useState } from 'react'
import style from './editComponent.css'
import modalsStyle from '$trood/styles/modals.css'
import classNames from 'classnames'
import { RESTIFY_CONFIG } from 'redux-restify'
import { templateApplyValues } from '$trood/helpers/templates'
import { INPUT_TYPES } from '$trood/components/TInput'
import { PICKER_TYPES } from '$trood/components/DateTimePicker'


const EditComponent = ({
  matterApiActions,
  matterEntities,
  billApiActions,
  billEntities,
  expenseTypeApiActions,
  expenseTypeEntities,
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
      
  const [expenseTypeSearch, expenseTypeSearchSet] = useState('')
  const expenseTypeModelConfig = RESTIFY_CONFIG.registeredModels.expenseType
  const expenseTypeTemplate = expenseTypeModelConfig.views.selectOption ||
    expenseTypeModelConfig.views.default ||
    `expenseType/{${expenseTypeModelConfig.idField}}`
  const expenseTypeApiConfig = {
    filter: {
      q: expenseTypeSearch 
        ? `eq(${expenseTypeModelConfig.idField},${expenseTypeSearch})`
        : '',
      depth: 1,
    },
  }
  const expenseTypeArray = expenseTypeEntities.getArray(expenseTypeApiConfig)
  const expenseTypeArrayIsLoading = expenseTypeEntities.getIsLoadingArray(
    expenseTypeApiConfig,
  )
  const expenseTypeNextPage = expenseTypeEntities.getNextPage(expenseTypeApiConfig)
  const expenseTypeNextPageAction = () => {
    if (expenseTypeNextPage) {
      expenseTypeApiActions.loadNextPage(expenseTypeApiConfig)
    }
  }
      
  const [billSearch, billSearchSet] = useState('')
  const billModelConfig = RESTIFY_CONFIG.registeredModels.bill
  const billTemplate = billModelConfig.views.selectOption ||
    billModelConfig.views.default ||
    `bill/{${billModelConfig.idField}}`
  const billApiConfig = {
    filter: {
      q: billSearch 
        ? `eq(${billModelConfig.idField},${billSearch})`
        : '',
      depth: 1,
    },
  }
  const billArray = billEntities.getArray(billApiConfig)
  const billArrayIsLoading = billEntities.getIsLoadingArray(
    billApiConfig,
  )
  const billNextPage = billEntities.getNextPage(billApiConfig)
  const billNextPageAction = () => {
    if (billNextPage) {
      billApiActions.loadNextPage(billApiConfig)
    }
  }
      
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
      
  return (
    <div className={classNames(style.root, modalsStyle.root)}>
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
          fieldName: 'expenseType',
          items: expenseTypeArray.map(item => ({
            value: item[expenseTypeModelConfig.idField], 
            label: templateApplyValues(expenseTypeTemplate, item),
          })),
          onSearch: (value) => expenseTypeSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: expenseTypeArrayIsLoading ? '' : undefined,
          onScrollToEnd: expenseTypeNextPageAction,
          isLoading: expenseTypeArrayIsLoading,
          missingValueResolver: value => 
            expenseTypeEntities.getById(value)[expenseTypeModelConfig.idField],
          multi: false,
          clearable: true,
        }}
      />
      <ModalComponents.ModalCheckbox
          {...{
            fieldName: 'billiable',
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
      <ModalComponents.ModalSelect
        {...{
          fieldName: 'bill',
          items: billArray.map(item => ({
            value: item[billModelConfig.idField], 
            label: templateApplyValues(billTemplate, item),
          })),
          onSearch: (value) => billSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: billArrayIsLoading ? '' : undefined,
          onScrollToEnd: billNextPageAction,
          isLoading: billArrayIsLoading,
          missingValueResolver: value => 
            billEntities.getById(value)[billModelConfig.idField],
          multi: false,
          clearable: true,
        }}
      />
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
          clearable: true,
        }}
      />
      <ModalComponents.ModalDateTimePicker
        {...{
          fieldName: 'expenseDate',
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