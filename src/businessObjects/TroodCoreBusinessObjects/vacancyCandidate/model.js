import { RestifyForeignKey, RestifyForeignKeysArray } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    recruiter: new RestifyForeignKey('employee'),
    candidateStatus: new RestifyForeignKey('candidateStatus'),
    resolveCandidate: new RestifyForeignKey('resolveCandidate'),
    candidate: new RestifyForeignKey('candidate'),
    vacancy: new RestifyForeignKey('vacancy'),
    created: undefined,
    statusDate: undefined,
    resolveDate: undefined,
    commentSet: new RestifyForeignKeysArray('comment', { allowNested: false }),
  },
  name: 'vacancyCandidate',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
  views: {
    default: 'vacancy_candidate #{id}',
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
    candidateStatus: {
      type: 'object',
      linkMeta: 'candidate_status',
      linkType: 'inner',
      optional: false,
    },
    resolveCandidate: {
      type: 'object',
      linkMeta: 'resolve_candidate',
      linkType: 'inner',
      optional: false,
    },
    candidate: {
      type: 'object',
      linkMeta: 'candidate',
      linkType: 'inner',
      optional: false,
    },
    vacancy: {
      type: 'object',
      linkMeta: 'vacancy',
      linkType: 'inner',
      optional: false,
    },
    created: {
      type: 'datetime',
      optional: true,
    },
    statusDate: {
      type: 'datetime',
      optional: true,
    },
    resolveDate: {
      type: 'datetime',
      optional: true,
    },
    commentSet: {
      type: 'generic',
      linkMeta: 'comment',
      linkType: 'outer',
      optional: true,
    },
  },
}