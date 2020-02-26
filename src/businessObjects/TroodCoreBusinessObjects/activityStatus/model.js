import { RestifyForeignKeysArray } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    code: undefined,
    name: undefined,
    order: undefined,
    activitySet: new RestifyForeignKeysArray('activity', { allowNested: false }),
  },
  name: 'activityStatus',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
}