import { RestifyForeignKeysArray } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    code: undefined,
    name: undefined,
    order: undefined,
    matterSet: new RestifyForeignKeysArray('matter', { allowNested: false }),
  },
  name: 'matterActiveStatus',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
}