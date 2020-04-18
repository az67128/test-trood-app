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
    time_entry_billable: {
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
    time_entry_date: {
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
    approved_duration: {
      type: 'number',
      optional: true,
    },
    approved_date: {
      type: 'datetime',
      optional: true,
    },
    utbms: {
      type: 'object',
      linkMeta: 'utbms',
      linkType: 'inner',
      optional: true,
    },
    time_entry_status: {
      type: 'object',
      linkMeta: 'time_entry_status',
      linkType: 'inner',
      optional: true,
    },
    rate: {
      type: 'number',
      optional: true,
    },
    approve_rate: {
      type: 'number',
      optional: true,
    },
    deleted: {
      type: 'bool',
      optional: true,
    },
    sum_record: {
      type: 'number',
      optional: true,
    },
    approved_sum_record: {
      type: 'number',
      optional: true,
    },
    have_time: {
      type: 'bool',
      optional: true,
    },
    time_entry_end_date: {
      type: 'datetime',
      optional: true,
    },
  },
}