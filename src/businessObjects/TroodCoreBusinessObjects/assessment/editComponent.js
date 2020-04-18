import React, { useState } from 'react'
import style from './editComponent.css'
import modalsStyle from '$trood/styles/modals.css'
import classNames from 'classnames'
import { INPUT_TYPES } from '$trood/components/TInput'
import { RESTIFY_CONFIG } from 'redux-restify'
import { templateApplyValues } from '$trood/helpers/templates'
import { PICKER_TYPES } from '$trood/components/DateTimePicker'


const EditComponent = ({
  teamMemberApiActions,
  teamMemberEntities,
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
      
  const [teamMemberSearch, teamMemberSearchSet] = useState('')
  const teamMemberModelConfig = RESTIFY_CONFIG.registeredModels.teamMember
  const teamMemberTemplate = teamMemberModelConfig.views.selectOption ||
    teamMemberModelConfig.views.default ||
    `teamMember/{${teamMemberModelConfig.idField}}`
  const teamMemberApiConfig = {
    filter: {
      q: teamMemberSearch 
        ? `eq(${teamMemberModelConfig.idField},${teamMemberSearch})`
        : '',
      depth: 1,
    },
  }
  const teamMemberArray = teamMemberEntities.getArray(teamMemberApiConfig)
  const teamMemberArrayIsLoading = teamMemberEntities.getIsLoadingArray(
    teamMemberApiConfig,
  )
  const teamMemberNextPage = teamMemberEntities.getNextPage(teamMemberApiConfig)
  const teamMemberNextPageAction = () => {
    if (teamMemberNextPage) {
      teamMemberApiActions.loadNextPage(teamMemberApiConfig)
    }
  }
      
  return (
    <div className={classNames(style.root, modalsStyle.root)}>
      <ModalComponents.ModalInput
        {...{
          fieldName: 'rating',
          type: INPUT_TYPES.float,
          validate: {
            checkOnBlur: true,
            required: true,
          },
        }}
      />
      <ModalComponents.ModalSelect
        {...{
          fieldName: 'rewiewer',
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
      <ModalComponents.ModalInput
        {...{
          fieldName: 'details',
          type: INPUT_TYPES.multi,
          validate: {
            checkOnBlur: true,
            required: true,
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
      <ModalComponents.ModalCheckbox
          {...{
            fieldName: 'isMin',
            validate: {
              checkOnBlur: true,
              required: false,
            },
          }}
        />
      <ModalComponents.ModalCheckbox
          {...{
            fieldName: 'isMax',
            validate: {
              checkOnBlur: true,
              required: false,
            },
          }}
        />
      <ModalComponents.ModalSelect
        {...{
          fieldName: 'teamMember',
          items: teamMemberArray.map(item => ({
            value: item[teamMemberModelConfig.idField], 
            label: templateApplyValues(teamMemberTemplate, item),
          })),
          onSearch: (value) => teamMemberSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: teamMemberArrayIsLoading ? '' : undefined,
          onScrollToEnd: teamMemberNextPageAction,
          isLoading: teamMemberArrayIsLoading,
          missingValueResolver: value => 
            teamMemberEntities.getById(value)[teamMemberModelConfig.idField],
          multi: false,
          clearable: false,
        }}
      />
    </div>
  )
}

export default EditComponent