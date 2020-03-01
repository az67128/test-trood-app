import React from 'react'
import TSelect, { SELECT_TYPES } from '$trood/components/TSelect'
import { getNestedObjectField } from '$trood/helpers/nestedObjects'
import TInput, { INPUT_TYPES } from '$trood/components/TInput'

const EditComponent = ({
  model,
  modelErrors,
  modelFormActions,
  clientEntities,
  clientApiActions,
  employeePositionEntities,
  employeePositionApiActions, 
}) => {
      const [clientSearch, clientSearchSet] = React.useState('')
      const clientApiConfig = {
        filter: {
          q: clientSearch ? 'like(name,*' + clientSearch + ')' : '',
          depth: 1,
        },
      }
      const clientArray = clientEntities.getArray(clientApiConfig)
      const clientArrayIsLoading = clientEntities.getIsLoadingArray(clientApiConfig)
      const clientNextPage = clientEntities.getNextPage(clientApiConfig)
      const clientNextPageAction = () => {
        if (clientNextPage) {
          clientApiActions.loadNextPage(clientApiConfig)
        }
      }
      
      const [employeePositionSearch, employeePositionSearchSet] = React.useState('')
      const employeePositionApiConfig = {
        filter: {
          q: employeePositionSearch ? 'like(name,*' + employeePositionSearch + ')' : '',
          depth: 1,
        },
      }
      const employeePositionArray = employeePositionEntities.getArray(employeePositionApiConfig)
      const employeePositionArrayIsLoading = employeePositionEntities.getIsLoadingArray(employeePositionApiConfig)
      const employeePositionNextPage = employeePositionEntities.getNextPage(employeePositionApiConfig)
      const employeePositionNextPageAction = () => {
        if (employeePositionNextPage) {
          employeePositionApiActions.loadNextPage(employeePositionApiConfig)
        }
      }
      
  return (
    <React.Fragment>
      <TSelect
        {...{
          label: 'client',
          items: clientArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.client && [model.client],
          onChange: values => modelFormActions.changeField('client', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('client', errs),
          onValid: () => modelFormActions.resetFieldError('client'),
          errors: getNestedObjectField(modelErrors, 'client'),
          validate: {
            required: true,
            checkOnBlur: true,
          },
          onSearch: (value) => clientSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: clientArrayIsLoading ? '' : undefined,
          onScrollToEnd: clientNextPageAction,
          missingValueResolver: value => clientEntities.getById(value).name,
          isLoading: clientArrayIsLoading,
        }}
      />
      <TSelect
        {...{
          label: 'employeePosition',
          items: employeePositionArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.employeePosition && [model.employeePosition],
          onChange: values => modelFormActions.changeField('employeePosition', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('employeePosition', errs),
          onValid: () => modelFormActions.resetFieldError('employeePosition'),
          errors: getNestedObjectField(modelErrors, 'employeePosition'),
          validate: {
            required: true,
            checkOnBlur: true,
          },
          onSearch: (value) => employeePositionSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: employeePositionArrayIsLoading ? '' : undefined,
          onScrollToEnd: employeePositionNextPageAction,
          missingValueResolver: value => employeePositionEntities.getById(value).name,
          isLoading: employeePositionArrayIsLoading,
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.float,
          label: 'rate',
          placeholder: 'Not chosen',
          value: model.rate,
          errors: modelErrors.rate,
          onChange: val => modelFormActions.changeField('rate', val),
          onValid: () => modelFormActions.resetFieldError('rate'),
          onInvalid: err => modelFormActions.setFieldError('rate', err),
          validate: {
            checkOnBlur: true,
            required: true,
          },
        }}
      />
    </React.Fragment>
  )
}
export default EditComponent