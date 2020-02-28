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
client-object
employee_position-object
      <TInput
          {...{
          label: 'rate',
          placeholder: 'Not chosen',
          type: INPUT_TYPES.float,
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
    </React.Fragment>
  );
};
export default EditComponent