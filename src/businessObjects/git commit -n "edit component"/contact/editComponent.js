import React from 'react'
import style from './editComponent.css'
import modalsStyle from '$trood/styles/modals.css'
import classNames from 'classnames'
import TSelect, { SELECT_TYPES } from '$trood/components/TSelect'
import { RESTIFY_CONFIG } from 'redux-restify'
import TInput, { INPUT_TYPES } from '$trood/components/TInput'
import { snakeToCamel } from '$trood/helpers/namingNotation'

const EditComponent = ({
  targetObjectApiActions,
  targetObjectEntities,
  contactTypeApiActions,
  contactTypeEntities,
  modelFormActions,
  modelErrors,
  model,
  ...restProps 
}) => {
  const [contactTypeSearch, contactTypeSearchSet] = React.useState('')
  const contactTypeModelConfig = RESTIFY_CONFIG.registeredModels.contactType
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
      
  const targetObjectGenericEnteties = restProps[snakeToCamel(model.targetObject._object) + 'Entities']
  const [targetObjectSearch, targetObjectSearchSet] = React.useState('')
  const targetObjectModelConfig = RESTIFY_CONFIG.registeredModels[snakeToCamel(model.targetObject._object)]
  const targetObjectApiConfig = {
    filter: {
      q: targetObjectSearch ? `eq(${targetObjectModelConfig.idField},${targetObjectSearch})` : '',
      depth: 1,
    },
  }
  const targetObjectArray = targetObjectGenericEnteties.getArray(targetObjectApiConfig)
  const targetObjectArrayIsLoading = targetObjectGenericEnteties.getIsLoadingArray(targetObjectApiConfig)
  const targetObjectNextPage = targetObjectGenericEnteties.getNextPage(targetObjectApiConfig)
  const targetObjectNextPageAction = () => {
    if (targetObjectNextPage) {
      restProps[snakeToCamel(model.targetObject._object) + 'ApiActions'].loadNextPage(targetObjectApiConfig)
    }
  }
      
  return (
    <div {...{className: classNames(style.root, modalsStyle.root)}}>
      <TSelect
        {...{
          className: modalsStyle.control,
          items: contactTypeArray.map(item => ({
            value: item[contactTypeModelConfig.idField], 
            label: item.name || item[contactTypeModelConfig.idField],
          })),
          values: model.contactType 
            ? [model.contactType] 
            : [],
          onChange: vals => modelFormActions.changeField('contactType',
            vals[0],
          ),
          onSearch: (value) => contactTypeSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: contactTypeArrayIsLoading ? '' : undefined,
          onScrollToEnd: contactTypeNextPageAction,
          isLoading: contactTypeArrayIsLoading,
          missingValueResolver: value => contactTypeEntities.getById(value)['contactType'],
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
      <div className={style.row}>
          <TSelect 
            {...{
              className: undefined,
              label: 'targetObject_type',
              items: [{ value: 'employee' }, { value: 'contact_person' }, { value: 'client' }, { value: 'candidate' }],
              type: SELECT_TYPES.filterDropdown,
              clearable: true,
              values: model.targetObject && model.targetObject._object ? [model.targetObject._object] : [],
              placeHolder: 'Not set',
              onChange: vals => modelFormActions.changeField('targetObject', { _object: vals[0] }),
              onInvalid: err => modelFormActions.setFieldError('targetObject', err),
              validate: {
                checkOnBlur: true,
                required: true,
              },
            }} 
          />
          <TSelect
            {...{
        items: targetObjectArray.map(item => ({
            value: item[targetObjectModelConfig.idField], 
            label: item.name || item[targetObjectModelConfig.idField],
          })),
          values: model.targetObject[targetObjectModelConfig.idField]  
            ? [model.targetObject[targetObjectModelConfig.idField] ] 
            : [],
          onChange: vals => modelFormActions.changeField(['targetObject', targetObjectModelConfig.idField],
            vals[0],
          ),
          onSearch: (value) => targetObjectSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: targetObjectArrayIsLoading ? '' : undefined,
          onScrollToEnd: targetObjectNextPageAction,
          isLoading: targetObjectArrayIsLoading,
          missingValueResolver: value => targetObjectGenericEnteties.getById(value)[targetObjectModelConfig.idField],
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