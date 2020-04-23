import { RestifyForeignKey } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    startDate: undefined,
    endDate: undefined,
    paid: undefined,
    requestVacation: new RestifyForeignKey('requestVacation'),
    created: undefined,
    author: new RestifyForeignKey('employee'),
    vacationIs: new RestifyForeignKey('employee'),
  },
  name: 'vacationPeriod',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
  views: {
    default: 'vacation_period #{id}',
  },
  meta: {
    id: {
      type: 'number',
      optional: true,
    },
    startDate: {
      type: 'datetime',
      optional: false,
    },
    endDate: {
      type: 'datetime',
      optional: false,
    },
    paid: {
      type: 'bool',
      optional: false,
    },
    requestVacation: {
      type: 'object',
      linkMeta: 'request_vacation',
      linkType: 'inner',
      optional: true,
    },
    created: {
      type: 'datetime',
      optional: true,
    },
    author: {
      type: 'object',
      linkMeta: 'employee',
      linkType: 'inner',
      optional: false,
    },
    vacationIs: {
      type: 'object',
      linkMeta: 'employee',
      linkType: 'inner',
      optional: false,
    },
  },
}