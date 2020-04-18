import { RestifyForeignKey } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    priority: undefined,
    employee: new RestifyForeignKey('employee'),
    requestVacation: new RestifyForeignKey('requestVacation'),
    approve: undefined,
    comment: undefined,
    approveDate: undefined,
  },
  name: 'approver',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
  views: {
    default: 'approver #{id}',
  },
  meta: {
    id: {
      type: 'number',
      optional: true,
    },
    priority: {
      type: 'number',
      optional: false,
    },
    employee: {
      type: 'object',
      linkMeta: 'employee',
      linkType: 'inner',
      optional: false,
    },
    request_vacation: {
      type: 'object',
      linkMeta: 'request_vacation',
      linkType: 'inner',
      optional: true,
    },
    approve: {
      type: 'string',
      optional: true,
    },
    comment: {
      type: 'string',
      optional: true,
    },
    approve_date: {
      type: 'datetime',
      optional: true,
    },
  },
}