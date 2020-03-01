import React from 'react'
import TInput, { INPUT_TYPES } from '$trood/components/TInput'
import TSelect, { SELECT_TYPES } from '$trood/components/TSelect'
import { getNestedObjectField } from '$trood/helpers/nestedObjects'
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
      const employeeApiConfig = {
        filter: {
          q: employeeSearch ? 'like(name,*' + employeeSearch + ')' : '',
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
      const teamMemberApiConfig = {
        filter: {
          q: teamMemberSearch ? 'like(name,*' + teamMemberSearch + ')' : '',
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
    <React.Fragment>
      <TInput
          {...{
          type: INPUT_TYPES.float,
          label: 'rating',
          placeholder: 'Not chosen',
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
          label: 'rewiewer',
          items: employeeArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.rewiewer && [model.rewiewer],
          onChange: values => modelFormActions.changeField('rewiewer', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('rewiewer', errs),
          onValid: () => modelFormActions.resetFieldError('rewiewer'),
          errors: getNestedObjectField(modelErrors, 'rewiewer'),
          validate: {
            required: true,
            checkOnBlur: true,
          },
          onSearch: (value) => employeeSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: employeeArrayIsLoading ? '' : undefined,
          onScrollToEnd: employeeNextPageAction,
          missingValueResolver: value => employeeEntities.getById(value).name,
          isLoading: employeeArrayIsLoading,
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'details',
          placeholder: 'Not chosen',
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
      <TCheckbox
            {...{
            label: 'isMin',
          placeholder: 'Not chosen',
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
            label: 'isMax',
          placeholder: 'Not chosen',
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
          label: 'teamMember',
          items: teamMemberArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.teamMember && [model.teamMember],
          onChange: values => modelFormActions.changeField('teamMember', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('teamMember', errs),
          onValid: () => modelFormActions.resetFieldError('teamMember'),
          errors: getNestedObjectField(modelErrors, 'teamMember'),
          validate: {
            required: true,
            checkOnBlur: true,
          },
          onSearch: (value) => teamMemberSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: teamMemberArrayIsLoading ? '' : undefined,
          onScrollToEnd: teamMemberNextPageAction,
          missingValueResolver: value => teamMemberEntities.getById(value).name,
          isLoading: teamMemberArrayIsLoading,
        }}
      />
    </React.Fragment>
  )
}
export default EditComponent