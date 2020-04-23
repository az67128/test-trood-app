import { RestifyForeignKey, RestifyGenericForeignKey } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    author: new RestifyForeignKey('employee'),
    comment: undefined,
    targetObject: new RestifyGenericForeignKey([
      'activity',
      'matter',
      'client',
      'candidate',
      'vacancyCandidate',
    ]),
    created: undefined,
  },
  name: 'comment',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
  views: {
    default: 'comment #{id}',
  },
  meta: {
    id: {
      type: 'number',
      optional: true,
    },
    author: {
      type: 'object',
      linkMeta: 'employee',
      linkType: 'inner',
      optional: false,
    },
    comment: {
      type: 'string',
      optional: false,
    },
    targetObject: {
      type: 'generic',
      linkMetaList: [
        'activity',
        'matter',
        'client',
        'candidate',
        'vacancy_candidate',
      ],
      linkType: 'inner',
      optional: false,
    },
    created: {
      type: 'datetime',
      optional: true,
    },
  },
}