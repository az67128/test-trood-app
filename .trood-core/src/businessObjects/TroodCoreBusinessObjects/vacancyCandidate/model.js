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
    candidate_status: {
      type: 'object',
      linkMeta: 'candidate_status',
      linkType: 'inner',
      optional: false,
    },
    resolve_candidate: {
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
    status_date: {
      type: 'datetime',
      optional: true,
    },
    resolve_date: {
      type: 'datetime',
      optional: true,
    },
    comment_set: {
      type: 'generic',
      linkMeta: 'comment',
      linkType: 'outer',
      optional: true,
    },
  },
}