import { RestifyForeignKey, RestifyForeignKeysArray } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    author: new RestifyForeignKey('employee'),
    number: undefined,
    bill: new RestifyForeignKey('bill'),
    file: undefined,
    created: undefined,
    documentSet: new RestifyForeignKeysArray('document', { allowNested: false }),
  },
  name: 'invoice',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
}