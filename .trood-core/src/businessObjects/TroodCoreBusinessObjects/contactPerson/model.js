import { RestifyForeignKey, RestifyForeignKeysArray } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    name: undefined,
    client: new RestifyForeignKey('client'),
    created: undefined,
    position: undefined,
    details: undefined,
    phone: undefined,
    email: undefined,
    avatar: undefined,
    contactSet: new RestifyForeignKeysArray('contact', { allowNested: false }),
  },
  name: 'contactPerson',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
  views: {
    default: '{name}',
  },
  meta: {
    id: {
      type: 'number',
      optional: true,
    },
    name: {
      type: 'string',
      optional: false,
    },
    client: {
      type: 'object',
      linkMeta: 'client',
      linkType: 'inner',
      optional: false,
    },
    created: {
      type: 'datetime',
      optional: true,
    },
    position: {
      type: 'string',
      optional: true,
    },
    details: {
      type: 'string',
      optional: true,
    },
    phone: {
      type: 'string',
      optional: true,
    },
    email: {
      type: 'string',
      optional: true,
    },
    avatar: {
      type: 'string',
      optional: true,
    },
    contact_set: {
      type: 'generic',
      linkMeta: 'contact',
      linkType: 'outer',
      optional: true,
    },
  },
}