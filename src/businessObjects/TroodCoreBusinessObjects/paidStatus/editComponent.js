import React from 'react'
import style from './editComponent.css'
import modalsStyle from '$trood/styles/modals.css'
import classNames from 'classnames'

import TInput, { INPUT_TYPES } from '$trood/components/TInput'

const EditComponent = ({
  model,
  modelErrors,
  modelFormActions, 
}) => {

  return (
    <div {...{className: classNames(style.root, modalsStyle.root)}}>
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'code',
          className: modalsStyle.control,
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
          className: modalsStyle.control,
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
          className: modalsStyle.control,
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
    </div>
  )
}
export default EditComponent