import { RestifyForeignKeysArray } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    code: undefined,
    name: undefined,
    order: undefined,
    timeEntrySet: new RestifyForeignKeysArray('timeEntry', { allowNested: false }),
  },
  name: 'timeEntryStatus',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
}