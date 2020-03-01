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
          label: 'code',
          placeholder: 'Not chosen',
          value: model.code,
          errors: modelErrors.code,
          onChange: val => modelFormActions.changeField('code', val),
          onValid: () => modelFormActions.resetFieldError('code'),
          onInvalid: err => modelFormActions.setFieldError('code', err),
          validate: {
            checkOnBlur: true,
            required: true,
          },
        }}
      />
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
          type: INPUT_TYPES.float,
          label: 'order',
          placeholder: 'Not chosen',
          value: model.order,
          errors: modelErrors.order,
          onChange: val => modelFormActions.changeField('order', val),
          onValid: () => modelFormActions.resetFieldError('order'),
          onInvalid: err => modelFormActions.setFieldError('order', err),
          validate: {
            checkOnBlur: true,
            required: true,
          },
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'clientSet',
          placeholder: 'Not chosen',
          value: model.clientSet,
          errors: modelErrors.clientSet,
          onChange: val => modelFormActions.changeField('clientSet', val),
          onValid: () => modelFormActions.resetFieldError('clientSet'),
          onInvalid: err => modelFormActions.setFieldError('clientSet', err),
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