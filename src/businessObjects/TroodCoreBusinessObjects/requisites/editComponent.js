import React from 'react'
import style from './editComponent.css'
import modalsStyle from '$trood/styles/modals.css'
import classNames from 'classnames'
import TInput, { INPUT_TYPES } from '$trood/components/TInput'
import TSelect, { SELECT_TYPES } from '$trood/components/TSelect'
import { RESTIFY_CONFIG } from 'redux-restify'


const EditComponent = ({
  clientApiActions,
  clientEntities,
  modelFormActions,
  modelErrors,
  model, 
}) => {
  const [clientSearch, clientSearchSet] = React.useState('')
  const clientModelConfig = RESTIFY_CONFIG.registeredModels.client
  const clientApiConfig = {
    filter: {
      q: clientSearch ? `eq(${clientModelConfig.idField},${clientSearch})` : '',
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
    <div className={classNames(style.root, modalsStyle.root)}>
      <TInput
          {...{
            type: INPUT_TYPES.multi,
            label: 'legalName',
            className: modalsStyle.control,
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
            label: 'legalAddress',
            className: modalsStyle.control,
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
            className: modalsStyle.control,
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
            label: 'director',
            className: modalsStyle.control,
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
            className: modalsStyle.control,
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
          className: modalsStyle.control,
          items: clientArray.map(item => ({
            value: item[clientModelConfig.idField], 
            label: item.name || item[clientModelConfig.idField],
          })),
          values: model.client 
            ? [model.client] 
            : [],
          onChange: vals => modelFormActions.changeField('client',
            vals[0],
          ),
          onSearch: (value) => clientSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: clientArrayIsLoading ? '' : undefined,
          onScrollToEnd: clientNextPageAction,
          isLoading: clientArrayIsLoading,
          missingValueResolver: value => clientEntities.getById(value)['client'],
          label: 'client',
          errors: modelErrors.client,
          onValid: () => modelFormActions.resetFieldError('client'),
          onInvalid: err => modelFormActions.setFieldError('client', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: false,
          placeHolder: 'Not set',
        }}
      />
    </div>
  )
}
export default EditComponent