import { RestifyForeignKey, RestifyForeignKeysArray } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    recruiter: new RestifyForeignKey('employee'),
    name: undefined,
    created: undefined,
    avatar: undefined,
    commentSet: new RestifyForeignKeysArray('comment', { allowNested: false }),
    cvRecordSet: new RestifyForeignKeysArray('cvRecord', { allowNested: false }),
    documentSet: new RestifyForeignKeysArray('document', { allowNested: false }),
    contactSet: new RestifyForeignKeysArray('contact', { allowNested: false }),
    vacancyCandidateSet: new RestifyForeignKeysArray('vacancyCandidate', { allowNested: false }),
  },
  name: 'candidate',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
}