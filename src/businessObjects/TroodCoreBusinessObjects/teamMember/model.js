import { RestifyForeignKey, RestifyForeignKeysArray } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    employee: new RestifyForeignKey('employee'),
    matter: new RestifyForeignKey('matter'),
    rateType: new RestifyForeignKey('rateType'),
    rate: undefined,
    assessmentSet: new RestifyForeignKeysArray('assessment', { allowNested: false }),
  },
  name: 'teamMember',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
}