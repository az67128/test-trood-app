import React from 'react';
import TInput, { INPUT_TYPES } from '$trood/components/TInput'
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
          label: 'number',
          placeholder: 'Not chosen',
          type: INPUT_TYPES.float,
          value: model.number,
          errors: modelErrors.number,
          onChange: val => modelFormActions.changeField('number', val),
          onValid: () => modelFormActions.resetFieldError('number'),
          onInvalid: err => modelFormActions.setFieldError('number', err),
          validate: {
            checkOnBlur: true,
            required: true,
          },
        }}
      />
name-string
price_unit-object
      <TInput
          {...{
          label: 'amount',
          placeholder: 'Not chosen',
          type: INPUT_TYPES.float,
          value: model.amount,
          errors: modelErrors.amount,
          onChange: val => modelFormActions.changeField('amount', val),
          onValid: () => modelFormActions.resetFieldError('amount'),
          onInvalid: err => modelFormActions.setFieldError('amount', err),
          validate: {
            checkOnBlur: true,
            required: true,
          },
        }}
      />
author-object
created-datetime
utbms-object
service_type-object
    </React.Fragment>
  );
};
export default EditComponent