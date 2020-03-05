import React from 'react'
import style from './editComponent.css'
import modalsStyle from '$trood/styles/modals.css'
import classNames from 'classnames'
import TSelect, { SELECT_TYPES } from '$trood/components/TSelect'
import { RESTIFY_CONFIG } from 'redux-restify'
import DateTimePicker, { PICKER_TYPES } from '$trood/components/DateTimePicker'


const EditComponent = ({
  vacancyApiActions,
  vacancyEntities,
  candidateApiActions,
  candidateEntities,
  resolveCandidateApiActions,
  resolveCandidateEntities,
  candidateStatusApiActions,
  candidateStatusEntities,
  employeeApiActions,
  employeeEntities,
  modelFormActions,
  modelErrors,
  model, 
}) => {
  const [employeeSearch, employeeSearchSet] = React.useState('')
  const employeeModelConfig = RESTIFY_CONFIG.registeredModels.employee
  const employeeApiConfig = {
    filter: {
      q: employeeSearch 
        ? `eq(${employeeModelConfig.idField},${employeeSearch})`
        : '',
      depth: 1,
    },
  }
  const employeeArray = employeeEntities.getArray(employeeApiConfig)
  const employeeArrayIsLoading = employeeEntities.getIsLoadingArray(
    employeeApiConfig,
  )
  const employeeNextPage = employeeEntities.getNextPage(employeeApiConfig)
  const employeeNextPageAction = () => {
    if (employeeNextPage) {
      employeeApiActions.loadNextPage(employeeApiConfig)
    }
  }
      
  const [candidateStatusSearch, candidateStatusSearchSet] = React.useState('')
  const candidateStatusModelConfig = RESTIFY_CONFIG.registeredModels.candidateStatus
  const candidateStatusApiConfig = {
    filter: {
      q: candidateStatusSearch 
        ? `eq(${candidateStatusModelConfig.idField},${candidateStatusSearch})`
        : '',
      depth: 1,
    },
  }
  const candidateStatusArray = candidateStatusEntities.getArray(candidateStatusApiConfig)
  const candidateStatusArrayIsLoading = candidateStatusEntities.getIsLoadingArray(
    candidateStatusApiConfig,
  )
  const candidateStatusNextPage = candidateStatusEntities.getNextPage(candidateStatusApiConfig)
  const candidateStatusNextPageAction = () => {
    if (candidateStatusNextPage) {
      candidateStatusApiActions.loadNextPage(candidateStatusApiConfig)
    }
  }
      
  const [resolveCandidateSearch, resolveCandidateSearchSet] = React.useState('')
  const resolveCandidateModelConfig = RESTIFY_CONFIG.registeredModels.resolveCandidate
  const resolveCandidateApiConfig = {
    filter: {
      q: resolveCandidateSearch 
        ? `eq(${resolveCandidateModelConfig.idField},${resolveCandidateSearch})`
        : '',
      depth: 1,
    },
  }
  const resolveCandidateArray = resolveCandidateEntities.getArray(resolveCandidateApiConfig)
  const resolveCandidateArrayIsLoading = resolveCandidateEntities.getIsLoadingArray(
    resolveCandidateApiConfig,
  )
  const resolveCandidateNextPage = resolveCandidateEntities.getNextPage(resolveCandidateApiConfig)
  const resolveCandidateNextPageAction = () => {
    if (resolveCandidateNextPage) {
      resolveCandidateApiActions.loadNextPage(resolveCandidateApiConfig)
    }
  }
      
  const [candidateSearch, candidateSearchSet] = React.useState('')
  const candidateModelConfig = RESTIFY_CONFIG.registeredModels.candidate
  const candidateApiConfig = {
    filter: {
      q: candidateSearch 
        ? `eq(${candidateModelConfig.idField},${candidateSearch})`
        : '',
      depth: 1,
    },
  }
  const candidateArray = candidateEntities.getArray(candidateApiConfig)
  const candidateArrayIsLoading = candidateEntities.getIsLoadingArray(
    candidateApiConfig,
  )
  const candidateNextPage = candidateEntities.getNextPage(candidateApiConfig)
  const candidateNextPageAction = () => {
    if (candidateNextPage) {
      candidateApiActions.loadNextPage(candidateApiConfig)
    }
  }
      
  const [vacancySearch, vacancySearchSet] = React.useState('')
  const vacancyModelConfig = RESTIFY_CONFIG.registeredModels.vacancy
  const vacancyApiConfig = {
    filter: {
      q: vacancySearch 
        ? `eq(${vacancyModelConfig.idField},${vacancySearch})`
        : '',
      depth: 1,
    },
  }
  const vacancyArray = vacancyEntities.getArray(vacancyApiConfig)
  const vacancyArrayIsLoading = vacancyEntities.getIsLoadingArray(
    vacancyApiConfig,
  )
  const vacancyNextPage = vacancyEntities.getNextPage(vacancyApiConfig)
  const vacancyNextPageAction = () => {
    if (vacancyNextPage) {
      vacancyApiActions.loadNextPage(vacancyApiConfig)
    }
  }
      
  return (
    <div className={classNames(style.root, modalsStyle.root)}>
      <TSelect
        {...{
          className: modalsStyle.control,
          items: employeeArray.map(item => ({
            value: item[employeeModelConfig.idField], 
            label: item.name || item[employeeModelConfig.idField],
          })),
          values: model.recruiter 
            ? [model.recruiter] 
            : [],
          onChange: vals => modelFormActions.changeField('recruiter',
            vals[0],
          ),
          onSearch: (value) => employeeSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: employeeArrayIsLoading ? '' : undefined,
          onScrollToEnd: employeeNextPageAction,
          isLoading: employeeArrayIsLoading,
          missingValueResolver: value => employeeEntities.getById(value)['recruiter'],
          label: 'recruiter',
          errors: modelErrors.recruiter,
          onValid: () => modelFormActions.resetFieldError('recruiter'),
          onInvalid: err => modelFormActions.setFieldError('recruiter', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: true,
          placeHolder: 'Not set',
        }}
      />
      <TSelect
        {...{
          className: modalsStyle.control,
          items: candidateStatusArray.map(item => ({
            value: item[candidateStatusModelConfig.idField], 
            label: item.name || item[candidateStatusModelConfig.idField],
          })),
          values: model.candidateStatus 
            ? [model.candidateStatus] 
            : [],
          onChange: vals => modelFormActions.changeField('candidateStatus',
            vals[0],
          ),
          onSearch: (value) => candidateStatusSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: candidateStatusArrayIsLoading ? '' : undefined,
          onScrollToEnd: candidateStatusNextPageAction,
          isLoading: candidateStatusArrayIsLoading,
          missingValueResolver: value => candidateStatusEntities.getById(value)['candidateStatus'],
          label: 'candidateStatus',
          errors: modelErrors.candidateStatus,
          onValid: () => modelFormActions.resetFieldError('candidateStatus'),
          onInvalid: err => modelFormActions.setFieldError('candidateStatus', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: true,
          placeHolder: 'Not set',
        }}
      />
      <TSelect
        {...{
          className: modalsStyle.control,
          items: resolveCandidateArray.map(item => ({
            value: item[resolveCandidateModelConfig.idField], 
            label: item.name || item[resolveCandidateModelConfig.idField],
          })),
          values: model.resolveCandidate 
            ? [model.resolveCandidate] 
            : [],
          onChange: vals => modelFormActions.changeField('resolveCandidate',
            vals[0],
          ),
          onSearch: (value) => resolveCandidateSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: resolveCandidateArrayIsLoading ? '' : undefined,
          onScrollToEnd: resolveCandidateNextPageAction,
          isLoading: resolveCandidateArrayIsLoading,
          missingValueResolver: value => resolveCandidateEntities.getById(value)['resolveCandidate'],
          label: 'resolveCandidate',
          errors: modelErrors.resolveCandidate,
          onValid: () => modelFormActions.resetFieldError('resolveCandidate'),
          onInvalid: err => modelFormActions.setFieldError('resolveCandidate', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: true,
          placeHolder: 'Not set',
        }}
      />
      <TSelect
        {...{
          className: modalsStyle.control,
          items: candidateArray.map(item => ({
            value: item[candidateModelConfig.idField], 
            label: item.name || item[candidateModelConfig.idField],
          })),
          values: model.candidate 
            ? [model.candidate] 
            : [],
          onChange: vals => modelFormActions.changeField('candidate',
            vals[0],
          ),
          onSearch: (value) => candidateSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: candidateArrayIsLoading ? '' : undefined,
          onScrollToEnd: candidateNextPageAction,
          isLoading: candidateArrayIsLoading,
          missingValueResolver: value => candidateEntities.getById(value)['candidate'],
          label: 'candidate',
          errors: modelErrors.candidate,
          onValid: () => modelFormActions.resetFieldError('candidate'),
          onInvalid: err => modelFormActions.setFieldError('candidate', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: true,
          placeHolder: 'Not set',
        }}
      />
      <TSelect
        {...{
          className: modalsStyle.control,
          items: vacancyArray.map(item => ({
            value: item[vacancyModelConfig.idField], 
            label: item.name || item[vacancyModelConfig.idField],
          })),
          values: model.vacancy 
            ? [model.vacancy] 
            : [],
          onChange: vals => modelFormActions.changeField('vacancy',
            vals[0],
          ),
          onSearch: (value) => vacancySearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: vacancyArrayIsLoading ? '' : undefined,
          onScrollToEnd: vacancyNextPageAction,
          isLoading: vacancyArrayIsLoading,
          missingValueResolver: value => vacancyEntities.getById(value)['vacancy'],
          label: 'vacancy',
          errors: modelErrors.vacancy,
          onValid: () => modelFormActions.resetFieldError('vacancy'),
          onInvalid: err => modelFormActions.setFieldError('vacancy', err),
          type: SELECT_TYPES.filterDropdown,
          multi: false,
          clearable: true,
          placeHolder: 'Not set',
        }}
      />
      <DateTimePicker
          {...{
            label: 'created',
            className: modalsStyle.control,
            value: model.created,
            errors: modelErrors.created,
            onChange: val => modelFormActions.changeField('created', val),
            onValid: () => modelFormActions.resetFieldError('created'),
            onInvalid: err => modelFormActions.setFieldError('created', err),
            type: PICKER_TYPES.dateTime,
            validate: {
              checkOnBlur: true,
              requiredDate: false,
              requiredTime: false,

          },
        }}
      />
      <DateTimePicker
          {...{
            label: 'statusDate',
            className: modalsStyle.control,
            value: model.statusDate,
            errors: modelErrors.statusDate,
            onChange: val => modelFormActions.changeField('statusDate', val),
            onValid: () => modelFormActions.resetFieldError('statusDate'),
            onInvalid: err => modelFormActions.setFieldError('statusDate', err),
            type: PICKER_TYPES.dateTime,
            validate: {
              checkOnBlur: true,
              requiredDate: false,
              requiredTime: false,

          },
        }}
      />
      <DateTimePicker
          {...{
            label: 'resolveDate',
            className: modalsStyle.control,
            value: model.resolveDate,
            errors: modelErrors.resolveDate,
            onChange: val => modelFormActions.changeField('resolveDate', val),
            onValid: () => modelFormActions.resetFieldError('resolveDate'),
            onInvalid: err => modelFormActions.setFieldError('resolveDate', err),
            type: PICKER_TYPES.dateTime,
            validate: {
              checkOnBlur: true,
              requiredDate: false,
              requiredTime: false,

          },
        }}
      />
    </div>
  )
}
export default EditComponent