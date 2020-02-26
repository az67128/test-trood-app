import { RestifyForeignKey, RestifyGenericForeignKey } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    author: new RestifyForeignKey('employee'),
    comment: undefined,
    targetObject: new RestifyGenericForeignKey([
      'activity',
      'matter',
      'client',
      'candidate',
      'vacancyCandidate',
    ]),
    created: undefined,
  },
  name: 'comment',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
}