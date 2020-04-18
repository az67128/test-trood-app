import React, { useState } from 'react'
import style from './editComponent.css'
import modalsStyle from '$trood/styles/modals.css'
import classNames from 'classnames'
import { INPUT_TYPES } from '$trood/components/TInput'
import { RESTIFY_CONFIG } from 'redux-restify'
import { templateApplyValues } from '$trood/helpers/templates'
import { PICKER_TYPES } from '$trood/components/DateTimePicker'


const EditComponent = ({
  employeeRoleApiActions,
  employeeRoleEntities,
  employeePositionApiActions,
  employeePositionEntities,
  ModalComponents, 
}) => {
  const [employeePositionSearch, employeePositionSearchSet] = useState('')
  const employeePositionModelConfig = RESTIFY_CONFIG.registeredModels.employeePosition
  const employeePositionTemplate = employeePositionModelConfig.views.selectOption ||
    employeePositionModelConfig.views.default ||
    `employeePosition/{${employeePositionModelConfig.idField}}`
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
  const employeeRoleTemplate = employeeRoleModelConfig.views.selectOption ||
    employeeRoleModelConfig.views.default ||
    `employeeRole/{${employeeRoleModelConfig.idField}}`
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
      <ModalComponents.ModalInput
        {...{
          fieldName: 'name',
          type: INPUT_TYPES.multi,
          validate: {
            checkOnBlur: true,
            required: true,
          },
        }}
      />
      <ModalComponents.ModalSelect
        {...{
          fieldName: 'position',
          items: employeePositionArray.map(item => ({
            value: item[employeePositionModelConfig.idField], 
            label: templateApplyValues(employeePositionTemplate, item),
          })),
          onSearch: (value) => employeePositionSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: employeePositionArrayIsLoading ? '' : undefined,
          onScrollToEnd: employeePositionNextPageAction,
          isLoading: employeePositionArrayIsLoading,
          missingValueResolver: value => 
            employeePositionEntities.getById(value)[employeePositionModelConfig.idField],
          multi: false,
          clearable: false,
        }}
      />
      <ModalComponents.ModalSelect
        {...{
          fieldName: 'role',
          items: employeeRoleArray.map(item => ({
            value: item[employeeRoleModelConfig.idField], 
            label: templateApplyValues(employeeRoleTemplate, item),
          })),
          onSearch: (value) => employeeRoleSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: employeeRoleArrayIsLoading ? '' : undefined,
          onScrollToEnd: employeeRoleNextPageAction,
          isLoading: employeeRoleArrayIsLoading,
          missingValueResolver: value => 
            employeeRoleEntities.getById(value)[employeeRoleModelConfig.idField],
          multi: false,
          clearable: false,
        }}
      />
      <ModalComponents.ModalInput
        {...{
          fieldName: 'email',
          type: INPUT_TYPES.multi,
          validate: {
            checkOnBlur: true,
            required: true,
          },
        }}
      />
      <ModalComponents.ModalInput
        {...{
          fieldName: 'rate',
          type: INPUT_TYPES.float,
          validate: {
            checkOnBlur: true,
            required: true,
          },
        }}
      />
      <ModalComponents.ModalInput
        {...{
          fieldName: 'account',
          type: INPUT_TYPES.float,
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <ModalComponents.ModalCheckbox
          {...{
            fieldName: 'active',
            validate: {
              checkOnBlur: true,
              required: false,
            },
          }}
        />
      <ModalComponents.ModalDateTimePicker
        {...{
          fieldName: 'created',
          type: PICKER_TYPES.dateTime,
          validate: {
            checkOnBlur: true,
            requiredDate: false,
            requiredTime: false,
          },
        }}
      />
      <ModalComponents.ModalInput
        {...{
          fieldName: 'avatar',
          type: INPUT_TYPES.multi,
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <ModalComponents.ModalInput
        {...{
          fieldName: 'phone',
          type: INPUT_TYPES.multi,
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <ModalComponents.ModalInput
        {...{
          fieldName: 'totalRating',
          type: INPUT_TYPES.float,
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