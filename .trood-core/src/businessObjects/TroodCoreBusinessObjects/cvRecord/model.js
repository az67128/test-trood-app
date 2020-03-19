import { RestifyForeignKey, RestifyGenericForeignKey } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    author: new RestifyForeignKey('employee'),
    title: undefined,
    description: undefined,
    targetObject: new RestifyGenericForeignKey([
      'candidate',
      'employee',
    ]),
    created: undefined,
  },
  name: 'cvRecord',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
}