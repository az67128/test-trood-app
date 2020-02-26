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
}