import React, { useState } from 'react'
import style from './editComponent.css'
import modalsStyle from '$trood/styles/modals.css'
import classNames from 'classnames'
import TSelect, { SELECT_TYPES } from '$trood/components/TSelect'
import { RESTIFY_CONFIG } from 'redux-restify'


const EditComponent = ({
  invitationListApiActions,
  invitationListEntities,
  employeeApiActions,
  employeeEntities,
  modelFormActions,
  modelErrors,
  model, 
}) => {
  const [employeeSearch, employeeSearchSet] = useState('')
  const employeeModelConfig = RESTIFY_CONFIG.registeredModels.employee
  const employeeApiConfig = {
    filter: {
      q: employeeSearch 
        ? `eq(${employeeModelConfig.idField},${employeeSearch})`
        : '',
      depth: 1,
    },
  }
  const employeeArray = employeeEntities.getArray(employeeApiConfig)
  const employeeArrayIsLoading = employeeEntities.getIsLoadingArray(
    employeeApiConfig,
  )
  const employeeNextPage = employeeEntities.getNextPage(employeeApiConfig)
  const employeeNextPageAction = () => {
    if (employeeNextPage) {
      employeeApiActions.loadNextPage(employeeApiConfig)
    }
  }
      
  const [invitationListSearch, invitationListSearchSet] = useState('')
  const invitationListModelConfig = RESTIFY_CONFIG.registeredModels.invitationList
  const invitationListApiConfig = {
    filter: {
      q: invitationListSearch 
        ? `eq(${invitationListModelConfig.idField},${invitationListSearch})`
        : '',
      depth: 1,
    },
  }
  const invitationListArray = invitationListEntities.getArray(invitationListApiConfig)
  const invitationListArrayIsLoading = invitationListEntities.getIsLoadingArray(
    invitationListApiConfig,
  )
  const invitationListNextPage = invitationListEntities.getNextPage(invitationListApiConfig)
  const invitationListNextPageAction = () => {
    if (invitationListNextPage) {
      invitationListApiActions.loadNextPage(invitationListApiConfig)
    }
  }
      
  return (
    <div className={classNames(style.root, modalsStyle.root)}>
      <TSelect
        {...{
          className: modalsStyle.control,
          items: employeeArray.map(item => ({
            value: item[employeeModelConfig.idField], 
            label: item.name || item[employeeModelConfig.idField],
          })),
          values: model.employee 
            ? [model.employee] 
            : [],
          onChange: vals => modelFormActions.changeField('employee',
            vals[0],
          ),
          onSearch: (value) => employeeSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: employeeArrayIsLoading ? '' : undefined,
          onScrollToEnd: employeeNextPageAction,
          isLoading: employeeArrayIsLoading,
          missingValueResolver: value => 
            employeeEntities.getById(value)[employeeModelConfig.idField],
          label: 'employee',
          errors: modelErrors.employee,
          onValid: () => modelFormActions.resetFieldError('employee'),
          onInvalid: err => modelFormActions.setFieldError('employee', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: true,
          placeHolder: 'Not set',
        }}
      />
      <TSelect
        {...{
          className: modalsStyle.control,
          items: invitationListArray.map(item => ({
            value: item[invitationListModelConfig.idField], 
            label: item.name || item[invitationListModelConfig.idField],
          })),
          values: model.invitationList 
            ? [model.invitationList] 
            : [],
          onChange: vals => modelFormActions.changeField('invitationList',
            vals[0],
          ),
          onSearch: (value) => invitationListSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: invitationListArrayIsLoading ? '' : undefined,
          onScrollToEnd: invitationListNextPageAction,
          isLoading: invitationListArrayIsLoading,
          missingValueResolver: value => 
            invitationListEntities.getById(value)[invitationListModelConfig.idField],
          label: 'invitationList',
          errors: modelErrors.invitationList,
          onValid: () => modelFormActions.resetFieldError('invitationList'),
          onInvalid: err => modelFormActions.setFieldError('invitationList', err),
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