import React from 'react'
import style from './editComponent.css'
import modalsStyle from '$trood/styles/modals.css'
import classNames from 'classnames'
import TInput, { INPUT_TYPES } from '$trood/components/TInput'
import TSelect, { SELECT_TYPES } from '$trood/components/TSelect'
import { RESTIFY_CONFIG } from 'redux-restify'
import DateTimePicker, { PICKER_TYPES } from '$trood/components/DateTimePicker'
import TCheckbox from '$trood/components/TCheckbox'


const EditComponent = ({
  billStatusApiActions,
  billStatusEntities,
  matterApiActions,
  matterEntities,
  employeeApiActions,
  employeeEntities,
  modelFormActions,
  modelErrors,
  model, 
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
      
  const [matterSearch, matterSearchSet] = React.useState('')
  const matterModelConfig = RESTIFY_CONFIG.registeredModels.matter
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
      
  const [billStatusSearch, billStatusSearchSet] = React.useState('')
  const billStatusModelConfig = RESTIFY_CONFIG.registeredModels.billStatus
  const billStatusApiConfig = {
    filter: {
      q: billStatusSearch ? `eq(${billStatusModelConfig.idField},${billStatusSearch})` : '',
      depth: 1,
    },
  }
  const billStatusArray = billStatusEntities.getArray(billStatusApiConfig)
  const billStatusArrayIsLoading = billStatusEntities.getIsLoadingArray(billStatusApiConfig)
  const billStatusNextPage = billStatusEntities.getNextPage(billStatusApiConfig)
  const billStatusNextPageAction = () => {
    if (billStatusNextPage) {
      billStatusApiActions.loadNextPage(billStatusApiConfig)
    }
  }
      
  return (
    <div className={classNames(style.root, modalsStyle.root)}>
      <TInput
          {...{
            type: INPUT_TYPES.multi,
            label: 'number',
            className: modalsStyle.control,
            value: model.number,
            errors: modelErrors.number,
            onChange: val => modelFormActions.changeField('number', val),
            onValid: () => modelFormActions.resetFieldError('number'),
            onInvalid: err => modelFormActions.setFieldError('number', err),
            validate: {
              checkOnBlur: true,
              required: true,
            },
          }}
      />
      <TSelect
        {...{
          className: modalsStyle.control,
          items: employeeArray.map(item => ({
            value: item[employeeModelConfig.idField], 
            label: item.name || item[employeeModelConfig.idField],
          })),
          values: model.approver 
            ? [model.approver] 
            : [],
          onChange: vals => modelFormActions.changeField('approver',
            vals[0],
          ),
          onSearch: (value) => employeeSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: employeeArrayIsLoading ? '' : undefined,
          onScrollToEnd: employeeNextPageAction,
          isLoading: employeeArrayIsLoading,
          missingValueResolver: value => employeeEntities.getById(value)['approver'],
          label: 'approver',
          errors: modelErrors.approver,
          onValid: () => modelFormActions.resetFieldError('approver'),
          onInvalid: err => modelFormActions.setFieldError('approver', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: true,
          placeHolder: 'Not set',
        }}
      />
      <TSelect
        {...{
          className: modalsStyle.control,
          items: matterArray.map(item => ({
            value: item[matterModelConfig.idField], 
            label: item.name || item[matterModelConfig.idField],
          })),
          values: model.matter 
            ? [model.matter] 
            : [],
          onChange: vals => modelFormActions.changeField('matter',
            vals[0],
          ),
          onSearch: (value) => matterSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: matterArrayIsLoading ? '' : undefined,
          onScrollToEnd: matterNextPageAction,
          isLoading: matterArrayIsLoading,
          missingValueResolver: value => matterEntities.getById(value)['matter'],
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
      <DateTimePicker
            {...{
              label: 'approvedDate',
            className: modalsStyle.control,
            value: model.approvedDate,
            errors: modelErrors.approvedDate,
            onChange: val => modelFormActions.changeField('approvedDate', val),
            onValid: () => modelFormActions.resetFieldError('approvedDate'),
            onInvalid: err => modelFormActions.setFieldError('approvedDate', err),
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
          items: billStatusArray.map(item => ({
            value: item[billStatusModelConfig.idField], 
            label: item.name || item[billStatusModelConfig.idField],
          })),
          values: model.billStatus 
            ? [model.billStatus] 
            : [],
          onChange: vals => modelFormActions.changeField('billStatus',
            vals[0],
          ),
          onSearch: (value) => billStatusSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: billStatusArrayIsLoading ? '' : undefined,
          onScrollToEnd: billStatusNextPageAction,
          isLoading: billStatusArrayIsLoading,
          missingValueResolver: value => billStatusEntities.getById(value)['billStatus'],
          label: 'billStatus',
          errors: modelErrors.billStatus,
          onValid: () => modelFormActions.resetFieldError('billStatus'),
          onInvalid: err => modelFormActions.setFieldError('billStatus', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: false,
          placeHolder: 'Not set',
        }}
      />
      <DateTimePicker
            {...{
              label: 'dateInvoiceSent',
            className: modalsStyle.control,
            value: model.dateInvoiceSent,
            errors: modelErrors.dateInvoiceSent,
            onChange: val => modelFormActions.changeField('dateInvoiceSent', val),
            onValid: () => modelFormActions.resetFieldError('dateInvoiceSent'),
            onInvalid: err => modelFormActions.setFieldError('dateInvoiceSent', err),
              type: PICKER_TYPES.dateTime,
              validate: {
                checkOnBlur: true,
                requiredDate: false,
                requiredTime: false,
            },
          }}
        />
      <TInput
          {...{
            type: INPUT_TYPES.float,
            label: 'sumBill',
            className: modalsStyle.control,
            value: model.sumBill,
            errors: modelErrors.sumBill,
            onChange: val => modelFormActions.changeField('sumBill', val),
            onValid: () => modelFormActions.resetFieldError('sumBill'),
            onInvalid: err => modelFormActions.setFieldError('sumBill', err),
            validate: {
              checkOnBlur: true,
              required: false,
            },
          }}
      />
      <TInput
          {...{
            type: INPUT_TYPES.float,
            label: 'totalSumPayment',
            className: modalsStyle.control,
            value: model.totalSumPayment,
            errors: modelErrors.totalSumPayment,
            onChange: val => modelFormActions.changeField('totalSumPayment', val),
            onValid: () => modelFormActions.resetFieldError('totalSumPayment'),
            onInvalid: err => modelFormActions.setFieldError('totalSumPayment', err),
            validate: {
              checkOnBlur: true,
              required: false,
            },
          }}
      />
      <TCheckbox
          {...{
            label: 'deleted',
            className: modalsStyle.control,
            value: model.deleted,
            errors: modelErrors.deleted,
            onChange: val => modelFormActions.changeField('deleted', val),
            onValid: () => modelFormActions.resetFieldError('deleted'),
            onInvalid: err => modelFormActions.setFieldError('deleted', err),
            validate: {
              checkOnBlur: true,
              required: false,
            },
          }}
        />
      <DateTimePicker
            {...{
              label: 'dateFullPaid',
            className: modalsStyle.control,
            value: model.dateFullPaid,
            errors: modelErrors.dateFullPaid,
            onChange: val => modelFormActions.changeField('dateFullPaid', val),
            onValid: () => modelFormActions.resetFieldError('dateFullPaid'),
            onInvalid: err => modelFormActions.setFieldError('dateFullPaid', err),
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