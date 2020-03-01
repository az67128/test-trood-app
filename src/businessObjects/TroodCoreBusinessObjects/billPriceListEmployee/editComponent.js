import React from 'react'
import TSelect, { SELECT_TYPES } from '$trood/components/TSelect'
import { getNestedObjectField } from '$trood/helpers/nestedObjects'

const EditComponent = ({
  model,
  modelErrors,
  modelFormActions,
  billPriceListEntities,
  billPriceListApiActions,
  employeeEntities,
  employeeApiActions, 
}) => {
      const [billPriceListSearch, billPriceListSearchSet] = React.useState('')
      const billPriceListApiConfig = {
        filter: {
          q: billPriceListSearch ? 'like(name,*' + billPriceListSearch + ')' : '',
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
      const employeeApiConfig = {
        filter: {
          q: employeeSearch ? 'like(name,*' + employeeSearch + ')' : '',
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
    <React.Fragment>
      <TSelect
        {...{
          label: 'billPriceList',
          items: billPriceListArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.billPriceList && [model.billPriceList],
          onChange: values => modelFormActions.changeField('billPriceList', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('billPriceList', errs),
          onValid: () => modelFormActions.resetFieldError('billPriceList'),
          errors: getNestedObjectField(modelErrors, 'billPriceList'),
          validate: {
            required: true,
            checkOnBlur: true,
          },
          onSearch: (value) => billPriceListSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: billPriceListArrayIsLoading ? '' : undefined,
          onScrollToEnd: billPriceListNextPageAction,
          missingValueResolver: value => billPriceListEntities.getById(value).name,
          isLoading: billPriceListArrayIsLoading,
        }}
      />
      <TSelect
        {...{
          label: 'employee',
          items: employeeArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.employee && [model.employee],
          onChange: values => modelFormActions.changeField('employee', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('employee', errs),
          onValid: () => modelFormActions.resetFieldError('employee'),
          errors: getNestedObjectField(modelErrors, 'employee'),
          validate: {
            required: true,
            checkOnBlur: true,
          },
          onSearch: (value) => employeeSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: employeeArrayIsLoading ? '' : undefined,
          onScrollToEnd: employeeNextPageAction,
          missingValueResolver: value => employeeEntities.getById(value).name,
          isLoading: employeeArrayIsLoading,
        }}
      />
    </React.Fragment>
  )
}
export default EditComponent