import React from 'react'
import TInput, { INPUT_TYPES } from '$trood/components/TInput'
import TSelect, { SELECT_TYPES } from '$trood/components/TSelect'
import { getNestedObjectField } from '$trood/helpers/nestedObjects'

const EditComponent = ({ model, modelErrors, modelFormActions, employeeEntities, employeeApiActions }) => {
  const currentEmployeeSearch = ''
  const employeeApiConfig = {
    filter: {
      q: currentEmployeeSearch ? `eq(active,true()),like(name,*${currentEmployeeSearch}*)` : 'eq(active,true())',
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
      <TInput
          {...{
          label: 'id',
          placeholder: 'Not chosen',
          type: INPUT_TYPES.float,
          value: model.id,
          errors: modelErrors.id,
          onChange: val => modelFormActions.changeField('id', val),
          onValid: () => modelFormActions.resetFieldError('id'),
          onInvalid: err => modelFormActions.setFieldError('id', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />

<TSelect {...{
          label: 'author',
          items: employeeArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          
          placeholder: 'Not chosen',
          values: model.author && [model.author],
          onChange: values => modelFormActions.changeField('author', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('author', errs),
          onValid: () => modelFormActions.resetFieldError('author'),
          errors: getNestedObjectField(modelErrors, 'author'),
          validate: {
            required: true,
            checkOnBlur: true,
          },
        
          // onSearch: (value) => this.setState({ currentEmployeeSearch: value && encodeURIComponent(value) }),
          emptyItemsLabel: employeeArrayIsLoading ? '' : undefined,
          onScrollToEnd: employeeNextPageAction,
          missingValueResolver: (value) => employeeEntities.getById(value).name,
          isLoading: employeeArrayIsLoading,
        }} />



      <TInput
          {...{
          label: 'sumPayment',
          placeholder: 'Not chosen',
          type: INPUT_TYPES.float,
          value: model.sumPayment,
          errors: modelErrors.sumPayment,
          onChange: val => modelFormActions.changeField('sumPayment', val),
          onValid: () => modelFormActions.resetFieldError('sumPayment'),
          onInvalid: err => modelFormActions.setFieldError('sumPayment', err),
          validate: {
            checkOnBlur: true,
            required: true,
          },
        }}
      />
client-object
number-string
created-datetime
payment_date-datetime
matter-object
bill-object
    </React.Fragment>
  )
}
export default EditComponent