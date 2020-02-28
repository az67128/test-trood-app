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
code-string
name-string
responsible-object
client-object
matter_type-object
matter_status-object
matter_active_status-object
budget_type-object
contact_persons-objects
description-string
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
            required: false,
          },
        }}
      />
created-datetime
      <TInput
          {...{
          label: 'totalBillAmount',
          placeholder: 'Not chosen',
          type: INPUT_TYPES.float,
          value: model.totalBillAmount,
          errors: modelErrors.totalBillAmount,
          onChange: val => modelFormActions.changeField('totalBillAmount', val),
          onValid: () => modelFormActions.resetFieldError('totalBillAmount'),
          onInvalid: err => modelFormActions.setFieldError('totalBillAmount', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
start_date-datetime
end_date-datetime
activity_set-array
bill_set-array
payment_set-array
time_entry_set-array
expense_set-array
bill_price_list_set-array
document_set-generic
matter__contact_person_set-array
comment_set-generic
matter_info_set-array
team_member_set-array
    </React.Fragment>
  );
};
export default EditComponent