import React, { useState } from 'react'
import style from './editComponent.css'
import modalsStyle from '$trood/styles/modals.css'
import classNames from 'classnames'
import { RESTIFY_CONFIG } from 'redux-restify'
import { templateApplyValues } from '$trood/helpers/templates'


const EditComponent = ({
  invitationListApiActions,
  invitationListEntities,
  employeeApiActions,
  employeeEntities,
  ModalComponents, 
}) => {
  const [employeeSearch, employeeSearchSet] = useState('')
  const employeeModelConfig = RESTIFY_CONFIG.registeredModels.employee
  const employeeTemplate = employeeModelConfig.views.selectOption ||
    employeeModelConfig.views.default ||
    `employee/{${employeeModelConfig.idField}}`
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
  const invitationListTemplate = invitationListModelConfig.views.selectOption ||
    invitationListModelConfig.views.default ||
    `invitationList/{${invitationListModelConfig.idField}}`
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
      <ModalComponents.ModalSelect
        {...{
          fieldName: 'employee',
          items: employeeArray.map(item => ({
            value: item[employeeModelConfig.idField], 
            label: templateApplyValues(employeeTemplate, item),
          })),
          onSearch: (value) => employeeSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: employeeArrayIsLoading ? '' : undefined,
          onScrollToEnd: employeeNextPageAction,
          isLoading: employeeArrayIsLoading,
          missingValueResolver: value => 
            employeeEntities.getById(value)[employeeModelConfig.idField],
          multi: false,
          clearable: false,
        }}
      />
      <ModalComponents.ModalSelect
        {...{
          fieldName: 'invitationList',
          items: invitationListArray.map(item => ({
            value: item[invitationListModelConfig.idField], 
            label: templateApplyValues(invitationListTemplate, item),
          })),
          onSearch: (value) => invitationListSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: invitationListArrayIsLoading ? '' : undefined,
          onScrollToEnd: invitationListNextPageAction,
          isLoading: invitationListArrayIsLoading,
          missingValueResolver: value => 
            invitationListEntities.getById(value)[invitationListModelConfig.idField],
          multi: false,
          clearable: true,
        }}
      />
    </div>
  )
}

export default EditComponent