import { RestifyForeignKey, RestifyGenericForeignKey } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    author: new RestifyForeignKey('employee'),
    file: undefined,
    targetObject: new RestifyGenericForeignKey([
      'activity',
      'matter',
      'client',
      'invoice',
      'candidate',
      'employee',
      'bill',
    ]),
    documentType: undefined,
    created: undefined,
    docCustomType: new RestifyForeignKey('docCustomType'),
    description: undefined,
    filename: undefined,
  },
  name: 'document',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
  views: {
    default: 'document #{id}',
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
    file: {
      type: 'string',
      optional: false,
    },
    targetObject: {
      type: 'generic',
      linkMetaList: [
        'activity',
        'matter',
        'client',
        'invoice',
        'candidate',
        'employee',
        'bill',
      ],
      linkType: 'inner',
      optional: false,
    },
    documentType: {
      type: 'string',
      optional: false,
    },
    created: {
      type: 'datetime',
      optional: true,
    },
    docCustomType: {
      type: 'object',
      linkMeta: 'doc_custom_type',
      linkType: 'inner',
      optional: true,
    },
    description: {
      type: 'string',
      optional: true,
    },
    filename: {
      type: 'string',
      optional: false,
    },
  },
}