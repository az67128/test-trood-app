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
      <TInput
          {...{
          label: 'priority',
          placeholder: 'Not chosen',
          type: INPUT_TYPES.float,
          value: model.priority,
          errors: modelErrors.priority,
          onChange: val => modelFormActions.changeField('priority', val),
          onValid: () => modelFormActions.resetFieldError('priority'),
          onInvalid: err => modelFormActions.setFieldError('priority', err),
          validate: {
            checkOnBlur: true,
            required: true,
          },
        }}
      />
employee-object
request_vacation-object
approve-string
comment-string
approve_date-datetime
    </React.Fragment>
  );
};
export default EditComponent