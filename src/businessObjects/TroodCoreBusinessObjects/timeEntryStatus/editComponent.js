import React from 'react'
import style from './editComponent.css'
import modalsStyle from '$trood/styles/modals.css'
import classNames from 'classnames'
import { INPUT_TYPES } from '$trood/components/TInput'


const EditComponent = ({
  ModalComponents, 
}) => {

  return (
    <div className={classNames(style.root, modalsStyle.root)}>
      <ModalComponents.ModalInput
        {...{
          fieldName: 'code',
          type: INPUT_TYPES.multi,
          validate: {
            checkOnBlur: true,
            required: true,
          },
        }}
      />
      <ModalComponents.ModalInput
        {...{
          fieldName: 'name',
          type: INPUT_TYPES.multi,
          validate: {
            checkOnBlur: true,
            required: true,
          },
        }}
      />
      <ModalComponents.ModalInput
        {...{
          fieldName: 'order',
          type: INPUT_TYPES.float,
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