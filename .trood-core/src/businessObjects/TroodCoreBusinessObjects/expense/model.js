import { RestifyForeignKey } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    author: new RestifyForeignKey('employee'),
    amount: undefined,
    name: undefined,
    created: undefined,
    expenseType: new RestifyForeignKey('expenseType'),
    billiable: undefined,
    details: undefined,
    bill: new RestifyForeignKey('bill'),
    matter: new RestifyForeignKey('matter'),
    expenseDate: undefined,
  },
  name: 'expense',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
}