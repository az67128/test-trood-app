import { RestifyForeignKey, RestifyForeignKeysArray } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    recruiter: new RestifyForeignKey('employee'),
    name: undefined,
    vacancyStatus: new RestifyForeignKey('vacancyStatus'),
    details: undefined,
    created: undefined,
    vacancyCandidateSet: new RestifyForeignKeysArray('vacancyCandidate', { allowNested: false }),
  },
  name: 'vacancy',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
  views: {
    default: 'vacancy #{id}',
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
    vacancy_status: {
      type: 'object',
      linkMeta: 'vacancy_status',
      linkType: 'inner',
      optional: false,
    },
    details: {
      type: 'string',
      optional: true,
    },
    created: {
      type: 'datetime',
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