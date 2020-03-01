import React from 'react'
import TSelect, { SELECT_TYPES } from '$trood/components/TSelect'
import { getNestedObjectField } from '$trood/helpers/nestedObjects'

const EditComponent = ({
  model,
  modelErrors,
  modelFormActions,
  employeeEntities,
  employeeApiActions,
  invitationListEntities,
  invitationListApiActions, 
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
      
      const [invitationListSearch, invitationListSearchSet] = React.useState('')
      const invitationListApiConfig = {
        filter: {
          q: invitationListSearch ? 'like(name,*' + invitationListSearch + ')' : '',
          depth: 1,
        },
      }
      const invitationListArray = invitationListEntities.getArray(invitationListApiConfig)
      const invitationListArrayIsLoading = invitationListEntities.getIsLoadingArray(invitationListApiConfig)
      const invitationListNextPage = invitationListEntities.getNextPage(invitationListApiConfig)
      const invitationListNextPageAction = () => {
        if (invitationListNextPage) {
          invitationListApiActions.loadNextPage(invitationListApiConfig)
        }
      }
      
  return (
    <React.Fragment>
      <TSelect
        {...{
          label: 'employee',
          items: employeeArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.employee && [model.employee],
          onChange: values => modelFormActions.changeField('employee', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('employee', errs),
          onValid: () => modelFormActions.resetFieldError('employee'),
          errors: getNestedObjectField(modelErrors, 'employee'),
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
      <TSelect
        {...{
          label: 'invitationList',
          items: invitationListArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.invitationList && [model.invitationList],
          onChange: values => modelFormActions.changeField('invitationList', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('invitationList', errs),
          onValid: () => modelFormActions.resetFieldError('invitationList'),
          errors: getNestedObjectField(modelErrors, 'invitationList'),
          validate: {
            required: false,
            checkOnBlur: true,
          },
          onSearch: (value) => invitationListSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: invitationListArrayIsLoading ? '' : undefined,
          onScrollToEnd: invitationListNextPageAction,
          missingValueResolver: value => invitationListEntities.getById(value).name,
          isLoading: invitationListArrayIsLoading,
        }}
      />
    </React.Fragment>
  )
}
export default EditComponent