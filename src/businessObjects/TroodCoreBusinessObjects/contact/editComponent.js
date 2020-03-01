import React from 'react'
import TSelect, { SELECT_TYPES } from '$trood/components/TSelect'
import { getNestedObjectField } from '$trood/helpers/nestedObjects'
import TInput, { INPUT_TYPES } from '$trood/components/TInput'

const EditComponent = ({
  model,
  modelErrors,
  modelFormActions,
  contactTypeEntities,
  contactTypeApiActions,
  Entities,
  ApiActions, 
}) => {
      const [contactTypeSearch, contactTypeSearchSet] = React.useState('')
      const contactTypeApiConfig = {
        filter: {
          q: contactTypeSearch ? 'like(name,*' + contactTypeSearch + ')' : '',
          depth: 1,
        },
      }
      const contactTypeArray = contactTypeEntities.getArray(contactTypeApiConfig)
      const contactTypeArrayIsLoading = contactTypeEntities.getIsLoadingArray(contactTypeApiConfig)
      const contactTypeNextPage = contactTypeEntities.getNextPage(contactTypeApiConfig)
      const contactTypeNextPageAction = () => {
        if (contactTypeNextPage) {
          contactTypeApiActions.loadNextPage(contactTypeApiConfig)
        }
      }
      
      const [Search, SearchSet] = React.useState('')
      const ApiConfig = {
        filter: {
          q: Search ? 'like(name,*' + Search + ')' : '',
          depth: 1,
        },
      }
      const Array = Entities.getArray(ApiConfig)
      const ArrayIsLoading = Entities.getIsLoadingArray(ApiConfig)
      const NextPage = Entities.getNextPage(ApiConfig)
      const NextPageAction = () => {
        if (NextPage) {
          ApiActions.loadNextPage(ApiConfig)
        }
      }
      
  return (
    <React.Fragment>
      <TSelect
        {...{
          label: 'contactType',
          items: contactTypeArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.contactType && [model.contactType],
          onChange: values => modelFormActions.changeField('contactType', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('contactType', errs),
          onValid: () => modelFormActions.resetFieldError('contactType'),
          errors: getNestedObjectField(modelErrors, 'contactType'),
          validate: {
            required: true,
            checkOnBlur: true,
          },
          onSearch: (value) => contactTypeSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: contactTypeArrayIsLoading ? '' : undefined,
          onScrollToEnd: contactTypeNextPageAction,
          missingValueResolver: value => contactTypeEntities.getById(value).name,
          isLoading: contactTypeArrayIsLoading,
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'value',
          placeholder: 'Not chosen',
          value: model.value,
          errors: modelErrors.value,
          onChange: val => modelFormActions.changeField('value', val),
          onValid: () => modelFormActions.resetFieldError('value'),
          onInvalid: err => modelFormActions.setFieldError('value', err),
          validate: {
            checkOnBlur: true,
            required: true,
          },
        }}
      />
    </React.Fragment>
  )
}
export default EditComponent