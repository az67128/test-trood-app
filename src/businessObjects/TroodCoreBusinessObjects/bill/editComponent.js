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
number-string
approver-object
matter-object
created-datetime
approved_date-datetime
bill_status-object
date_invoice_sent-datetime
      <TInput
          {...{
          label: 'sumBill',
          placeholder: 'Not chosen',
          type: INPUT_TYPES.float,
          value: model.sumBill,
          errors: modelErrors.sumBill,
          onChange: val => modelFormActions.changeField('sumBill', val),
          onValid: () => modelFormActions.resetFieldError('sumBill'),
          onInvalid: err => modelFormActions.setFieldError('sumBill', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TInput
          {...{
          label: 'totalSumPayment',
          placeholder: 'Not chosen',
          type: INPUT_TYPES.float,
          value: model.totalSumPayment,
          errors: modelErrors.totalSumPayment,
          onChange: val => modelFormActions.changeField('totalSumPayment', val),
          onValid: () => modelFormActions.resetFieldError('totalSumPayment'),
          onInvalid: err => modelFormActions.setFieldError('totalSumPayment', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
deleted-bool
time_entry_set-array
expense_set-array
invoice_set-array
document_set-generic
payment_set-array
date_full_paid-datetime
    </React.Fragment>
  );
};
export default EditComponent