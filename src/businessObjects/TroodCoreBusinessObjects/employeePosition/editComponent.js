import React from 'react'
import style from './editComponent.css'
import modalsStyle from '$trood/styles/modals.css'
import classNames from 'classnames'
import TInput, { INPUT_TYPES } from '$trood/components/TInput'


const EditComponent = ({
  modelFormActions,
  modelErrors,
  model, 
}) => {

  return (
    <div className={classNames(style.root, modalsStyle.root)}>
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
    </div>
  )
}

export default EditComponent