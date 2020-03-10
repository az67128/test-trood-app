import React, { useState } from 'react'
import style from './editComponent.css'
import modalsStyle from '$trood/styles/modals.css'
import classNames from 'classnames'
import TInput, { INPUT_TYPES } from '$trood/components/TInput'
import TSelect, { SELECT_TYPES } from '$trood/components/TSelect'
import { RESTIFY_CONFIG } from 'redux-restify'
import TCheckbox from '$trood/components/TCheckbox'
import DateTimePicker, { PICKER_TYPES } from '$trood/components/DateTimePicker'


const EditComponent = ({
  employeeRoleApiActions,
  employeeRoleEntities,
  employeePositionApiActions,
  employeePositionEntities,
  modelFormActions,
  modelErrors,
  model, 
}) => {
  const [employeePositionSearch, employeePositionSearchSet] = useState('')
  const employeePositionModelConfig = RESTIFY_CONFIG.registeredModels.employeePosition
  const employeePositionApiConfig = {
    filter: {
      q: employeePositionSearch 
        ? `eq(${employeePositionModelConfig.idField},${employeePositionSearch})`
        : '',
      depth: 1,
    },
  }
  const employeePositionArray = employeePositionEntities.getArray(employeePositionApiConfig)
  const employeePositionArrayIsLoading = employeePositionEntities.getIsLoadingArray(
    employeePositionApiConfig,
  )
  const employeePositionNextPage = employeePositionEntities.getNextPage(employeePositionApiConfig)
  const employeePositionNextPageAction = () => {
    if (employeePositionNextPage) {
      employeePositionApiActions.loadNextPage(employeePositionApiConfig)
    }
  }
      
  const [employeeRoleSearch, employeeRoleSearchSet] = useState('')
  const employeeRoleModelConfig = RESTIFY_CONFIG.registeredModels.employeeRole
  const employeeRoleApiConfig = {
    filter: {
      q: employeeRoleSearch 
        ? `eq(${employeeRoleModelConfig.idField},${employeeRoleSearch})`
        : '',
      depth: 1,
    },
  }
  const employeeRoleArray = employeeRoleEntities.getArray(employeeRoleApiConfig)
  const employeeRoleArrayIsLoading = employeeRoleEntities.getIsLoadingArray(
    employeeRoleApiConfig,
  )
  const employeeRoleNextPage = employeeRoleEntities.getNextPage(employeeRoleApiConfig)
  const employeeRoleNextPageAction = () => {
    if (employeeRoleNextPage) {
      employeeRoleApiActions.loadNextPage(employeeRoleApiConfig)
    }
  }
      
  return (
    <div className={classNames(style.root, modalsStyle.root)}>
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
          items: employeePositionArray.map(item => ({
            value: item[employeePositionModelConfig.idField], 
            label: item.name || item[employeePositionModelConfig.idField],
          })),
          values: model.position 
            ? [model.position] 
            : [],
          onChange: vals => modelFormActions.changeField('position',
            vals[0],
          ),
          onSearch: (value) => employeePositionSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: employeePositionArrayIsLoading ? '' : undefined,
          onScrollToEnd: employeePositionNextPageAction,
          isLoading: employeePositionArrayIsLoading,
          missingValueResolver: value => employeePositionEntities.getById(value)['position'],
          label: 'position',
          errors: modelErrors.position,
          onValid: () => modelFormActions.resetFieldError('position'),
          onInvalid: err => modelFormActions.setFieldError('position', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: true,
          placeHolder: 'Not set',
        }}
      />
      <TSelect
        {...{
          className: modalsStyle.control,
          items: employeeRoleArray.map(item => ({
            value: item[employeeRoleModelConfig.idField], 
            label: item.name || item[employeeRoleModelConfig.idField],
          })),
          values: model.role 
            ? [model.role] 
            : [],
          onChange: vals => modelFormActions.changeField('role',
            vals[0],
          ),
          onSearch: (value) => employeeRoleSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: employeeRoleArrayIsLoading ? '' : undefined,
          onScrollToEnd: employeeRoleNextPageAction,
          isLoading: employeeRoleArrayIsLoading,
          missingValueResolver: value => employeeRoleEntities.getById(value)['role'],
          label: 'role',
          errors: modelErrors.role,
          onValid: () => modelFormActions.resetFieldError('role'),
          onInvalid: err => modelFormActions.setFieldError('role', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: true,
          placeHolder: 'Not set',
        }}
      />
      <TInput
          {...{
            type: INPUT_TYPES.multi,
            label: 'email',
            className: modalsStyle.control,
            value: model.email,
            errors: modelErrors.email,
            onChange: val => modelFormActions.changeField('email', val),
            onValid: () => modelFormActions.resetFieldError('email'),
            onInvalid: err => modelFormActions.setFieldError('email', err),
            validate: {
              checkOnBlur: true,
              required: true,
            },
          }}
      />
      <TInput
          {...{
            type: INPUT_TYPES.float,
            label: 'rate',
            className: modalsStyle.control,
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
      <TInput
          {...{
            type: INPUT_TYPES.float,
            label: 'account',
            className: modalsStyle.control,
            value: model.account,
            errors: modelErrors.account,
            onChange: val => modelFormActions.changeField('account', val),
            onValid: () => modelFormActions.resetFieldError('account'),
            onInvalid: err => modelFormActions.setFieldError('account', err),
            validate: {
              checkOnBlur: true,
              required: false,
            },
          }}
      />
      <TCheckbox
          {...{
            label: 'active',
            className: modalsStyle.control,
            value: model.active,
            errors: modelErrors.active,
            onChange: val => modelFormActions.changeField('active', val),
            onValid: () => modelFormActions.resetFieldError('active'),
            onInvalid: err => modelFormActions.setFieldError('active', err),
            validate: {
              checkOnBlur: true,
              required: false,
            },
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
            label: 'avatar',
            className: modalsStyle.control,
            value: model.avatar,
            errors: modelErrors.avatar,
            onChange: val => modelFormActions.changeField('avatar', val),
            onValid: () => modelFormActions.resetFieldError('avatar'),
            onInvalid: err => modelFormActions.setFieldError('avatar', err),
            validate: {
              checkOnBlur: true,
              required: false,
            },
          }}
      />
      <TInput
          {...{
            type: INPUT_TYPES.multi,
            label: 'phone',
            className: modalsStyle.control,
            value: model.phone,
            errors: modelErrors.phone,
            onChange: val => modelFormActions.changeField('phone', val),
            onValid: () => modelFormActions.resetFieldError('phone'),
            onInvalid: err => modelFormActions.setFieldError('phone', err),
            validate: {
              checkOnBlur: true,
              required: false,
            },
          }}
      />
      <TInput
          {...{
            type: INPUT_TYPES.float,
            label: 'totalRating',
            className: modalsStyle.control,
            value: model.totalRating,
            errors: modelErrors.totalRating,
            onChange: val => modelFormActions.changeField('totalRating', val),
            onValid: () => modelFormActions.resetFieldError('totalRating'),
            onInvalid: err => modelFormActions.setFieldError('totalRating', err),
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