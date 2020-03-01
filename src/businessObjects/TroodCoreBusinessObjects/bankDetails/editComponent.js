import React from 'react'
import TInput, { INPUT_TYPES } from '$trood/components/TInput'
import TSelect, { SELECT_TYPES } from '$trood/components/TSelect'
import { getNestedObjectField } from '$trood/helpers/nestedObjects'

const EditComponent = ({
  model,
  modelErrors,
  modelFormActions,
  requisitesEntities,
  requisitesApiActions, 
}) => {
      const [requisitesSearch, requisitesSearchSet] = React.useState('')
      const requisitesApiConfig = {
        filter: {
          q: requisitesSearch ? 'like(name,*' + requisitesSearch + ')' : '',
          depth: 1,
        },
      }
      const requisitesArray = requisitesEntities.getArray(requisitesApiConfig)
      const requisitesArrayIsLoading = requisitesEntities.getIsLoadingArray(requisitesApiConfig)
      const requisitesNextPage = requisitesEntities.getNextPage(requisitesApiConfig)
      const requisitesNextPageAction = () => {
        if (requisitesNextPage) {
          requisitesApiActions.loadNextPage(requisitesApiConfig)
        }
      }
      
  return (
    <React.Fragment>
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'bankName',
          placeholder: 'Not chosen',
          value: model.bankName,
          errors: modelErrors.bankName,
          onChange: val => modelFormActions.changeField('bankName', val),
          onValid: () => modelFormActions.resetFieldError('bankName'),
          onInvalid: err => modelFormActions.setFieldError('bankName', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'bankAddress',
          placeholder: 'Not chosen',
          value: model.bankAddress,
          errors: modelErrors.bankAddress,
          onChange: val => modelFormActions.changeField('bankAddress', val),
          onValid: () => modelFormActions.resetFieldError('bankAddress'),
          onInvalid: err => modelFormActions.setFieldError('bankAddress', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'bik',
          placeholder: 'Not chosen',
          value: model.bik,
          errors: modelErrors.bik,
          onChange: val => modelFormActions.changeField('bik', val),
          onValid: () => modelFormActions.resetFieldError('bik'),
          onInvalid: err => modelFormActions.setFieldError('bik', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'ks',
          placeholder: 'Not chosen',
          value: model.ks,
          errors: modelErrors.ks,
          onChange: val => modelFormActions.changeField('ks', val),
          onValid: () => modelFormActions.resetFieldError('ks'),
          onInvalid: err => modelFormActions.setFieldError('ks', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'rs',
          placeholder: 'Not chosen',
          value: model.rs,
          errors: modelErrors.rs,
          onChange: val => modelFormActions.changeField('rs', val),
          onValid: () => modelFormActions.resetFieldError('rs'),
          onInvalid: err => modelFormActions.setFieldError('rs', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TSelect
        {...{
          label: 'requisites',
          items: requisitesArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.requisites && [model.requisites],
          onChange: values => modelFormActions.changeField('requisites', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('requisites', errs),
          onValid: () => modelFormActions.resetFieldError('requisites'),
          errors: getNestedObjectField(modelErrors, 'requisites'),
          validate: {
            required: false,
            checkOnBlur: true,
          },
          onSearch: (value) => requisitesSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: requisitesArrayIsLoading ? '' : undefined,
          onScrollToEnd: requisitesNextPageAction,
          missingValueResolver: value => requisitesEntities.getById(value).name,
          isLoading: requisitesArrayIsLoading,
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
          label: 'swift',
          placeholder: 'Not chosen',
          value: model.swift,
          errors: modelErrors.swift,
          onChange: val => modelFormActions.changeField('swift', val),
          onValid: () => modelFormActions.resetFieldError('swift'),
          onInvalid: err => modelFormActions.setFieldError('swift', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'iban',
          placeholder: 'Not chosen',
          value: model.iban,
          errors: modelErrors.iban,
          onChange: val => modelFormActions.changeField('iban', val),
          onValid: () => modelFormActions.resetFieldError('iban'),
          onInvalid: err => modelFormActions.setFieldError('iban', err),
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