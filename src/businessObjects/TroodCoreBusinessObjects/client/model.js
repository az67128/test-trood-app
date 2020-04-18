import { RestifyForeignKey, RestifyForeignKeysArray } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    name: undefined,
    clientActiveStatus: new RestifyForeignKey('clientActiveStatus'),
    responsible: new RestifyForeignKey('employee'),
    clientType: new RestifyForeignKey('clientType'),
    created: undefined,
    conflictCheckDate: undefined,
    revenue: undefined,
    contactSet: new RestifyForeignKeysArray('contact', { allowNested: false }),
    commentSet: new RestifyForeignKeysArray('comment', { allowNested: false }),
    documentSet: new RestifyForeignKeysArray('document', { allowNested: false }),
    conflictFirmSet: new RestifyForeignKeysArray('conflictFirm', { allowNested: false }),
    contactPersonSet: new RestifyForeignKeysArray('contactPerson', { allowNested: false }),
    matterSet: new RestifyForeignKeysArray('matter', { allowNested: false }),
    requisitesSet: new RestifyForeignKeysArray('requisites', { allowNested: false }),
    conflictStatus: new RestifyForeignKey('conflictStatus'),
    clientRateSet: new RestifyForeignKeysArray('clientRate', { allowNested: false }),
  },
  name: 'client',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
  views: {
    default: 'client #{id}',
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
    client_active_status: {
      type: 'object',
      linkMeta: 'client_active_status',
      linkType: 'inner',
      optional: false,
    },
    responsible: {
      type: 'object',
      linkMeta: 'employee',
      linkType: 'inner',
      optional: false,
    },
    client_type: {
      type: 'object',
      linkMeta: 'client_type',
      linkType: 'inner',
      optional: false,
    },
    created: {
      type: 'datetime',
      optional: true,
    },
    conflict_check_date: {
      type: 'datetime',
      optional: true,
    },
    revenue: {
      type: 'number',
      optional: true,
    },
    contact_set: {
      type: 'generic',
      linkMeta: 'contact',
      linkType: 'outer',
      optional: true,
    },
    comment_set: {
      type: 'generic',
      linkMeta: 'comment',
      linkType: 'outer',
      optional: true,
    },
    document_set: {
      type: 'generic',
      linkMeta: 'document',
      linkType: 'outer',
      optional: true,
    },
    conflict_firm_set: {
      type: 'array',
      linkMeta: 'conflict_firm',
      linkType: 'outer',
      optional: true,
    },
    contact_person_set: {
      type: 'array',
      linkMeta: 'contact_person',
      linkType: 'outer',
      optional: true,
    },
    matter_set: {
      type: 'array',
      linkMeta: 'matter',
      linkType: 'outer',
      optional: true,
    },
    requisites_set: {
      type: 'array',
      linkMeta: 'requisites',
      linkType: 'outer',
      optional: true,
    },
    conflict_status: {
      type: 'object',
      linkMeta: 'conflict_status',
      linkType: 'inner',
      optional: true,
    },
    client_rate_set: {
      type: 'array',
      linkMeta: 'client_rate',
      linkType: 'outer',
      optional: true,
    },
  },
}