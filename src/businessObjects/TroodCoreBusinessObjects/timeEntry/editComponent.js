import React from 'react';
import TInput, { INPUT_TYPES } from '$trood/components/TInput'
import TInput, { INPUT_TYPES } from '$trood/components/TInput'
import TInput, { INPUT_TYPES } from '$trood/components/TInput'
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
author-object
time_entry_billable-object
name-string
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
            required: true,
          },
        }}
      />
matter-object
time_entry_date-datetime
created-datetime
details-string
activity-object
bill-object
      <TInput
          {...{
          label: 'approvedDuration',
          placeholder: 'Not chosen',
          type: INPUT_TYPES.float,
          value: model.approvedDuration,
          errors: modelErrors.approvedDuration,
          onChange: val => modelFormActions.changeField('approvedDuration', val),
          onValid: () => modelFormActions.resetFieldError('approvedDuration'),
          onInvalid: err => modelFormActions.setFieldError('approvedDuration', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
approved_date-datetime
utbms-object
time_entry_status-object
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
            required: false,
          },
        }}
      />
      <TInput
          {...{
          label: 'approveRate',
          placeholder: 'Not chosen',
          type: INPUT_TYPES.float,
          value: model.approveRate,
          errors: modelErrors.approveRate,
          onChange: val => modelFormActions.changeField('approveRate', val),
          onValid: () => modelFormActions.resetFieldError('approveRate'),
          onInvalid: err => modelFormActions.setFieldError('approveRate', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
deleted-bool
      <TInput
          {...{
          label: 'sumRecord',
          placeholder: 'Not chosen',
          type: INPUT_TYPES.float,
          value: model.sumRecord,
          errors: modelErrors.sumRecord,
          onChange: val => modelFormActions.changeField('sumRecord', val),
          onValid: () => modelFormActions.resetFieldError('sumRecord'),
          onInvalid: err => modelFormActions.setFieldError('sumRecord', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TInput
          {...{
          label: 'approvedSumRecord',
          placeholder: 'Not chosen',
          type: INPUT_TYPES.float,
          value: model.approvedSumRecord,
          errors: modelErrors.approvedSumRecord,
          onChange: val => modelFormActions.changeField('approvedSumRecord', val),
          onValid: () => modelFormActions.resetFieldError('approvedSumRecord'),
          onInvalid: err => modelFormActions.setFieldError('approvedSumRecord', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
have_time-bool
time_entry_end_date-datetime
    </React.Fragment>
  );
};
export default EditComponent