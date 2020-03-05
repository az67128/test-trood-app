import React from 'react'
import style from './editComponent.css'
import modalsStyle from '$trood/styles/modals.css'
import classNames from 'classnames'
import TInput, { INPUT_TYPES } from '$trood/components/TInput'
import TSelect, { SELECT_TYPES } from '$trood/components/TSelect'
import { RESTIFY_CONFIG } from 'redux-restify'
import DateTimePicker, { PICKER_TYPES } from '$trood/components/DateTimePicker'


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
            label: 'companyCode',
            className: modalsStyle.control,
            value: model.companyCode,
            errors: modelErrors.companyCode,
            onChange: val => modelFormActions.changeField('companyCode', val),
            onValid: () => modelFormActions.resetFieldError('companyCode'),
            onInvalid: err => modelFormActions.setFieldError('companyCode', err),
            validate: {
              checkOnBlur: true,
              required: false,
            },
          }}
      />
      <TInput
          {...{
            type: INPUT_TYPES.multi,
            label: 'name',
            className: modalsStyle.control,
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
          clearable: true,
          placeHolder: 'Not set',
        }}
      />
      <DateTimePicker
            {...{
              label: 'created',
            className: modalsStyle.control,
            value: model.created,
            errors: modelErrors.created,
            onChange: val => modelFormActions.changeField('created', val),
            onValid: () => modelFormActions.resetFieldError('created'),
            onInvalid: err => modelFormActions.setFieldError('created', err),
              type: PICKER_TYPES.dateTime,
              validate: {
                checkOnBlur: true,
                requiredDate: false,
                requiredTime: false,
            },
          }}
        />
      <TInput
          {...{
            type: INPUT_TYPES.multi,
            label: 'urAdress',
            className: modalsStyle.control,
            value: model.urAdress,
            errors: modelErrors.urAdress,
            onChange: val => modelFormActions.changeField('urAdress', val),
            onValid: () => modelFormActions.resetFieldError('urAdress'),
            onInvalid: err => modelFormActions.setFieldError('urAdress', err),
            validate: {
              checkOnBlur: true,
              required: false,
            },
          }}
      />
      <TInput
          {...{
            type: INPUT_TYPES.multi,
            label: 'details',
            className: modalsStyle.control,
            value: model.details,
            errors: modelErrors.details,
            onChange: val => modelFormActions.changeField('details', val),
            onValid: () => modelFormActions.resetFieldError('details'),
            onInvalid: err => modelFormActions.setFieldError('details', err),
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