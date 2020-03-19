import { RestifyForeignKeysArray } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    code: undefined,
    name: undefined,
    order: undefined,
    contactSet: new RestifyForeignKeysArray('contact', { allowNested: false }),
  },
  name: 'contactType',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
}