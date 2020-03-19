import React from 'react'
import style from './editComponent.css'
import modalsStyle from '$trood/styles/modals.css'
import classNames from 'classnames'

import TSelect, { SELECT_TYPES } from '$trood/components/TSelect'
import { RESTIFY_CONFIG } from 'redux-restify'
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
      const contactTypeModelConfig = RESTIFY_CONFIG.registeredModels['contactType']
      const contactTypeApiConfig = {
        filter: {
          q: contactTypeSearch ? `eq(${contactTypeModelConfig.idField},${contactTypeSearch})` : '',
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
      const ModelConfig = RESTIFY_CONFIG.registeredModels[model.._object]
      const ApiConfig = {
        filter: {
          q: Search ? `eq(${ModelConfig.idField},${Search})` : '',
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
    <div {...{className: classNames(style.root, modalsStyle.root)}}>
<TSelect
        {...{
          
          
        className: modalsStyle.control,
        items: contactTypeArray.map(item => ({ value: item[contactTypeModelConfig.idField], label: item.name || item[contactTypeModelConfig.idField] })),
        values: model.contactType ? [model.contactType] : [],
        onChange: vals => modelFormActions.changeField('contactType',
          vals[0],
        ),
        onSearch: (value) => contactTypeSearchSet(value ? encodeURIComponent(value) : ''),
        emptyItemsLabel: contactTypeArrayIsLoading ? '' : undefined,
        onScrollToEnd: contactTypeNextPageAction,
        isLoading: contactTypeArrayIsLoading,
        missingValueResolver: value => contactTypeEntities.getById(value).name,
          label: 'contactType',
          errors: modelErrors.contactType,
          onValid: () => modelFormActions.resetFieldError('contactType'),
          onInvalid: err => modelFormActions.setFieldError('contactType', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: true,
          placeHolder: 'Not set',
          
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'value',
          className: modalsStyle.control,
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
<div>
          <TSelect
            {...{
              
          
        className: modalsStyle.control,
        items: Array.map(item => ({ value: item[ModelConfig.idField], label: item.name || item[ModelConfig.idField] })),
        values: model.targetObject[ModelConfig.idField]  ? [model.targetObject[ModelConfig.idField] ] : [],
        onChange: vals => modelFormActions.changeField(['targetObject', ModelConfig.idField],
          vals[0],
        ),
        onSearch: (value) => SearchSet(value ? encodeURIComponent(value) : ''),
        emptyItemsLabel: ArrayIsLoading ? '' : undefined,
        onScrollToEnd: NextPageAction,
        isLoading: ArrayIsLoading,
        missingValueResolver: value => Entities.getById(value).name,
          label: 'targetObject',
          errors: modelErrors.targetObject,
          onValid: () => modelFormActions.resetFieldError('targetObject'),
          onInvalid: err => modelFormActions.setFieldError('targetObject', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: true,
          placeHolder: 'Not set',
          
            }}
          />
        </div>
    </div>
  )
}
export default EditComponent