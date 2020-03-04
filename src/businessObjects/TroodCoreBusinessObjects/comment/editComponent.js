import React from 'react'
import style from './editComponent.css'
import modalsStyle from '$trood/styles/modals.css'
import classNames from 'classnames'

import TSelect, { SELECT_TYPES } from '$trood/components/TSelect'
import { RESTIFY_CONFIG } from 'redux-restify'
import TInput, { INPUT_TYPES } from '$trood/components/TInput'
import DateTimePicker, { PICKER_TYPES } from '$trood/components/DateTimePicker'

const EditComponent = ({
  model,
  modelErrors,
  modelFormActions,
  employeeEntities,
  employeeApiActions,
  Entities,
  ApiActions, 
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
        items: employeeArray.map(item => ({ value: item[employeeModelConfig.idField], label: item.name || item[employeeModelConfig.idField] })),
        values: model.author ? [model.author] : [],
        onChange: vals => modelFormActions.changeField('author',
          vals[0],
        ),
        onSearch: (value) => employeeSearchSet(value ? encodeURIComponent(value) : ''),
        emptyItemsLabel: employeeArrayIsLoading ? '' : undefined,
        onScrollToEnd: employeeNextPageAction,
        isLoading: employeeArrayIsLoading,
        missingValueResolver: value => employeeEntities.getById(value).name,
          label: 'author',
          errors: modelErrors.author,
          onValid: () => modelFormActions.resetFieldError('author'),
          onInvalid: err => modelFormActions.setFieldError('author', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: true,
          placeHolder: 'Not set',
          
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'comment',
          className: modalsStyle.control,
          value: model.comment,
          errors: modelErrors.comment,
          onChange: val => modelFormActions.changeField('comment', val),
          onValid: () => modelFormActions.resetFieldError('comment'),
          onInvalid: err => modelFormActions.setFieldError('comment', err),
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
    </div>
  )
}
export default EditComponent