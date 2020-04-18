import { RestifyForeignKey, RestifyForeignKeysArray } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    name: undefined,
    position: new RestifyForeignKey('employeePosition'),
    role: new RestifyForeignKey('employeeRole'),
    email: undefined,
    rate: undefined,
    account: undefined,
    active: undefined,
    created: undefined,
    avatar: undefined,
    phone: undefined,
    totalRating: undefined,
    contactSet: new RestifyForeignKeysArray('contact', { allowNested: false }),
    cvRecordSet: new RestifyForeignKeysArray('cvRecord', { allowNested: false }),
    documentSet: new RestifyForeignKeysArray('document', { allowNested: false }),
  },
  name: 'employee',
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
    position: {
      type: 'object',
      linkMeta: 'employee_position',
      linkType: 'inner',
      optional: false,
    },
    role: {
      type: 'object',
      linkMeta: 'employee_role',
      linkType: 'inner',
      optional: false,
    },
    email: {
      type: 'string',
      optional: false,
    },
    rate: {
      type: 'number',
      optional: false,
    },
    account: {
      type: 'number',
      optional: true,
    },
    active: {
      type: 'bool',
      optional: true,
    },
    created: {
      type: 'datetime',
      optional: true,
    },
    avatar: {
      type: 'string',
      optional: true,
    },
    phone: {
      type: 'string',
      optional: true,
    },
    total_rating: {
      type: 'number',
      optional: true,
    },
    contact_set: {
      type: 'generic',
      linkMeta: 'contact',
      linkType: 'outer',
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
  },
}