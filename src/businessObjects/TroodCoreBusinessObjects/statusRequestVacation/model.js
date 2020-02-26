import { RestifyForeignKeysArray } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    code: undefined,
    name: undefined,
    order: undefined,
    requestVacationSet: new RestifyForeignKeysArray('requestVacation', { allowNested: false }),
  },
  name: 'statusRequestVacation',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
}