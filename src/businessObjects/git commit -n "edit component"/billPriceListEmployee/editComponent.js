import React from 'react'
import style from './editComponent.css'
import modalsStyle from '$trood/styles/modals.css'
import classNames from 'classnames'
import TSelect, { SELECT_TYPES } from '$trood/components/TSelect'
import { RESTIFY_CONFIG } from 'redux-restify'


const EditComponent = ({
  employeeApiActions,
  employeeEntities,
  billPriceListApiActions,
  billPriceListEntities,
  modelFormActions,
  modelErrors,
  model, 
}) => {
  const [billPriceListSearch, billPriceListSearchSet] = React.useState('')
  const billPriceListModelConfig = RESTIFY_CONFIG.registeredModels.billPriceList
  const billPriceListApiConfig = {
    filter: {
      q: billPriceListSearch ? `eq(${billPriceListModelConfig.idField},${billPriceListSearch})` : '',
      depth: 1,
    },
  }
  const billPriceListArray = billPriceListEntities.getArray(billPriceListApiConfig)
  const billPriceListArrayIsLoading = billPriceListEntities.getIsLoadingArray(billPriceListApiConfig)
  const billPriceListNextPage = billPriceListEntities.getNextPage(billPriceListApiConfig)
  const billPriceListNextPageAction = () => {
    if (billPriceListNextPage) {
      billPriceListApiActions.loadNextPage(billPriceListApiConfig)
    }
  }
      
  const [employeeSearch, employeeSearchSet] = React.useState('')
  const employeeModelConfig = RESTIFY_CONFIG.registeredModels.employee
  const employeeApiConfig = {
    filter: {
      q: employeeSearch ? `eq(${employeeModelConfig.idField},${employeeSearch})` : '',
      depth: 1,
    },
  }
  const employeeArray = employeeEntities.getArray(employeeApiConfig)
  const employeeArrayIsLoading = employeeEntities.getIsLoadingArray(employeeApiConfig)
  const employeeNextPage = employeeEntities.getNextPage(employeeApiConfig)
  const employeeNextPageAction = () => {
    if (employeeNextPage) {
      employeeApiActions.loadNextPage(employeeApiConfig)
    }
  }
      
  return (
    <div {...{className: classNames(style.root, modalsStyle.root)}}>
      <TSelect
        {...{
          className: modalsStyle.control,
          items: billPriceListArray.map(item => ({
            value: item[billPriceListModelConfig.idField], 
            label: item.name || item[billPriceListModelConfig.idField],
          })),
          values: model.billPriceList 
            ? [model.billPriceList] 
            : [],
          onChange: vals => modelFormActions.changeField('billPriceList',
            vals[0],
          ),
          onSearch: (value) => billPriceListSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: billPriceListArrayIsLoading ? '' : undefined,
          onScrollToEnd: billPriceListNextPageAction,
          isLoading: billPriceListArrayIsLoading,
          missingValueResolver: value => billPriceListEntities.getById(value)['billPriceList'],
          label: 'billPriceList',
          errors: modelErrors.billPriceList,
          onValid: () => modelFormActions.resetFieldError('billPriceList'),
          onInvalid: err => modelFormActions.setFieldError('billPriceList', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: true,
          placeHolder: 'Not set',
        }}
      />
      <TSelect
        {...{
          className: modalsStyle.control,
          items: employeeArray.map(item => ({
            value: item[employeeModelConfig.idField], 
            label: item.name || item[employeeModelConfig.idField],
          })),
          values: model.employee 
            ? [model.employee] 
            : [],
          onChange: vals => modelFormActions.changeField('employee',
            vals[0],
          ),
          onSearch: (value) => employeeSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: employeeArrayIsLoading ? '' : undefined,
          onScrollToEnd: employeeNextPageAction,
          isLoading: employeeArrayIsLoading,
          missingValueResolver: value => employeeEntities.getById(value)['employee'],
          label: 'employee',
          errors: modelErrors.employee,
          onValid: () => modelFormActions.resetFieldError('employee'),
          onInvalid: err => modelFormActions.setFieldError('employee', err),
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