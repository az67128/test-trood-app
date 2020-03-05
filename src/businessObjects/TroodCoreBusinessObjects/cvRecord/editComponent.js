import React from 'react'
import style from './editComponent.css'
import modalsStyle from '$trood/styles/modals.css'
import classNames from 'classnames'
import TSelect, { SELECT_TYPES } from '$trood/components/TSelect'
import { RESTIFY_CONFIG } from 'redux-restify'
import TInput, { INPUT_TYPES } from '$trood/components/TInput'
import DateTimePicker, { PICKER_TYPES } from '$trood/components/DateTimePicker'
import { snakeToCamel } from '$trood/helpers/namingNotation'

const EditComponent = ({
  targetObjectApiActions,
  targetObjectEntities,
  employeeApiActions,
  employeeEntities,
  modelFormActions,
  modelErrors,
  model,
  ...restProps 
}) => {
  const [employeeSearch, employeeSearchSet] = React.useState('')
  const employeeModelConfig = RESTIFY_CONFIG.registeredModels.employee
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
    <div className={classNames(style.root, modalsStyle.root)}>
      <TSelect
        {...{
          className: modalsStyle.control,
          items: employeeArray.map(item => ({
            value: item[employeeModelConfig.idField], 
            label: item.name || item[employeeModelConfig.idField],
          })),
          values: model.author 
            ? [model.author] 
            : [],
          onChange: vals => modelFormActions.changeField('author',
            vals[0],
          ),
          onSearch: (value) => employeeSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: employeeArrayIsLoading ? '' : undefined,
          onScrollToEnd: employeeNextPageAction,
          isLoading: employeeArrayIsLoading,
          missingValueResolver: value => employeeEntities.getById(value)['author'],
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
            label: 'title',
            className: modalsStyle.control,
            value: model.title,
            errors: modelErrors.title,
            onChange: val => modelFormActions.changeField('title', val),
            onValid: () => modelFormActions.resetFieldError('title'),
            onInvalid: err => modelFormActions.setFieldError('title', err),
            validate: {
              checkOnBlur: true,
              required: true,
            },
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
              required: true,
            },
          }}
      />
      <div className={style.row}>
          <TSelect 
            {...{
              className: undefined,
              label: 'targetObject_type',
              items: [{ value: 'candidate' }, { value: 'employee' }],
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