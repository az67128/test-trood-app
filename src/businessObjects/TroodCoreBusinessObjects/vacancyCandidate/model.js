import { RestifyForeignKey, RestifyForeignKeysArray } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    recruiter: new RestifyForeignKey('employee'),
    candidateStatus: new RestifyForeignKey('candidateStatus'),
    resolveCandidate: new RestifyForeignKey('resolveCandidate'),
    candidate: new RestifyForeignKey('candidate'),
    vacancy: new RestifyForeignKey('vacancy'),
    created: undefined,
    statusDate: undefined,
    resolveDate: undefined,
    commentSet: new RestifyForeignKeysArray('comment', { allowNested: false }),
  },
  name: 'vacancyCandidate',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
}