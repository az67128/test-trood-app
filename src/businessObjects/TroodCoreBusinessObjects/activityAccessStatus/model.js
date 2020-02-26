import { RestifyForeignKeysArray } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    code: undefined,
    order: undefined,
    activitySet: new RestifyForeignKeysArray('activity', { allowNested: false }),
  },
  name: 'activityAccessStatus',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
}