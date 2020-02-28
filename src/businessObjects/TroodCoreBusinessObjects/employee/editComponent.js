import React from 'react';
import TInput, { INPUT_TYPES } from '$trood/components/TInput'
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
name-string
position-object
role-object
email-string
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
      <TInput
          {...{
          label: 'account',
          placeholder: 'Not chosen',
          type: INPUT_TYPES.float,
          value: model.account,
          errors: modelErrors.account,
          onChange: val => modelFormActions.changeField('account', val),
          onValid: () => modelFormActions.resetFieldError('account'),
          onInvalid: err => modelFormActions.setFieldError('account', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
active-bool
created-datetime
avatar-string
phone-string
      <TInput
          {...{
          label: 'totalRating',
          placeholder: 'Not chosen',
          type: INPUT_TYPES.float,
          value: model.totalRating,
          errors: modelErrors.totalRating,
          onChange: val => modelFormActions.changeField('totalRating', val),
          onValid: () => modelFormActions.resetFieldError('totalRating'),
          onInvalid: err => modelFormActions.setFieldError('totalRating', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
client_set-array
candidate_set-array
matter_set-array
matter_info_set-array
request_vacation_set-array
vacancy_set-array
vacancy_candidate_set-array
activity_set-array
bill_set-array
invoice_set-array
payment_set-array
time_entry_set-array
price_set-array
expense_set-array
comment_set-array
matter__employee_set-array
bill_price_list__employee_set-array
invitation_list__employee_set-array
contact_set-generic
cv_record_set-generic
document_set-generic
approver_set-array
vacation_period_set-array
timer_set-array
team_member_set-array
    </React.Fragment>
  );
};
export default EditComponent