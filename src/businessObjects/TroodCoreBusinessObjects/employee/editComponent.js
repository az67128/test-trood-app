import React from 'react'
import TInput, { INPUT_TYPES } from '$trood/components/TInput'
import TSelect, { SELECT_TYPES } from '$trood/components/TSelect'
import { getNestedObjectField } from '$trood/helpers/nestedObjects'
import TCheckbox from '$trood/components/TCheckbox'

const EditComponent = ({
  model,
  modelErrors,
  modelFormActions,
  employeePositionEntities,
  employeePositionApiActions,
  employeeRoleEntities,
  employeeRoleApiActions,
  contactEntities,
  contactApiActions,
  cvRecordEntities,
  cvRecordApiActions,
  documentEntities,
  documentApiActions, 
}) => {
      const [employeePositionSearch, employeePositionSearchSet] = React.useState('')
      const employeePositionApiConfig = {
        filter: {
          q: employeePositionSearch ? 'like(name,*' + employeePositionSearch + ')' : '',
          depth: 1,
        },
      }
      const employeePositionArray = employeePositionEntities.getArray(employeePositionApiConfig)
      const employeePositionArrayIsLoading = employeePositionEntities.getIsLoadingArray(employeePositionApiConfig)
      const employeePositionNextPage = employeePositionEntities.getNextPage(employeePositionApiConfig)
      const employeePositionNextPageAction = () => {
        if (employeePositionNextPage) {
          employeePositionApiActions.loadNextPage(employeePositionApiConfig)
        }
      }
      
      const [employeeRoleSearch, employeeRoleSearchSet] = React.useState('')
      const employeeRoleApiConfig = {
        filter: {
          q: employeeRoleSearch ? 'like(name,*' + employeeRoleSearch + ')' : '',
          depth: 1,
        },
      }
      const employeeRoleArray = employeeRoleEntities.getArray(employeeRoleApiConfig)
      const employeeRoleArrayIsLoading = employeeRoleEntities.getIsLoadingArray(employeeRoleApiConfig)
      const employeeRoleNextPage = employeeRoleEntities.getNextPage(employeeRoleApiConfig)
      const employeeRoleNextPageAction = () => {
        if (employeeRoleNextPage) {
          employeeRoleApiActions.loadNextPage(employeeRoleApiConfig)
        }
      }
      
      const [contactSearch, contactSearchSet] = React.useState('')
      const contactApiConfig = {
        filter: {
          q: contactSearch ? 'like(name,*' + contactSearch + ')' : '',
          depth: 1,
        },
      }
      const contactArray = contactEntities.getArray(contactApiConfig)
      const contactArrayIsLoading = contactEntities.getIsLoadingArray(contactApiConfig)
      const contactNextPage = contactEntities.getNextPage(contactApiConfig)
      const contactNextPageAction = () => {
        if (contactNextPage) {
          contactApiActions.loadNextPage(contactApiConfig)
        }
      }
      
      const [cvRecordSearch, cvRecordSearchSet] = React.useState('')
      const cvRecordApiConfig = {
        filter: {
          q: cvRecordSearch ? 'like(name,*' + cvRecordSearch + ')' : '',
          depth: 1,
        },
      }
      const cvRecordArray = cvRecordEntities.getArray(cvRecordApiConfig)
      const cvRecordArrayIsLoading = cvRecordEntities.getIsLoadingArray(cvRecordApiConfig)
      const cvRecordNextPage = cvRecordEntities.getNextPage(cvRecordApiConfig)
      const cvRecordNextPageAction = () => {
        if (cvRecordNextPage) {
          cvRecordApiActions.loadNextPage(cvRecordApiConfig)
        }
      }
      
      const [documentSearch, documentSearchSet] = React.useState('')
      const documentApiConfig = {
        filter: {
          q: documentSearch ? 'like(name,*' + documentSearch + ')' : '',
          depth: 1,
        },
      }
      const documentArray = documentEntities.getArray(documentApiConfig)
      const documentArrayIsLoading = documentEntities.getIsLoadingArray(documentApiConfig)
      const documentNextPage = documentEntities.getNextPage(documentApiConfig)
      const documentNextPageAction = () => {
        if (documentNextPage) {
          documentApiActions.loadNextPage(documentApiConfig)
        }
      }
      
  return (
    <React.Fragment>
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'name',
          placeholder: 'Not chosen',
          value: model.name,
          errors: modelErrors.name,
          onChange: val => modelFormActions.changeField('name', val),
          onValid: () => modelFormActions.resetFieldError('name'),
          onInvalid: err => modelFormActions.setFieldError('name', err),
          validate: {
            checkOnBlur: true,
            required: true,
          },
        }}
      />
      <TSelect
        {...{
          label: 'position',
          items: employeePositionArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.position && [model.position],
          onChange: values => modelFormActions.changeField('position', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('position', errs),
          onValid: () => modelFormActions.resetFieldError('position'),
          errors: getNestedObjectField(modelErrors, 'position'),
          validate: {
            required: true,
            checkOnBlur: true,
          },
          onSearch: (value) => employeePositionSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: employeePositionArrayIsLoading ? '' : undefined,
          onScrollToEnd: employeePositionNextPageAction,
          missingValueResolver: value => employeePositionEntities.getById(value).name,
          isLoading: employeePositionArrayIsLoading,
        }}
      />
      <TSelect
        {...{
          label: 'role',
          items: employeeRoleArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.role && [model.role],
          onChange: values => modelFormActions.changeField('role', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('role', errs),
          onValid: () => modelFormActions.resetFieldError('role'),
          errors: getNestedObjectField(modelErrors, 'role'),
          validate: {
            required: true,
            checkOnBlur: true,
          },
          onSearch: (value) => employeeRoleSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: employeeRoleArrayIsLoading ? '' : undefined,
          onScrollToEnd: employeeRoleNextPageAction,
          missingValueResolver: value => employeeRoleEntities.getById(value).name,
          isLoading: employeeRoleArrayIsLoading,
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'email',
          placeholder: 'Not chosen',
          value: model.email,
          errors: modelErrors.email,
          onChange: val => modelFormActions.changeField('email', val),
          onValid: () => modelFormActions.resetFieldError('email'),
          onInvalid: err => modelFormActions.setFieldError('email', err),
          validate: {
            checkOnBlur: true,
            required: true,
          },
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.float,
          label: 'rate',
          placeholder: 'Not chosen',
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
          type: INPUT_TYPES.float,
          label: 'account',
          placeholder: 'Not chosen',
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
      <TCheckbox
            {...{
            label: 'active',
          placeholder: 'Not chosen',
          value: model.active,
          errors: modelErrors.active,
          onChange: val => modelFormActions.changeField('active', val),
          onValid: () => modelFormActions.resetFieldError('active'),
          onInvalid: err => modelFormActions.setFieldError('active', err),
            validate: {
              checkOnBlur: true,
              required: false,
            },
          }}
        />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'avatar',
          placeholder: 'Not chosen',
          value: model.avatar,
          errors: modelErrors.avatar,
          onChange: val => modelFormActions.changeField('avatar', val),
          onValid: () => modelFormActions.resetFieldError('avatar'),
          onInvalid: err => modelFormActions.setFieldError('avatar', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'phone',
          placeholder: 'Not chosen',
          value: model.phone,
          errors: modelErrors.phone,
          onChange: val => modelFormActions.changeField('phone', val),
          onValid: () => modelFormActions.resetFieldError('phone'),
          onInvalid: err => modelFormActions.setFieldError('phone', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.float,
          label: 'totalRating',
          placeholder: 'Not chosen',
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
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'clientSet',
          placeholder: 'Not chosen',
          value: model.clientSet,
          errors: modelErrors.clientSet,
          onChange: val => modelFormActions.changeField('clientSet', val),
          onValid: () => modelFormActions.resetFieldError('clientSet'),
          onInvalid: err => modelFormActions.setFieldError('clientSet', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'candidateSet',
          placeholder: 'Not chosen',
          value: model.candidateSet,
          errors: modelErrors.candidateSet,
          onChange: val => modelFormActions.changeField('candidateSet', val),
          onValid: () => modelFormActions.resetFieldError('candidateSet'),
          onInvalid: err => modelFormActions.setFieldError('candidateSet', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'matterSet',
          placeholder: 'Not chosen',
          value: model.matterSet,
          errors: modelErrors.matterSet,
          onChange: val => modelFormActions.changeField('matterSet', val),
          onValid: () => modelFormActions.resetFieldError('matterSet'),
          onInvalid: err => modelFormActions.setFieldError('matterSet', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'matterInfoSet',
          placeholder: 'Not chosen',
          value: model.matterInfoSet,
          errors: modelErrors.matterInfoSet,
          onChange: val => modelFormActions.changeField('matterInfoSet', val),
          onValid: () => modelFormActions.resetFieldError('matterInfoSet'),
          onInvalid: err => modelFormActions.setFieldError('matterInfoSet', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'requestVacationSet',
          placeholder: 'Not chosen',
          value: model.requestVacationSet,
          errors: modelErrors.requestVacationSet,
          onChange: val => modelFormActions.changeField('requestVacationSet', val),
          onValid: () => modelFormActions.resetFieldError('requestVacationSet'),
          onInvalid: err => modelFormActions.setFieldError('requestVacationSet', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'vacancySet',
          placeholder: 'Not chosen',
          value: model.vacancySet,
          errors: modelErrors.vacancySet,
          onChange: val => modelFormActions.changeField('vacancySet', val),
          onValid: () => modelFormActions.resetFieldError('vacancySet'),
          onInvalid: err => modelFormActions.setFieldError('vacancySet', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'vacancyCandidateSet',
          placeholder: 'Not chosen',
          value: model.vacancyCandidateSet,
          errors: modelErrors.vacancyCandidateSet,
          onChange: val => modelFormActions.changeField('vacancyCandidateSet', val),
          onValid: () => modelFormActions.resetFieldError('vacancyCandidateSet'),
          onInvalid: err => modelFormActions.setFieldError('vacancyCandidateSet', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'activitySet',
          placeholder: 'Not chosen',
          value: model.activitySet,
          errors: modelErrors.activitySet,
          onChange: val => modelFormActions.changeField('activitySet', val),
          onValid: () => modelFormActions.resetFieldError('activitySet'),
          onInvalid: err => modelFormActions.setFieldError('activitySet', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'billSet',
          placeholder: 'Not chosen',
          value: model.billSet,
          errors: modelErrors.billSet,
          onChange: val => modelFormActions.changeField('billSet', val),
          onValid: () => modelFormActions.resetFieldError('billSet'),
          onInvalid: err => modelFormActions.setFieldError('billSet', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'invoiceSet',
          placeholder: 'Not chosen',
          value: model.invoiceSet,
          errors: modelErrors.invoiceSet,
          onChange: val => modelFormActions.changeField('invoiceSet', val),
          onValid: () => modelFormActions.resetFieldError('invoiceSet'),
          onInvalid: err => modelFormActions.setFieldError('invoiceSet', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'paymentSet',
          placeholder: 'Not chosen',
          value: model.paymentSet,
          errors: modelErrors.paymentSet,
          onChange: val => modelFormActions.changeField('paymentSet', val),
          onValid: () => modelFormActions.resetFieldError('paymentSet'),
          onInvalid: err => modelFormActions.setFieldError('paymentSet', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'timeEntrySet',
          placeholder: 'Not chosen',
          value: model.timeEntrySet,
          errors: modelErrors.timeEntrySet,
          onChange: val => modelFormActions.changeField('timeEntrySet', val),
          onValid: () => modelFormActions.resetFieldError('timeEntrySet'),
          onInvalid: err => modelFormActions.setFieldError('timeEntrySet', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'priceSet',
          placeholder: 'Not chosen',
          value: model.priceSet,
          errors: modelErrors.priceSet,
          onChange: val => modelFormActions.changeField('priceSet', val),
          onValid: () => modelFormActions.resetFieldError('priceSet'),
          onInvalid: err => modelFormActions.setFieldError('priceSet', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'expenseSet',
          placeholder: 'Not chosen',
          value: model.expenseSet,
          errors: modelErrors.expenseSet,
          onChange: val => modelFormActions.changeField('expenseSet', val),
          onValid: () => modelFormActions.resetFieldError('expenseSet'),
          onInvalid: err => modelFormActions.setFieldError('expenseSet', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'commentSet',
          placeholder: 'Not chosen',
          value: model.commentSet,
          errors: modelErrors.commentSet,
          onChange: val => modelFormActions.changeField('commentSet', val),
          onValid: () => modelFormActions.resetFieldError('commentSet'),
          onInvalid: err => modelFormActions.setFieldError('commentSet', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'matterEmployeeSet',
          placeholder: 'Not chosen',
          value: model.matterEmployeeSet,
          errors: modelErrors.matterEmployeeSet,
          onChange: val => modelFormActions.changeField('matterEmployeeSet', val),
          onValid: () => modelFormActions.resetFieldError('matterEmployeeSet'),
          onInvalid: err => modelFormActions.setFieldError('matterEmployeeSet', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'billPriceListEmployeeSet',
          placeholder: 'Not chosen',
          value: model.billPriceListEmployeeSet,
          errors: modelErrors.billPriceListEmployeeSet,
          onChange: val => modelFormActions.changeField('billPriceListEmployeeSet', val),
          onValid: () => modelFormActions.resetFieldError('billPriceListEmployeeSet'),
          onInvalid: err => modelFormActions.setFieldError('billPriceListEmployeeSet', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'invitationListEmployeeSet',
          placeholder: 'Not chosen',
          value: model.invitationListEmployeeSet,
          errors: modelErrors.invitationListEmployeeSet,
          onChange: val => modelFormActions.changeField('invitationListEmployeeSet', val),
          onValid: () => modelFormActions.resetFieldError('invitationListEmployeeSet'),
          onInvalid: err => modelFormActions.setFieldError('invitationListEmployeeSet', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TSelect
        {...{
          label: 'contactSet',
          items: contactArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.contactSet && [model.contactSet],
          onChange: values => modelFormActions.changeField('contactSet', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('contactSet', errs),
          onValid: () => modelFormActions.resetFieldError('contactSet'),
          errors: getNestedObjectField(modelErrors, 'contactSet'),
          validate: {
            required: false,
            checkOnBlur: true,
          },
          onSearch: (value) => contactSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: contactArrayIsLoading ? '' : undefined,
          onScrollToEnd: contactNextPageAction,
          missingValueResolver: value => contactEntities.getById(value).name,
          isLoading: contactArrayIsLoading,
        }}
      />
      <TSelect
        {...{
          label: 'cvRecordSet',
          items: cvRecordArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.cvRecordSet && [model.cvRecordSet],
          onChange: values => modelFormActions.changeField('cvRecordSet', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('cvRecordSet', errs),
          onValid: () => modelFormActions.resetFieldError('cvRecordSet'),
          errors: getNestedObjectField(modelErrors, 'cvRecordSet'),
          validate: {
            required: false,
            checkOnBlur: true,
          },
          onSearch: (value) => cvRecordSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: cvRecordArrayIsLoading ? '' : undefined,
          onScrollToEnd: cvRecordNextPageAction,
          missingValueResolver: value => cvRecordEntities.getById(value).name,
          isLoading: cvRecordArrayIsLoading,
        }}
      />
      <TSelect
        {...{
          label: 'documentSet',
          items: documentArray.map(e => ({ value: e.id, label: e.name })),
          type: SELECT_TYPES.filterDropdown,
          placeholder: 'Not chosen',
          values: model.documentSet && [model.documentSet],
          onChange: values => modelFormActions.changeField('documentSet', values[0]),
          onInvalid: errs => modelFormActions.setFieldError('documentSet', errs),
          onValid: () => modelFormActions.resetFieldError('documentSet'),
          errors: getNestedObjectField(modelErrors, 'documentSet'),
          validate: {
            required: false,
            checkOnBlur: true,
          },
          onSearch: (value) => documentSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: documentArrayIsLoading ? '' : undefined,
          onScrollToEnd: documentNextPageAction,
          missingValueResolver: value => documentEntities.getById(value).name,
          isLoading: documentArrayIsLoading,
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'approverSet',
          placeholder: 'Not chosen',
          value: model.approverSet,
          errors: modelErrors.approverSet,
          onChange: val => modelFormActions.changeField('approverSet', val),
          onValid: () => modelFormActions.resetFieldError('approverSet'),
          onInvalid: err => modelFormActions.setFieldError('approverSet', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'vacationPeriodSet',
          placeholder: 'Not chosen',
          value: model.vacationPeriodSet,
          errors: modelErrors.vacationPeriodSet,
          onChange: val => modelFormActions.changeField('vacationPeriodSet', val),
          onValid: () => modelFormActions.resetFieldError('vacationPeriodSet'),
          onInvalid: err => modelFormActions.setFieldError('vacationPeriodSet', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'timerSet',
          placeholder: 'Not chosen',
          value: model.timerSet,
          errors: modelErrors.timerSet,
          onChange: val => modelFormActions.changeField('timerSet', val),
          onValid: () => modelFormActions.resetFieldError('timerSet'),
          onInvalid: err => modelFormActions.setFieldError('timerSet', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
      <TInput
          {...{
          type: INPUT_TYPES.multi,
          label: 'teamMemberSet',
          placeholder: 'Not chosen',
          value: model.teamMemberSet,
          errors: modelErrors.teamMemberSet,
          onChange: val => modelFormActions.changeField('teamMemberSet', val),
          onValid: () => modelFormActions.resetFieldError('teamMemberSet'),
          onInvalid: err => modelFormActions.setFieldError('teamMemberSet', err),
          validate: {
            checkOnBlur: true,
            required: false,
          },
        }}
      />
    </React.Fragment>
  )
}
export default EditComponent