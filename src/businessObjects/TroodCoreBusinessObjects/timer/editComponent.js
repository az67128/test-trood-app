import React from 'react';
import TInput, { INPUT_TYPES } from '$trood/components/TInput'
import TInput, { INPUT_TYPES } from '$trood/components/TInput'

const EditComponent = ({ model, modelErrors, modelFormActions }) => {

  return (
    <React.Fragment>
      <TInput
          {...{
          label: 'id',
          placeholder: 'Not chosen',
          type: INPUT_TYPES.float,
          value: model.id,
          errors: modelErrors.id,
          onChange: val => modelFormActions.changeField('id', val),
          onValid: () => modelFormActions.resetFieldError('id'),
          onInvalid: err => modelFormActions.setFieldError('id', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
timer_status-object
employee-object
activity-object
start-datetime
      <TInput
          {...{
          label: 'duration',
          placeholder: 'Not chosen',
          type: INPUT_TYPES.float,
          value: model.duration,
          errors: modelErrors.duration,
          onChange: val => modelFormActions.changeField('duration', val),
          onValid: () => modelFormActions.resetFieldError('duration'),
          onInvalid: err => modelFormActions.setFieldError('duration', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
    </React.Fragment>
  );
};
export default EditComponent