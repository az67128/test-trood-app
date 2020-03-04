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
  employeeEntities,
  employeeApiActions,
  matterEntities,
  matterApiActions,
  rateTypeEntities,
  rateTypeApiActions, 
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
      
      const [matterSearch, matterSearchSet] = React.useState('')
      const matterModelConfig = RESTIFY_CONFIG.registeredModels['matter']
      const matterApiConfig = {
        filter: {
          q: matterSearch ? `eq(${matterModelConfig.idField},${matterSearch})` : '',
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
      
      const [rateTypeSearch, rateTypeSearchSet] = React.useState('')
      const rateTypeModelConfig = RESTIFY_CONFIG.registeredModels['rateType']
      const rateTypeApiConfig = {
        filter: {
          q: rateTypeSearch ? `eq(${rateTypeModelConfig.idField},${rateTypeSearch})` : '',
          depth: 1,
        },
      }
      const rateTypeArray = rateTypeEntities.getArray(rateTypeApiConfig)
      const rateTypeArrayIsLoading = rateTypeEntities.getIsLoadingArray(rateTypeApiConfig)
      const rateTypeNextPage = rateTypeEntities.getNextPage(rateTypeApiConfig)
      const rateTypeNextPageAction = () => {
        if (rateTypeNextPage) {
          rateTypeApiActions.loadNextPage(rateTypeApiConfig)
        }
      }
      
  return (
    <div {...{className: classNames(style.root, modalsStyle.root)}}>
<TSelect
        {...{
          
          
        className: modalsStyle.control,
        items: employeeArray.map(item => ({ value: item[employeeModelConfig.idField], label: item.name || item[employeeModelConfig.idField] })),
        values: model.employee ? [model.employee] : [],
        onChange: vals => modelFormActions.changeField('employee',
          vals[0],
        ),
        onSearch: (value) => employeeSearchSet(value ? encodeURIComponent(value) : ''),
        emptyItemsLabel: employeeArrayIsLoading ? '' : undefined,
        onScrollToEnd: employeeNextPageAction,
        isLoading: employeeArrayIsLoading,
        missingValueResolver: value => employeeEntities.getById(value).name,
          label: 'employee',
          errors: modelErrors.employee,
          onValid: () => modelFormActions.resetFieldError('employee'),
          onInvalid: err => modelFormActions.setFieldError('employee', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: true,
          placeHolder: 'Not set',
          
        }}
      />
<TSelect
        {...{
          
          
        className: modalsStyle.control,
        items: matterArray.map(item => ({ value: item[matterModelConfig.idField], label: item.name || item[matterModelConfig.idField] })),
        values: model.matter ? [model.matter] : [],
        onChange: vals => modelFormActions.changeField('matter',
          vals[0],
        ),
        onSearch: (value) => matterSearchSet(value ? encodeURIComponent(value) : ''),
        emptyItemsLabel: matterArrayIsLoading ? '' : undefined,
        onScrollToEnd: matterNextPageAction,
        isLoading: matterArrayIsLoading,
        missingValueResolver: value => matterEntities.getById(value).name,
          label: 'matter',
          errors: modelErrors.matter,
          onValid: () => modelFormActions.resetFieldError('matter'),
          onInvalid: err => modelFormActions.setFieldError('matter', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: true,
          placeHolder: 'Not set',
          
        }}
      />
<TSelect
        {...{
          
          
        className: modalsStyle.control,
        items: rateTypeArray.map(item => ({ value: item[rateTypeModelConfig.idField], label: item.name || item[rateTypeModelConfig.idField] })),
        values: model.rateType ? [model.rateType] : [],
        onChange: vals => modelFormActions.changeField('rateType',
          vals[0],
        ),
        onSearch: (value) => rateTypeSearchSet(value ? encodeURIComponent(value) : ''),
        emptyItemsLabel: rateTypeArrayIsLoading ? '' : undefined,
        onScrollToEnd: rateTypeNextPageAction,
        isLoading: rateTypeArrayIsLoading,
        missingValueResolver: value => rateTypeEntities.getById(value).name,
          label: 'rateType',
          errors: modelErrors.rateType,
          onValid: () => modelFormActions.resetFieldError('rateType'),
          onInvalid: err => modelFormActions.setFieldError('rateType', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: true,
          placeHolder: 'Not set',
          
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.float,
          label: 'rate',
          className: modalsStyle.control,
          value: model.rate,
          errors: modelErrors.rate,
          onChange: val => modelFormActions.changeField('rate', val),
          onValid: () => modelFormActions.resetFieldError('rate'),
          onInvalid: err => modelFormActions.setFieldError('rate', err),
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