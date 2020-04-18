import { RestifyForeignKey, RestifyForeignKeysArray } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    author: new RestifyForeignKey('employee'),
    statusRequestVacation: new RestifyForeignKey('statusRequestVacation'),
    created: undefined,
    statusDate: undefined,
    number: undefined,
    vacationPeriodSet: new RestifyForeignKeysArray('vacationPeriod', { allowNested: false }),
    approverSet: new RestifyForeignKeysArray('approver', { allowNested: false }),
  },
  name: 'requestVacation',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
  views: {
    default: 'request_vacation #{id}',
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
    status_request_vacation: {
      type: 'object',
      linkMeta: 'status_request_vacation',
      linkType: 'inner',
      optional: true,
    },
    created: {
      type: 'datetime',
      optional: true,
    },
    status_date: {
      type: 'datetime',
      optional: true,
    },
    number: {
      type: 'string',
      optional: true,
    },
    vacation_period_set: {
      type: 'array',
      linkMeta: 'vacation_period',
      linkType: 'outer',
      optional: true,
    },
    approver_set: {
      type: 'array',
      linkMeta: 'approver',
      linkType: 'outer',
      optional: true,
    },
  },
}