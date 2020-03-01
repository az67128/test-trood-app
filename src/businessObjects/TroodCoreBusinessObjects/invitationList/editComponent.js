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
          label: 'employee',
          placeholder: 'Not chosen',
          value: model.employee,
          errors: modelErrors.employee,
          onChange: val => modelFormActions.changeField('employee', val),
          onValid: () => modelFormActions.resetFieldError('employee'),
          onInvalid: err => modelFormActions.setFieldError('employee', err),
          validate: {
            checkOnBlur: true,
            required: true,
          },
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'invitationListEmployeeSet',
          placeholder: 'Not chosen',
          value: model.invitationListEmployeeSet,
          errors: modelErrors.invitationListEmployeeSet,
          onChange: val => modelFormActions.changeField('invitationListEmployeeSet', val),
          onValid: () => modelFormActions.resetFieldError('invitationListEmployeeSet'),
          onInvalid: err => modelFormActions.setFieldError('invitationListEmployeeSet', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'activitySet',
          placeholder: 'Not chosen',
          value: model.activitySet,
          errors: modelErrors.activitySet,
          onChange: val => modelFormActions.changeField('activitySet', val),
          onValid: () => modelFormActions.resetFieldError('activitySet'),
          onInvalid: err => modelFormActions.setFieldError('activitySet', err),
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