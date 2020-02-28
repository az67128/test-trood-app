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
          label: 'rating',
          placeholder: 'Not chosen',
          type: INPUT_TYPES.float,
          value: model.rating,
          errors: modelErrors.rating,
          onChange: val => modelFormActions.changeField('rating', val),
          onValid: () => modelFormActions.resetFieldError('rating'),
          onInvalid: err => modelFormActions.setFieldError('rating', err),
          validate: {
            checkOnBlur: true,
            required: true,
          },
        }}
      />
rewiewer-object
details-string
created-datetime
is_min-bool
is_max-bool
team_member-object
    </React.Fragment>
  );
};
export default EditComponent