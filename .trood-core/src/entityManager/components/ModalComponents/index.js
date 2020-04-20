import React, { useContext } from 'react'
import TInput, { INPUT_TYPES } from '$trood/components/TInput'
import TCheckbox from '$trood/components/TCheckbox'
import DateTimePicker, { PICKER_TYPES } from '$trood/components/DateTimePicker'
import TSelect, { SELECT_TYPES } from '$trood/components/TSelect'
import modalsStyle from '$trood/styles/modals.css'

import { getNestedObjectField } from '$trood/helpers/nestedObjects'

export const ModalContext = React.createContext()

const validateInput = {
  required: true,
  checkOnBlur: true,
}
const validateDateTime = {
  checkOnBlur: true,
  requiredDate: false,
  requiredTime: false,
}

const ModalComponentWrapper = type => props => {
  const {
    editMask,
    getMask,
    model,
    modelFormActions: { changeField, setFieldError, resetFieldError },
    modelErrors,
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useContext(ModalContext)
  const { fieldName } = props
  if (getMask.includes(Array.isArray(fieldName) ? fieldName[0] : fieldName)) return null

  const onChange = e => changeField(fieldName, e)
  const onInvalid = errs => setFieldError(fieldName, errs)
  const onValid = () => resetFieldError(fieldName)
  const value = getNestedObjectField(model, fieldName)
  const errors = getNestedObjectField(modelErrors, fieldName)

  const commonProps = {
    label: fieldName,
    disabled: editMask.includes(Array.isArray(fieldName) ? fieldName[0] : fieldName),
    className: modalsStyle.control,
    errors,
    onInvalid: onInvalid,
    onValid: onValid,
    onChange: onChange,
    value,
  }

  switch (type) {
    case 'input':
      return (
        <TInput
          {...{
            ...commonProps,
            type: INPUT_TYPES.multi,
            validate: validateInput,
            ...props,
          }}
        />
      )
    case 'checkbox':
      return (
        <TCheckbox
          {...{
            ...commonProps,
            validate: validateInput,
            ...props,
          }}
        />
      )
    case 'datetimepicker':
      return (
        <DateTimePicker
          {...{
            ...commonProps,
            type: PICKER_TYPES.dateTime,
            validate: validateDateTime,
            ...props,
          }}
        />
      )
    case 'select':
      return (
        <TSelect
          {...{
            ...commonProps,
            // eslint-disable-next-line no-nested-ternary
            values: props.multi ? value : value ? [value] : [],
            onChange: vals => onChange(props.multi ? vals : vals[0]),
            type: SELECT_TYPES.filterDropdown,
            multi: false,
            clearable: true,
            placeHolder: 'Not set',
            ...props,
          }}
        />
      )
    default:
      return null
  }
}

export const ModalComponents = {
  ModalInput: ModalComponentWrapper('input'),
  ModalCheckbox: ModalComponentWrapper('checkbox'),
  ModalDateTimePicker: ModalComponentWrapper('datetimepicker'),
  ModalSelect: ModalComponentWrapper('select'),
}
