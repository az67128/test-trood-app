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
  docCustomTypeEntities,
  docCustomTypeApiActions, 
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
      
      const [docCustomTypeSearch, docCustomTypeSearchSet] = React.useState('')
      const docCustomTypeModelConfig = RESTIFY_CONFIG.registeredModels['docCustomType']
      const docCustomTypeApiConfig = {
        filter: {
          q: docCustomTypeSearch ? `eq(${docCustomTypeModelConfig.idField},${docCustomTypeSearch})` : '',
          depth: 1,
        },
      }
      const docCustomTypeArray = docCustomTypeEntities.getArray(docCustomTypeApiConfig)
      const docCustomTypeArrayIsLoading = docCustomTypeEntities.getIsLoadingArray(docCustomTypeApiConfig)
      const docCustomTypeNextPage = docCustomTypeEntities.getNextPage(docCustomTypeApiConfig)
      const docCustomTypeNextPageAction = () => {
        if (docCustomTypeNextPage) {
          docCustomTypeApiActions.loadNextPage(docCustomTypeApiConfig)
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
          label: 'file',
          className: modalsStyle.control,
          value: model.file,
          errors: modelErrors.file,
          onChange: val => modelFormActions.changeField('file', val),
          onValid: () => modelFormActions.resetFieldError('file'),
          onInvalid: err => modelFormActions.setFieldError('file', err),
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
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'documentType',
          className: modalsStyle.control,
          value: model.documentType,
          errors: modelErrors.documentType,
          onChange: val => modelFormActions.changeField('documentType', val),
          onValid: () => modelFormActions.resetFieldError('documentType'),
          onInvalid: err => modelFormActions.setFieldError('documentType', err),
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
<TSelect
        {...{
          
          
        className: modalsStyle.control,
        items: docCustomTypeArray.map(item => ({ value: item[docCustomTypeModelConfig.idField], label: item.name || item[docCustomTypeModelConfig.idField] })),
        values: model.docCustomType ? [model.docCustomType] : [],
        onChange: vals => modelFormActions.changeField('docCustomType',
          vals[0],
        ),
        onSearch: (value) => docCustomTypeSearchSet(value ? encodeURIComponent(value) : ''),
        emptyItemsLabel: docCustomTypeArrayIsLoading ? '' : undefined,
        onScrollToEnd: docCustomTypeNextPageAction,
        isLoading: docCustomTypeArrayIsLoading,
        missingValueResolver: value => docCustomTypeEntities.getById(value).name,
          label: 'docCustomType',
          errors: modelErrors.docCustomType,
          onValid: () => modelFormActions.resetFieldError('docCustomType'),
          onInvalid: err => modelFormActions.setFieldError('docCustomType', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: false,
          placeHolder: 'Not set',
          
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'description',
          className: modalsStyle.control,
          value: model.description,
          errors: modelErrors.description,
          onChange: val => modelFormActions.changeField('description', val),
          onValid: () => modelFormActions.resetFieldError('description'),
          onInvalid: err => modelFormActions.setFieldError('description', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'filename',
          className: modalsStyle.control,
          value: model.filename,
          errors: modelErrors.filename,
          onChange: val => modelFormActions.changeField('filename', val),
          onValid: () => modelFormActions.resetFieldError('filename'),
          onInvalid: err => modelFormActions.setFieldError('filename', err),
          validate: {
            checkOnBlur: true,
            required: true,
          },
        }}
      />
    </div>
  )
}
export default EditComponent