import { RestifyForeignKeysArray } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    code: undefined,
    name: undefined,
    order: undefined,
    clientSet: new RestifyForeignKeysArray('client', { allowNested: false }),
  },
  name: 'clientActiveStatus',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
}