import { RestifyForeignKey, RestifyForeignKeysArray } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    name: undefined,
    responsible: new RestifyForeignKey('employee'),
    executor: new RestifyForeignKey('employee'),
    activityStatus: new RestifyForeignKey('activityStatus'),
    matter: new RestifyForeignKey('matter'),
    important: undefined,
    created: undefined,
    details: undefined,
    start: undefined,
    deadline: undefined,
    deleted: undefined,
    documentSet: new RestifyForeignKeysArray('document', { allowNested: false }),
    commentSet: new RestifyForeignKeysArray('comment', { allowNested: false }),
    timeEntrySet: new RestifyForeignKeysArray('timeEntry', { allowNested: false }),
    activityType: new RestifyForeignKey('activityType'),
    invitationList: new RestifyForeignKey('invitationList'),
    activityAccessStatus: new RestifyForeignKey('activityAccessStatus'),
    haveTime: undefined,
  },
  name: 'activity',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
  views: {
    default: 'activity #{id}',
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
    responsible: {
      type: 'object',
      linkMeta: 'employee',
      linkType: 'inner',
      optional: false,
    },
    executor: {
      type: 'object',
      linkMeta: 'employee',
      linkType: 'inner',
      optional: true,
    },
    activityStatus: {
      type: 'object',
      linkMeta: 'activity_status',
      linkType: 'inner',
      optional: false,
    },
    matter: {
      type: 'object',
      linkMeta: 'matter',
      linkType: 'inner',
      optional: true,
    },
    important: {
      type: 'bool',
      optional: true,
    },
    created: {
      type: 'datetime',
      optional: true,
    },
    details: {
      type: 'string',
      optional: true,
    },
    start: {
      type: 'datetime',
      optional: true,
    },
    deadline: {
      type: 'datetime',
      optional: true,
    },
    deleted: {
      type: 'bool',
      optional: true,
    },
    documentSet: {
      type: 'generic',
      linkMeta: 'document',
      linkType: 'outer',
      optional: true,
    },
    commentSet: {
      type: 'generic',
      linkMeta: 'comment',
      linkType: 'outer',
      optional: true,
    },
    timeEntrySet: {
      type: 'array',
      linkMeta: 'time_entry',
      linkType: 'outer',
      optional: true,
    },
    activityType: {
      type: 'object',
      linkMeta: 'activity_type',
      linkType: 'inner',
      optional: false,
    },
    invitationList: {
      type: 'object',
      linkMeta: 'invitation_list',
      linkType: 'inner',
      optional: true,
    },
    activityAccessStatus: {
      type: 'object',
      linkMeta: 'activity_access_status',
      linkType: 'inner',
      optional: false,
    },
    haveTime: {
      type: 'bool',
      optional: true,
    },
  },
}