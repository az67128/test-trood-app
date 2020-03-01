import React from 'react'
import TInput, { INPUT_TYPES } from '$trood/components/TInput'
import TSelect, { SELECT_TYPES } from '$trood/components/TSelect'
import { getNestedObjectField } from '$trood/helpers/nestedObjects'

const EditComponent = ({
  model,
  modelErrors,
  modelFormActions,
  clientEntities,
  clientApiActions, 
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
      
  return (
    <React.Fragment>
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'legalName',
          placeholder: 'Not chosen',
          value: model.legalName,
          errors: modelErrors.legalName,
          onChange: val => modelFormActions.changeField('legalName', val),
          onValid: () => modelFormActions.resetFieldError('legalName'),
          onInvalid: err => modelFormActions.setFieldError('legalName', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'inn',
          placeholder: 'Not chosen',
          value: model.inn,
          errors: modelErrors.inn,
          onChange: val => modelFormActions.changeField('inn', val),
          onValid: () => modelFormActions.resetFieldError('inn'),
          onInvalid: err => modelFormActions.setFieldError('inn', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'legalAddress',
          placeholder: 'Not chosen',
          value: model.legalAddress,
          errors: modelErrors.legalAddress,
          onChange: val => modelFormActions.changeField('legalAddress', val),
          onValid: () => modelFormActions.resetFieldError('legalAddress'),
          onInvalid: err => modelFormActions.setFieldError('legalAddress', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'ogrn',
          placeholder: 'Not chosen',
          value: model.ogrn,
          errors: modelErrors.ogrn,
          onChange: val => modelFormActions.changeField('ogrn', val),
          onValid: () => modelFormActions.resetFieldError('ogrn'),
          onInvalid: err => modelFormActions.setFieldError('ogrn', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'kpp',
          placeholder: 'Not chosen',
          value: model.kpp,
          errors: modelErrors.kpp,
          onChange: val => modelFormActions.changeField('kpp', val),
          onValid: () => modelFormActions.resetFieldError('kpp'),
          onInvalid: err => modelFormActions.setFieldError('kpp', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'director',
          placeholder: 'Not chosen',
          value: model.director,
          errors: modelErrors.director,
          onChange: val => modelFormActions.changeField('director', val),
          onValid: () => modelFormActions.resetFieldError('director'),
          onInvalid: err => modelFormActions.setFieldError('director', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'accaunter',
          placeholder: 'Not chosen',
          value: model.accaunter,
          errors: modelErrors.accaunter,
          onChange: val => modelFormActions.changeField('accaunter', val),
          onValid: () => modelFormActions.resetFieldError('accaunter'),
          onInvalid: err => modelFormActions.setFieldError('accaunter', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
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
            required: false,
            checkOnBlur: true,
          },
          onSearch: (value) => clientSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: clientArrayIsLoading ? '' : undefined,
          onScrollToEnd: clientNextPageAction,
          missingValueResolver: value => clientEntities.getById(value).name,
          isLoading: clientArrayIsLoading,
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'bankDetailsSet',
          placeholder: 'Not chosen',
          value: model.bankDetailsSet,
          errors: modelErrors.bankDetailsSet,
          onChange: val => modelFormActions.changeField('bankDetailsSet', val),
          onValid: () => modelFormActions.resetFieldError('bankDetailsSet'),
          onInvalid: err => modelFormActions.setFieldError('bankDetailsSet', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
    </React.Fragment>
  )
}
export default EditComponent