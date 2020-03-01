import React from 'react'
import TSelect, { SELECT_TYPES } from '$trood/components/TSelect'
import { getNestedObjectField } from '$trood/helpers/nestedObjects'

const EditComponent = ({
  model,
  modelErrors,
  modelFormActions,
  matterEntities,
  matterApiActions,
  contactPersonEntities,
  contactPersonApiActions, 
}) => {
      const [matterSearch, matterSearchSet] = React.useState('')
      const matterApiConfig = {
        filter: {
          q: matterSearch ? 'like(name,*' + matterSearch + ')' : '',
          depth: 1,
        },
      }
      const matterArray = matterEntities.getArray(matterApiConfig)
      const matterArrayIsLoading = matterEntities.getIsLoadingArray(matterApiConfig)
      const matterNextPage = matterEntities.getNextPage(matterApiConfig)
      const matterNextPageAction = () => {
        if (matterNextPage) {
          matterApiActions.loadNextPage(matterApiConfig)
        }
      }
      
      const [contactPersonSearch, contactPersonSearchSet] = React.useState('')
      const contactPersonApiConfig = {
        filter: {
          q: contactPersonSearch ? 'like(name,*' + contactPersonSearch + ')' : '',
          depth: 1,
        },
      }
      const contactPersonArray = contactPersonEntities.getArray(contactPersonApiConfig)
      const contactPersonArrayIsLoading = contactPersonEntities.getIsLoadingArray(contactPersonApiConfig)
      const contactPersonNextPage = contactPersonEntities.getNextPage(contactPersonApiConfig)
      const contactPersonNextPageAction = () => {
        if (contactPersonNextPage) {
          contactPersonApiActions.loadNextPage(contactPersonApiConfig)
        }
      }
      
  return (
    <React.Fragment>
      <TSelect
        {...{
          label: 'matter',
          items: matterArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.matter && [model.matter],
          onChange: values => modelFormActions.changeField('matter', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('matter', errs),
          onValid: () => modelFormActions.resetFieldError('matter'),
          errors: getNestedObjectField(modelErrors, 'matter'),
          validate: {
            required: true,
            checkOnBlur: true,
          },
          onSearch: (value) => matterSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: matterArrayIsLoading ? '' : undefined,
          onScrollToEnd: matterNextPageAction,
          missingValueResolver: value => matterEntities.getById(value).name,
          isLoading: matterArrayIsLoading,
        }}
      />
      <TSelect
        {...{
          label: 'contactPerson',
          items: contactPersonArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.contactPerson && [model.contactPerson],
          onChange: values => modelFormActions.changeField('contactPerson', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('contactPerson', errs),
          onValid: () => modelFormActions.resetFieldError('contactPerson'),
          errors: getNestedObjectField(modelErrors, 'contactPerson'),
          validate: {
            required: true,
            checkOnBlur: true,
          },
          onSearch: (value) => contactPersonSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: contactPersonArrayIsLoading ? '' : undefined,
          onScrollToEnd: contactPersonNextPageAction,
          missingValueResolver: value => contactPersonEntities.getById(value).name,
          isLoading: contactPersonArrayIsLoading,
        }}
      />
    </React.Fragment>
  )
}
export default EditComponent