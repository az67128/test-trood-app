import { RestifyForeignKeysArray } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    code: undefined,
    name: undefined,
    order: undefined,
    employeeSet: new RestifyForeignKeysArray('employee', { allowNested: false }),
  },
  name: 'employeeRole',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
}