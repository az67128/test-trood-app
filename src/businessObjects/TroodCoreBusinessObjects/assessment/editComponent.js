import React from 'react'
import style from './editComponent.css'
import modalsStyle from '$trood/styles/modals.css'
import classNames from 'classnames'

import TInput, { INPUT_TYPES } from '$trood/components/TInput'
import TSelect, { SELECT_TYPES } from '$trood/components/TSelect'
import { RESTIFY_CONFIG } from 'redux-restify'
import DateTimePicker, { PICKER_TYPES } from '$trood/components/DateTimePicker'
import TCheckbox from '$trood/components/TCheckbox'

const EditComponent = ({
  model,
  modelErrors,
  modelFormActions,
  employeeEntities,
  employeeApiActions,
  teamMemberEntities,
  teamMemberApiActions, 
}) => {
      const [employeeSearch, employeeSearchSet] = React.useState('')
      const employeeModelConfig = RESTIFY_CONFIG.registeredModels['employee']
      const employeeApiConfig = {
        filter: {
          q: employeeSearch ? `eq(${employeeModelConfig.idField},${employeeSearch})` : '',
          depth: 1,
        },
      }
      const employeeArray = employeeEntities.getArray(employeeApiConfig)
      const employeeArrayIsLoading = employeeEntities.getIsLoadingArray(employeeApiConfig)
      const employeeNextPage = employeeEntities.getNextPage(employeeApiConfig)
      const employeeNextPageAction = () => {
        if (employeeNextPage) {
          employeeApiActions.loadNextPage(employeeApiConfig)
        }
      }
      
      const [teamMemberSearch, teamMemberSearchSet] = React.useState('')
      const teamMemberModelConfig = RESTIFY_CONFIG.registeredModels['teamMember']
      const teamMemberApiConfig = {
        filter: {
          q: teamMemberSearch ? `eq(${teamMemberModelConfig.idField},${teamMemberSearch})` : '',
          depth: 1,
        },
      }
      const teamMemberArray = teamMemberEntities.getArray(teamMemberApiConfig)
      const teamMemberArrayIsLoading = teamMemberEntities.getIsLoadingArray(teamMemberApiConfig)
      const teamMemberNextPage = teamMemberEntities.getNextPage(teamMemberApiConfig)
      const teamMemberNextPageAction = () => {
        if (teamMemberNextPage) {
          teamMemberApiActions.loadNextPage(teamMemberApiConfig)
        }
      }
      
  return (
    <div {...{className: classNames(style.root, modalsStyle.root)}}>
      <TInput
          {...{
          type: INPUT_TYPES.float,
          label: 'rating',
          className: modalsStyle.control,
          value: model.rating,
          errors: modelErrors.rating,
          onChange: val => modelFormActions.changeField('rating', val),
          onValid: () => modelFormActions.resetFieldError('rating'),
          onInvalid: err => modelFormActions.setFieldError('rating', err),
          validate: {
            checkOnBlur: true,
            required: true,
          },
        }}
      />
<TSelect
        {...{
          
          
        className: modalsStyle.control,
        items: employeeArray.map(item => ({ value: item[employeeModelConfig.idField], label: item.name || item[employeeModelConfig.idField] })),
        values: model.rewiewer ? [model.rewiewer] : [],
        onChange: vals => modelFormActions.changeField('rewiewer',
          vals[0],
        ),
        onSearch: (value) => employeeSearchSet(value ? encodeURIComponent(value) : ''),
        emptyItemsLabel: employeeArrayIsLoading ? '' : undefined,
        onScrollToEnd: employeeNextPageAction,
        isLoading: employeeArrayIsLoading,
        missingValueResolver: value => employeeEntities.getById(value).name,
          label: 'rewiewer',
          errors: modelErrors.rewiewer,
          onValid: () => modelFormActions.resetFieldError('rewiewer'),
          onInvalid: err => modelFormActions.setFieldError('rewiewer', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: true,
          placeHolder: 'Not set',
          
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
            required: true,
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
      <TCheckbox
            {...{
            className: modalsStyle.control,
            label: 'isMin',
          className: modalsStyle.control,
          value: model.isMin,
          errors: modelErrors.isMin,
          onChange: val => modelFormActions.changeField('isMin', val),
          onValid: () => modelFormActions.resetFieldError('isMin'),
          onInvalid: err => modelFormActions.setFieldError('isMin', err),
            validate: {
              checkOnBlur: true,
              required: false,
            },
          }}
        />
      <TCheckbox
            {...{
            className: modalsStyle.control,
            label: 'isMax',
          className: modalsStyle.control,
          value: model.isMax,
          errors: modelErrors.isMax,
          onChange: val => modelFormActions.changeField('isMax', val),
          onValid: () => modelFormActions.resetFieldError('isMax'),
          onInvalid: err => modelFormActions.setFieldError('isMax', err),
            validate: {
              checkOnBlur: true,
              required: false,
            },
          }}
        />
<TSelect
        {...{
          
          
        className: modalsStyle.control,
        items: teamMemberArray.map(item => ({ value: item[teamMemberModelConfig.idField], label: item.name || item[teamMemberModelConfig.idField] })),
        values: model.teamMember ? [model.teamMember] : [],
        onChange: vals => modelFormActions.changeField('teamMember',
          vals[0],
        ),
        onSearch: (value) => teamMemberSearchSet(value ? encodeURIComponent(value) : ''),
        emptyItemsLabel: teamMemberArrayIsLoading ? '' : undefined,
        onScrollToEnd: teamMemberNextPageAction,
        isLoading: teamMemberArrayIsLoading,
        missingValueResolver: value => teamMemberEntities.getById(value).name,
          label: 'teamMember',
          errors: modelErrors.teamMember,
          onValid: () => modelFormActions.resetFieldError('teamMember'),
          onInvalid: err => modelFormActions.setFieldError('teamMember', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: true,
          placeHolder: 'Not set',
          
        }}
      />
    </div>
  )
}
export default EditComponent