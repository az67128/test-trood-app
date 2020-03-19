import { RestifyForeignKeysArray } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    code: undefined,
    name: undefined,
    order: undefined,
    priceSet: new RestifyForeignKeysArray('price', { allowNested: false }),
  },
  name: 'priceUnit',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
}