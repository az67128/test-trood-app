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
}