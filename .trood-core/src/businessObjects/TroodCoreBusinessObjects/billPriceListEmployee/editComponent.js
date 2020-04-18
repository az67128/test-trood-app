import React, { useState } from 'react'
import style from './editComponent.css'
import modalsStyle from '$trood/styles/modals.css'
import classNames from 'classnames'
import { RESTIFY_CONFIG } from 'redux-restify'
import { templateApplyValues } from '$trood/helpers/templates'


const EditComponent = ({
  employeeApiActions,
  employeeEntities,
  billPriceListApiActions,
  billPriceListEntities,
  ModalComponents, 
}) => {
  const [billPriceListSearch, billPriceListSearchSet] = useState('')
  const billPriceListModelConfig = RESTIFY_CONFIG.registeredModels.billPriceList
  const billPriceListTemplate = billPriceListModelConfig.views.selectOption ||
    billPriceListModelConfig.views.default ||
    `billPriceList/{${billPriceListModelConfig.idField}}`
  const billPriceListApiConfig = {
    filter: {
      q: billPriceListSearch 
        ? `eq(${billPriceListModelConfig.idField},${billPriceListSearch})`
        : '',
      depth: 1,
    },
  }
  const billPriceListArray = billPriceListEntities.getArray(billPriceListApiConfig)
  const billPriceListArrayIsLoading = billPriceListEntities.getIsLoadingArray(
    billPriceListApiConfig,
  )
  const billPriceListNextPage = billPriceListEntities.getNextPage(billPriceListApiConfig)
  const billPriceListNextPageAction = () => {
    if (billPriceListNextPage) {
      billPriceListApiActions.loadNextPage(billPriceListApiConfig)
    }
  }
      
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
      
  return (
    <div className={classNames(style.root, modalsStyle.root)}>
      <ModalComponents.ModalSelect
        {...{
          fieldName: 'billPriceList',
          items: billPriceListArray.map(item => ({
            value: item[billPriceListModelConfig.idField], 
            label: templateApplyValues(billPriceListTemplate, item),
          })),
          onSearch: (value) => billPriceListSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: billPriceListArrayIsLoading ? '' : undefined,
          onScrollToEnd: billPriceListNextPageAction,
          isLoading: billPriceListArrayIsLoading,
          missingValueResolver: value => 
            billPriceListEntities.getById(value)[billPriceListModelConfig.idField],
          multi: false,
          clearable: false,
        }}
      />
      <ModalComponents.ModalSelect
        {...{
          fieldName: 'employee',
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
    </div>
  )
}

export default EditComponent