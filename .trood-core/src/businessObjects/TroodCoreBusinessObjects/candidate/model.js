import { RestifyForeignKey, RestifyForeignKeysArray } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    recruiter: new RestifyForeignKey('employee'),
    name: undefined,
    created: undefined,
    avatar: undefined,
    cvRecordSet: new RestifyForeignKeysArray('cvRecord', { allowNested: false }),
    documentSet: new RestifyForeignKeysArray('document', { allowNested: false }),
    contactSet: new RestifyForeignKeysArray('contact', { allowNested: false }),
    vacancyCandidateSet: new RestifyForeignKeysArray('vacancyCandidate', { allowNested: false }),
  },
  name: 'candidate',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
  views: {
    default: 'candidate #{id}',
  },
  meta: {
    id: {
      type: 'number',
      optional: true,
    },
    recruiter: {
      type: 'object',
      linkMeta: 'employee',
      linkType: 'inner',
      optional: false,
    },
    name: {
      type: 'string',
      optional: false,
    },
    created: {
      type: 'datetime',
      optional: true,
    },
    avatar: {
      type: 'string',
      optional: true,
    },
    cv_record_set: {
      type: 'generic',
      linkMeta: 'cv_record',
      linkType: 'outer',
      optional: true,
    },
    document_set: {
      type: 'generic',
      linkMeta: 'document',
      linkType: 'outer',
      optional: true,
    },
    contact_set: {
      type: 'generic',
      linkMeta: 'contact',
      linkType: 'outer',
      optional: true,
    },
    vacancy_candidate_set: {
      type: 'array',
      linkMeta: 'vacancy_candidate',
      linkType: 'outer',
      optional: true,
    },
  },
}