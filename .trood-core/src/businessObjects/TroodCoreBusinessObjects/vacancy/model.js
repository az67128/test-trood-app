import { RestifyForeignKey, RestifyForeignKeysArray } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    recruiter: new RestifyForeignKey('employee'),
    name: undefined,
    vacancyStatus: new RestifyForeignKey('vacancyStatus'),
    details: undefined,
    created: undefined,
    vacancyCandidateSet: new RestifyForeignKeysArray('vacancyCandidate', { allowNested: false }),
  },
  name: 'vacancy',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
}