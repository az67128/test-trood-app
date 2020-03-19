import { RestifyForeignKeysArray } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    code: undefined,
    name: undefined,
    order: undefined,
    teamMemberSet: new RestifyForeignKeysArray('teamMember', { allowNested: false }),
  },
  name: 'rateType',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
}