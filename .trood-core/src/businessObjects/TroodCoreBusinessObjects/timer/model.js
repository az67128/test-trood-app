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
}