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
}