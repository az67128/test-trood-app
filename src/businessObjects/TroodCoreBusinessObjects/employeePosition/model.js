import { RestifyForeignKeysArray } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    name: undefined,
    employeeSet: new RestifyForeignKeysArray('employee', { allowNested: false }),
    clientRateSet: new RestifyForeignKeysArray('clientRate', { allowNested: false }),
  },
  name: 'employeePosition',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
}