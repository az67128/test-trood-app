import { RestifyForeignKeysArray } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    code: undefined,
    name: undefined,
    order: undefined,
    timerSet: new RestifyForeignKeysArray('timer', { allowNested: false }),
  },
  name: 'timerStatus',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
}