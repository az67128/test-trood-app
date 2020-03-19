import { RestifyForeignKeysArray } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    code: undefined,
    name: undefined,
    order: undefined,
    expenseSet: new RestifyForeignKeysArray('expense', { allowNested: false }),
  },
  name: 'expenseType',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
}