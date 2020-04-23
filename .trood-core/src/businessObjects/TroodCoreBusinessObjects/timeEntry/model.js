import { RestifyForeignKey } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    author: new RestifyForeignKey('employee'),
    timeEntryBillable: new RestifyForeignKey('timeEntryBillable'),
    name: undefined,
    duration: undefined,
    matter: new RestifyForeignKey('matter'),
    timeEntryDate: undefined,
    created: undefined,
    details: undefined,
    activity: new RestifyForeignKey('activity'),
    bill: new RestifyForeignKey('bill'),
    approvedDuration: undefined,
    approvedDate: undefined,
    utbms: new RestifyForeignKey('utbms'),
    timeEntryStatus: new RestifyForeignKey('timeEntryStatus'),
    rate: undefined,
    approveRate: undefined,
    deleted: undefined,
    sumRecord: undefined,
    approvedSumRecord: undefined,
    haveTime: undefined,
    timeEntryEndDate: undefined,
  },
  name: 'timeEntry',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
  views: {
    default: 'time_entry #{id}',
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
    timeEntryBillable: {
      type: 'object',
      linkMeta: 'time_entry_billable',
      linkType: 'inner',
      optional: false,
    },
    name: {
      type: 'string',
      optional: false,
    },
    duration: {
      type: 'number',
      optional: false,
    },
    matter: {
      type: 'object',
      linkMeta: 'matter',
      linkType: 'inner',
      optional: false,
    },
    timeEntryDate: {
      type: 'datetime',
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
    activity: {
      type: 'object',
      linkMeta: 'activity',
      linkType: 'inner',
      optional: true,
    },
    bill: {
      type: 'object',
      linkMeta: 'bill',
      linkType: 'inner',
      optional: true,
    },
    approvedDuration: {
      type: 'number',
      optional: true,
    },
    approvedDate: {
      type: 'datetime',
      optional: true,
    },
    utbms: {
      type: 'object',
      linkMeta: 'utbms',
      linkType: 'inner',
      optional: true,
    },
    timeEntryStatus: {
      type: 'object',
      linkMeta: 'time_entry_status',
      linkType: 'inner',
      optional: true,
    },
    rate: {
      type: 'number',
      optional: true,
    },
    approveRate: {
      type: 'number',
      optional: true,
    },
    deleted: {
      type: 'bool',
      optional: true,
    },
    sumRecord: {
      type: 'number',
      optional: true,
    },
    approvedSumRecord: {
      type: 'number',
      optional: true,
    },
    haveTime: {
      type: 'bool',
      optional: true,
    },
    timeEntryEndDate: {
      type: 'datetime',
      optional: true,
    },
  },
}