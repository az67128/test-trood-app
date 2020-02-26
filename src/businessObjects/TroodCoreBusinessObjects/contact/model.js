import { RestifyForeignKey, RestifyGenericForeignKey } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    contactType: new RestifyForeignKey('contactType'),
    value: undefined,
    targetObject: new RestifyGenericForeignKey([
      'employee',
      'contactPerson',
      'client',
      'candidate',
    ]),
  },
  name: 'contact',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
}