import React from 'react'
import style from './editComponent.css'
import modalsStyle from '$trood/styles/modals.css'
import classNames from 'classnames'
import TInput, { INPUT_TYPES } from '$trood/components/TInput'
import TSelect, { SELECT_TYPES } from '$trood/components/TSelect'
import { RESTIFY_CONFIG } from 'redux-restify'


const EditComponent = ({
  requisitesApiActions,
  requisitesEntities,
  modelFormActions,
  modelErrors,
  model, 
}) => {
  const [requisitesSearch, requisitesSearchSet] = React.useState('')
  const requisitesModelConfig = RESTIFY_CONFIG.registeredModels.requisites
  const requisitesApiConfig = {
    filter: {
      q: requisitesSearch 
        ? `eq(${requisitesModelConfig.idField},${requisitesSearch})`
        : '',
      depth: 1,
    },
  }
  const requisitesArray = requisitesEntities.getArray(requisitesApiConfig)
  const requisitesArrayIsLoading = requisitesEntities.getIsLoadingArray(
    requisitesApiConfig,
  )
  const requisitesNextPage = requisitesEntities.getNextPage(requisitesApiConfig)
  const requisitesNextPageAction = () => {
    if (requisitesNextPage) {
      requisitesApiActions.loadNextPage(requisitesApiConfig)
    }
  }
      
  return (
    <div className={classNames(style.root, modalsStyle.root)}>
      <TInput
          {...{
            type: INPUT_TYPES.multi,
            label: 'bankName',
            className: modalsStyle.control,
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
            className: modalsStyle.control,
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
            className: modalsStyle.control,
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
            className: modalsStyle.control,
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
            className: modalsStyle.control,
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
          className: modalsStyle.control,
          items: requisitesArray.map(item => ({
            value: item[requisitesModelConfig.idField], 
            label: item.name || item[requisitesModelConfig.idField],
          })),
          values: model.requisites 
            ? [model.requisites] 
            : [],
          onChange: vals => modelFormActions.changeField('requisites',
            vals[0],
          ),
          onSearch: (value) => requisitesSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: requisitesArrayIsLoading ? '' : undefined,
          onScrollToEnd: requisitesNextPageAction,
          isLoading: requisitesArrayIsLoading,
          missingValueResolver: value => requisitesEntities.getById(value)['requisites'],
          label: 'requisites',
          errors: modelErrors.requisites,
          onValid: () => modelFormActions.resetFieldError('requisites'),
          onInvalid: err => modelFormActions.setFieldError('requisites', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: false,
          placeHolder: 'Not set',
        }}
      />
      <TInput
          {...{
            type: INPUT_TYPES.multi,
            label: 'inn',
            className: modalsStyle.control,
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
            className: modalsStyle.control,
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
            className: modalsStyle.control,
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
            className: modalsStyle.control,
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
    </div>
  )
}
export default EditComponent