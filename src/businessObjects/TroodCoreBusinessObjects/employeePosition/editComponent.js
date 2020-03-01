import React from 'react'
import TInput, { INPUT_TYPES } from '$trood/components/TInput'

const EditComponent = ({
  model,
  modelErrors,
  modelFormActions, 
}) => {

  return (
    <React.Fragment>
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'name',
          placeholder: 'Not chosen',
          value: model.name,
          errors: modelErrors.name,
          onChange: val => modelFormActions.changeField('name', val),
          onValid: () => modelFormActions.resetFieldError('name'),
          onInvalid: err => modelFormActions.setFieldError('name', err),
          validate: {
            checkOnBlur: true,
            required: true,
          },
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'employeeSet',
          placeholder: 'Not chosen',
          value: model.employeeSet,
          errors: modelErrors.employeeSet,
          onChange: val => modelFormActions.changeField('employeeSet', val),
          onValid: () => modelFormActions.resetFieldError('employeeSet'),
          onInvalid: err => modelFormActions.setFieldError('employeeSet', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'clientRateSet',
          placeholder: 'Not chosen',
          value: model.clientRateSet,
          errors: modelErrors.clientRateSet,
          onChange: val => modelFormActions.changeField('clientRateSet', val),
          onValid: () => modelFormActions.resetFieldError('clientRateSet'),
          onInvalid: err => modelFormActions.setFieldError('clientRateSet', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
    </React.Fragment>
  )
}
export default EditComponent