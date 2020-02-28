import React from 'react';
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
name-string
responsible-object
executor-object
activity_status-object
matter-object
important-bool
created-datetime
details-string
start-datetime
deadline-datetime
deleted-bool
document_set-generic
comment_set-generic
time_entry_set-array
activity_type-object
invitation_list-object
timer_set-array
activity_access_status-object
have_time-bool
    </React.Fragment>
  );
};
export default EditComponent