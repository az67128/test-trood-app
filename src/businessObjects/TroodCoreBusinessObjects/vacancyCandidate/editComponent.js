import React, { useState } from 'react'
import style from './editComponent.css'
import modalsStyle from '$trood/styles/modals.css'
import classNames from 'classnames'
import { RESTIFY_CONFIG } from 'redux-restify'
import { templateApplyValues } from '$trood/helpers/templates'
import { PICKER_TYPES } from '$trood/components/DateTimePicker'


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
  ModalComponents, 
}) => {
  const [employeeSearch, employeeSearchSet] = useState('')
  const employeeModelConfig = RESTIFY_CONFIG.registeredModels.employee
  const employeeTemplate = employeeModelConfig.views.selectOption ||
    employeeModelConfig.views.default ||
    `employee/{${employeeModelConfig.idField}}`
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
      
  const [candidateStatusSearch, candidateStatusSearchSet] = useState('')
  const candidateStatusModelConfig = RESTIFY_CONFIG.registeredModels.candidateStatus
  const candidateStatusTemplate = candidateStatusModelConfig.views.selectOption ||
    candidateStatusModelConfig.views.default ||
    `candidateStatus/{${candidateStatusModelConfig.idField}}`
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
      
  const [resolveCandidateSearch, resolveCandidateSearchSet] = useState('')
  const resolveCandidateModelConfig = RESTIFY_CONFIG.registeredModels.resolveCandidate
  const resolveCandidateTemplate = resolveCandidateModelConfig.views.selectOption ||
    resolveCandidateModelConfig.views.default ||
    `resolveCandidate/{${resolveCandidateModelConfig.idField}}`
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
      
  const [candidateSearch, candidateSearchSet] = useState('')
  const candidateModelConfig = RESTIFY_CONFIG.registeredModels.candidate
  const candidateTemplate = candidateModelConfig.views.selectOption ||
    candidateModelConfig.views.default ||
    `candidate/{${candidateModelConfig.idField}}`
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
      
  const [vacancySearch, vacancySearchSet] = useState('')
  const vacancyModelConfig = RESTIFY_CONFIG.registeredModels.vacancy
  const vacancyTemplate = vacancyModelConfig.views.selectOption ||
    vacancyModelConfig.views.default ||
    `vacancy/{${vacancyModelConfig.idField}}`
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
      <ModalComponents.ModalSelect
        {...{
          fieldName: 'recruiter',
          items: employeeArray.map(item => ({
            value: item[employeeModelConfig.idField], 
            label: templateApplyValues(employeeTemplate, item),
          })),
          onSearch: (value) => employeeSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: employeeArrayIsLoading ? '' : undefined,
          onScrollToEnd: employeeNextPageAction,
          isLoading: employeeArrayIsLoading,
          missingValueResolver: value => 
            employeeEntities.getById(value)[employeeModelConfig.idField],
          multi: false,
          clearable: false,
        }}
      />
      <ModalComponents.ModalSelect
        {...{
          fieldName: 'candidateStatus',
          items: candidateStatusArray.map(item => ({
            value: item[candidateStatusModelConfig.idField], 
            label: templateApplyValues(candidateStatusTemplate, item),
          })),
          onSearch: (value) => candidateStatusSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: candidateStatusArrayIsLoading ? '' : undefined,
          onScrollToEnd: candidateStatusNextPageAction,
          isLoading: candidateStatusArrayIsLoading,
          missingValueResolver: value => 
            candidateStatusEntities.getById(value)[candidateStatusModelConfig.idField],
          multi: false,
          clearable: false,
        }}
      />
      <ModalComponents.ModalSelect
        {...{
          fieldName: 'resolveCandidate',
          items: resolveCandidateArray.map(item => ({
            value: item[resolveCandidateModelConfig.idField], 
            label: templateApplyValues(resolveCandidateTemplate, item),
          })),
          onSearch: (value) => resolveCandidateSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: resolveCandidateArrayIsLoading ? '' : undefined,
          onScrollToEnd: resolveCandidateNextPageAction,
          isLoading: resolveCandidateArrayIsLoading,
          missingValueResolver: value => 
            resolveCandidateEntities.getById(value)[resolveCandidateModelConfig.idField],
          multi: false,
          clearable: false,
        }}
      />
      <ModalComponents.ModalSelect
        {...{
          fieldName: 'candidate',
          items: candidateArray.map(item => ({
            value: item[candidateModelConfig.idField], 
            label: templateApplyValues(candidateTemplate, item),
          })),
          onSearch: (value) => candidateSearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: candidateArrayIsLoading ? '' : undefined,
          onScrollToEnd: candidateNextPageAction,
          isLoading: candidateArrayIsLoading,
          missingValueResolver: value => 
            candidateEntities.getById(value)[candidateModelConfig.idField],
          multi: false,
          clearable: false,
        }}
      />
      <ModalComponents.ModalSelect
        {...{
          fieldName: 'vacancy',
          items: vacancyArray.map(item => ({
            value: item[vacancyModelConfig.idField], 
            label: templateApplyValues(vacancyTemplate, item),
          })),
          onSearch: (value) => vacancySearchSet(value ? encodeURIComponent(value) : ''),
          emptyItemsLabel: vacancyArrayIsLoading ? '' : undefined,
          onScrollToEnd: vacancyNextPageAction,
          isLoading: vacancyArrayIsLoading,
          missingValueResolver: value => 
            vacancyEntities.getById(value)[vacancyModelConfig.idField],
          multi: false,
          clearable: false,
        }}
      />
      <ModalComponents.ModalDateTimePicker
        {...{
          fieldName: 'created',
          type: PICKER_TYPES.dateTime,
          validate: {
            checkOnBlur: true,
            requiredDate: false,
            requiredTime: false,
          },
        }}
      />
      <ModalComponents.ModalDateTimePicker
        {...{
          fieldName: 'statusDate',
          type: PICKER_TYPES.dateTime,
          validate: {
            checkOnBlur: true,
            requiredDate: false,
            requiredTime: false,
          },
        }}
      />
      <ModalComponents.ModalDateTimePicker
        {...{
          fieldName: 'resolveDate',
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