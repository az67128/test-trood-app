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
    clientActiveStatus: {
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
    clientType: {
      type: 'object',
      linkMeta: 'client_type',
      linkType: 'inner',
      optional: false,
    },
    created: {
      type: 'datetime',
      optional: true,
    },
    conflictCheckDate: {
      type: 'datetime',
      optional: true,
    },
    revenue: {
      type: 'number',
      optional: true,
    },
    contactSet: {
      type: 'generic',
      linkMeta: 'contact',
      linkType: 'outer',
      optional: true,
    },
    commentSet: {
      type: 'generic',
      linkMeta: 'comment',
      linkType: 'outer',
      optional: true,
    },
    documentSet: {
      type: 'generic',
      linkMeta: 'document',
      linkType: 'outer',
      optional: true,
    },
    conflictFirmSet: {
      type: 'array',
      linkMeta: 'conflict_firm',
      linkType: 'outer',
      optional: true,
    },
    contactPersonSet: {
      type: 'array',
      linkMeta: 'contact_person',
      linkType: 'outer',
      optional: true,
    },
    matterSet: {
      type: 'array',
      linkMeta: 'matter',
      linkType: 'outer',
      optional: true,
    },
    requisitesSet: {
      type: 'array',
      linkMeta: 'requisites',
      linkType: 'outer',
      optional: true,
    },
    conflictStatus: {
      type: 'object',
      linkMeta: 'conflict_status',
      linkType: 'inner',
      optional: true,
    },
    clientRateSet: {
      type: 'array',
      linkMeta: 'client_rate',
      linkType: 'outer',
      optional: true,
    },
  },
}