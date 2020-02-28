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
name-string
client_active_status-object
responsible-object
client_type-object
created-datetime
conflict_check_date-datetime
      <TInput
          {...{
          label: 'revenue',
          placeholder: 'Not chosen',
          type: INPUT_TYPES.float,
          value: model.revenue,
          errors: modelErrors.revenue,
          onChange: val => modelFormActions.changeField('revenue', val),
          onValid: () => modelFormActions.resetFieldError('revenue'),
          onInvalid: err => modelFormActions.setFieldError('revenue', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
payment_set-array
contact_set-generic
comment_set-generic
document_set-generic
conflict_firm_set-array
contact_person_set-array
matter_set-array
requisites_set-array
conflict_status-object
client_rate_set-array
    </React.Fragment>
  );
};
export default EditComponent