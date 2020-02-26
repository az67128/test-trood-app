import { RestifyForeignKeysArray } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    code: undefined,
    name: undefined,
    order: undefined,
    vacancySet: new RestifyForeignKeysArray('vacancy', { allowNested: false }),
  },
  name: 'vacancyStatus',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
}