import { RestifyForeignKeysArray } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    name: undefined,
    documentSet: new RestifyForeignKeysArray('document', { allowNested: false }),
  },
  name: 'docCustomType',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
}