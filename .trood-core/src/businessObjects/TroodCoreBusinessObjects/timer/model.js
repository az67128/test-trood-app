import { RestifyForeignKey } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    timerStatus: new RestifyForeignKey('timerStatus'),
    employee: new RestifyForeignKey('employee'),
    activity: new RestifyForeignKey('activity'),
    start: undefined,
    duration: undefined,
  },
  name: 'timer',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
  views: {
    default: 'timer #{id}',
  },
  meta: {
    id: {
      type: 'number',
      optional: true,
    },
    timer_status: {
      type: 'object',
      linkMeta: 'timer_status',
      linkType: 'inner',
      optional: false,
    },
    employee: {
      type: 'object',
      linkMeta: 'employee',
      linkType: 'inner',
      optional: false,
    },
    activity: {
      type: 'object',
      linkMeta: 'activity',
      linkType: 'inner',
      optional: true,
    },
    start: {
      type: 'datetime',
      optional: true,
    },
    duration: {
      type: 'number',
      optional: true,
    },
  },
}