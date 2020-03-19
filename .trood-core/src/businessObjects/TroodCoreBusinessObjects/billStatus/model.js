import { RestifyForeignKeysArray } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    code: undefined,
    name: undefined,
    order: undefined,
    billSet: new RestifyForeignKeysArray('bill', { allowNested: false }),
  },
  name: 'billStatus',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
}