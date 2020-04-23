import { RestifyForeignKey, RestifyGenericForeignKey } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    author: new RestifyForeignKey('employee'),
    title: undefined,
    description: undefined,
    targetObject: new RestifyGenericForeignKey([
      'candidate',
      'employee',
    ]),
    created: undefined,
  },
  name: 'cvRecord',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
  views: {
    default: 'cv_record #{id}',
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
    title: {
      type: 'string',
      optional: false,
    },
    description: {
      type: 'string',
      optional: false,
    },
    targetObject: {
      type: 'generic',
      linkMetaList: [
        'candidate',
        'employee',
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