import React from 'react'
import TInput, { INPUT_TYPES } from '$trood/components/TInput'
import TSelect, { SELECT_TYPES } from '$trood/components/TSelect'
import { getNestedObjectField } from '$trood/helpers/nestedObjects'

const EditComponent = ({
  model,
  modelErrors,
  modelFormActions,
  priceUnitEntities,
  priceUnitApiActions,
  employeeEntities,
  employeeApiActions,
  utbmsEntities,
  utbmsApiActions,
  serviceTypeEntities,
  serviceTypeApiActions, 
}) => {
      const [priceUnitSearch, priceUnitSearchSet] = React.useState('')
      const priceUnitApiConfig = {
        filter: {
          q: priceUnitSearch ? 'like(name,*' + priceUnitSearch + ')' : '',
          depth: 1,
        },
      }
      const priceUnitArray = priceUnitEntities.getArray(priceUnitApiConfig)
      const priceUnitArrayIsLoading = priceUnitEntities.getIsLoadingArray(priceUnitApiConfig)
      const priceUnitNextPage = priceUnitEntities.getNextPage(priceUnitApiConfig)
      const priceUnitNextPageAction = () => {
        if (priceUnitNextPage) {
          priceUnitApiActions.loadNextPage(priceUnitApiConfig)
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
      
      const [utbmsSearch, utbmsSearchSet] = React.useState('')
      const utbmsApiConfig = {
        filter: {
          q: utbmsSearch ? 'like(name,*' + utbmsSearch + ')' : '',
          depth: 1,
        },
      }
      const utbmsArray = utbmsEntities.getArray(utbmsApiConfig)
      const utbmsArrayIsLoading = utbmsEntities.getIsLoadingArray(utbmsApiConfig)
      const utbmsNextPage = utbmsEntities.getNextPage(utbmsApiConfig)
      const utbmsNextPageAction = () => {
        if (utbmsNextPage) {
          utbmsApiActions.loadNextPage(utbmsApiConfig)
        }
      }
      
      const [serviceTypeSearch, serviceTypeSearchSet] = React.useState('')
      const serviceTypeApiConfig = {
        filter: {
          q: serviceTypeSearch ? 'like(name,*' + serviceTypeSearch + ')' : '',
          depth: 1,
        },
      }
      const serviceTypeArray = serviceTypeEntities.getArray(serviceTypeApiConfig)
      const serviceTypeArrayIsLoading = serviceTypeEntities.getIsLoadingArray(serviceTypeApiConfig)
      const serviceTypeNextPage = serviceTypeEntities.getNextPage(serviceTypeApiConfig)
      const serviceTypeNextPageAction = () => {
        if (serviceTypeNextPage) {
          serviceTypeApiActions.loadNextPage(serviceTypeApiConfig)
        }
      }
      
  return (
    <React.Fragment>
      <TInput
          {...{
          type: INPUT_TYPES.float,
          label: 'number',
          placeholder: 'Not chosen',
          value: model.number,
          errors: modelErrors.number,
          onChange: val => modelFormActions.changeField('number', val),
          onValid: () => modelFormActions.resetFieldError('number'),
          onInvalid: err => modelFormActions.setFieldError('number', err),
          validate: {
            checkOnBlur: true,
            required: true,
          },
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'name',
          placeholder: 'Not chosen',
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
          label: 'priceUnit',
          items: priceUnitArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.priceUnit && [model.priceUnit],
          onChange: values => modelFormActions.changeField('priceUnit', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('priceUnit', errs),
          onValid: () => modelFormActions.resetFieldError('priceUnit'),
          errors: getNestedObjectField(modelErrors, 'priceUnit'),
          validate: {
            required: true,
            checkOnBlur: true,
          },
          onSearch: (value) => priceUnitSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: priceUnitArrayIsLoading ? '' : undefined,
          onScrollToEnd: priceUnitNextPageAction,
          missingValueResolver: value => priceUnitEntities.getById(value).name,
          isLoading: priceUnitArrayIsLoading,
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.float,
          label: 'amount',
          placeholder: 'Not chosen',
          value: model.amount,
          errors: modelErrors.amount,
          onChange: val => modelFormActions.changeField('amount', val),
          onValid: () => modelFormActions.resetFieldError('amount'),
          onInvalid: err => modelFormActions.setFieldError('amount', err),
          validate: {
            checkOnBlur: true,
            required: true,
          },
        }}
      />
      <TSelect
        {...{
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
          onSearch: (value) => employeeSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: employeeArrayIsLoading ? '' : undefined,
          onScrollToEnd: employeeNextPageAction,
          missingValueResolver: value => employeeEntities.getById(value).name,
          isLoading: employeeArrayIsLoading,
        }}
      />
      <TSelect
        {...{
          label: 'utbms',
          items: utbmsArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.utbms && [model.utbms],
          onChange: values => modelFormActions.changeField('utbms', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('utbms', errs),
          onValid: () => modelFormActions.resetFieldError('utbms'),
          errors: getNestedObjectField(modelErrors, 'utbms'),
          validate: {
            required: false,
            checkOnBlur: true,
          },
          onSearch: (value) => utbmsSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: utbmsArrayIsLoading ? '' : undefined,
          onScrollToEnd: utbmsNextPageAction,
          missingValueResolver: value => utbmsEntities.getById(value).name,
          isLoading: utbmsArrayIsLoading,
        }}
      />
      <TSelect
        {...{
          label: 'serviceType',
          items: serviceTypeArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.serviceType && [model.serviceType],
          onChange: values => modelFormActions.changeField('serviceType', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('serviceType', errs),
          onValid: () => modelFormActions.resetFieldError('serviceType'),
          errors: getNestedObjectField(modelErrors, 'serviceType'),
          validate: {
            required: false,
            checkOnBlur: true,
          },
          onSearch: (value) => serviceTypeSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: serviceTypeArrayIsLoading ? '' : undefined,
          onScrollToEnd: serviceTypeNextPageAction,
          missingValueResolver: value => serviceTypeEntities.getById(value).name,
          isLoading: serviceTypeArrayIsLoading,
        }}
      />
    </React.Fragment>
  )
}
export default EditComponent