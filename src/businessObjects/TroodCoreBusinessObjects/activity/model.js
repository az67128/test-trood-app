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
    activity_status: {
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
    document_set: {
      type: 'generic',
      linkMeta: 'document',
      linkType: 'outer',
      optional: true,
    },
    comment_set: {
      type: 'generic',
      linkMeta: 'comment',
      linkType: 'outer',
      optional: true,
    },
    time_entry_set: {
      type: 'array',
      linkMeta: 'time_entry',
      linkType: 'outer',
      optional: true,
    },
    activity_type: {
      type: 'object',
      linkMeta: 'activity_type',
      linkType: 'inner',
      optional: false,
    },
    invitation_list: {
      type: 'object',
      linkMeta: 'invitation_list',
      linkType: 'inner',
      optional: true,
    },
    activity_access_status: {
      type: 'object',
      linkMeta: 'activity_access_status',
      linkType: 'inner',
      optional: false,
    },
    have_time: {
      type: 'bool',
      optional: true,
    },
  },
}