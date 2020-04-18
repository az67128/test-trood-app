import { RestifyForeignKey } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    author: new RestifyForeignKey('employee'),
    number: undefined,
    bill: new RestifyForeignKey('bill'),
    file: undefined,
    created: undefined,
  },
  name: 'invoice',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
  views: {
    default: 'invoice #{id}',
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
    number: {
      type: 'string',
      optional: true,
    },
    bill: {
      type: 'object',
      linkMeta: 'bill',
      linkType: 'inner',
      optional: false,
    },
    file: {
      type: 'string',
      optional: false,
    },
    created: {
      type: 'datetime',
      optional: true,
    },
  },
}