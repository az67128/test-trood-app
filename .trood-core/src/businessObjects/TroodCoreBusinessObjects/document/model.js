import { RestifyForeignKey, RestifyGenericForeignKey } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    author: new RestifyForeignKey('employee'),
    file: undefined,
    targetObject: new RestifyGenericForeignKey([
      'activity',
      'matter',
      'client',
      'invoice',
      'candidate',
      'employee',
      'bill',
    ]),
    documentType: undefined,
    created: undefined,
    docCustomType: new RestifyForeignKey('docCustomType'),
    description: undefined,
    filename: undefined,
  },
  name: 'document',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
}