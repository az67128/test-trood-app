import { RestifyForeignKeysArray } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    code: undefined,
    name: undefined,
    order: undefined,
    vacancyCandidateSet: new RestifyForeignKeysArray('vacancyCandidate', { allowNested: false }),
  },
  name: 'resolveCandidate',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
}