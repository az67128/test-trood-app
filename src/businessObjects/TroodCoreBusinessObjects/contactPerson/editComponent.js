import React from 'react'
import TInput, { INPUT_TYPES } from '$trood/components/TInput'
import TSelect, { SELECT_TYPES } from '$trood/components/TSelect'
import { getNestedObjectField } from '$trood/helpers/nestedObjects'

const EditComponent = ({
  model,
  modelErrors,
  modelFormActions,
  clientEntities,
  clientApiActions,
  contactEntities,
  contactApiActions, 
}) => {
      const [clientSearch, clientSearchSet] = React.useState('')
      const clientApiConfig = {
        filter: {
          q: clientSearch ? 'like(name,*' + clientSearch + ')' : '',
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
      
      const [contactSearch, contactSearchSet] = React.useState('')
      const contactApiConfig = {
        filter: {
          q: contactSearch ? 'like(name,*' + contactSearch + ')' : '',
          depth: 1,
        },
      }
      const contactArray = contactEntities.getArray(contactApiConfig)
      const contactArrayIsLoading = contactEntities.getIsLoadingArray(contactApiConfig)
      const contactNextPage = contactEntities.getNextPage(contactApiConfig)
      const contactNextPageAction = () => {
        if (contactNextPage) {
          contactApiActions.loadNextPage(contactApiConfig)
        }
      }
      
  return (
    <React.Fragment>
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'name',
          placeholder: 'Not chosen',
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
          label: 'client',
          items: clientArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.client && [model.client],
          onChange: values => modelFormActions.changeField('client', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('client', errs),
          onValid: () => modelFormActions.resetFieldError('client'),
          errors: getNestedObjectField(modelErrors, 'client'),
          validate: {
            required: true,
            checkOnBlur: true,
          },
          onSearch: (value) => clientSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: clientArrayIsLoading ? '' : undefined,
          onScrollToEnd: clientNextPageAction,
          missingValueResolver: value => clientEntities.getById(value).name,
          isLoading: clientArrayIsLoading,
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'position',
          placeholder: 'Not chosen',
          value: model.position,
          errors: modelErrors.position,
          onChange: val => modelFormActions.changeField('position', val),
          onValid: () => modelFormActions.resetFieldError('position'),
          onInvalid: err => modelFormActions.setFieldError('position', err),
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
          placeholder: 'Not chosen',
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
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'phone',
          placeholder: 'Not chosen',
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
          type: INPUT_TYPES.multi,
          label: 'email',
          placeholder: 'Not chosen',
          value: model.email,
          errors: modelErrors.email,
          onChange: val => modelFormActions.changeField('email', val),
          onValid: () => modelFormActions.resetFieldError('email'),
          onInvalid: err => modelFormActions.setFieldError('email', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'avatar',
          placeholder: 'Not chosen',
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
          label: 'matterContactPersonSet',
          placeholder: 'Not chosen',
          value: model.matterContactPersonSet,
          errors: modelErrors.matterContactPersonSet,
          onChange: val => modelFormActions.changeField('matterContactPersonSet', val),
          onValid: () => modelFormActions.resetFieldError('matterContactPersonSet'),
          onInvalid: err => modelFormActions.setFieldError('matterContactPersonSet', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TSelect
        {...{
          label: 'contactSet',
          items: contactArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.contactSet && [model.contactSet],
          onChange: values => modelFormActions.changeField('contactSet', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('contactSet', errs),
          onValid: () => modelFormActions.resetFieldError('contactSet'),
          errors: getNestedObjectField(modelErrors, 'contactSet'),
          validate: {
            required: false,
            checkOnBlur: true,
          },
          onSearch: (value) => contactSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: contactArrayIsLoading ? '' : undefined,
          onScrollToEnd: contactNextPageAction,
          missingValueResolver: value => contactEntities.getById(value).name,
          isLoading: contactArrayIsLoading,
        }}
      />
    </React.Fragment>
  )
}
export default EditComponent