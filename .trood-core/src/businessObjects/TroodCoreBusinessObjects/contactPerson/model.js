import { RestifyForeignKey, RestifyForeignKeysArray } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    name: undefined,
    client: new RestifyForeignKey('client'),
    created: undefined,
    position: undefined,
    details: undefined,
    phone: undefined,
    email: undefined,
    avatar: undefined,
    matterContactPersonSet: new RestifyForeignKeysArray('matterContactPerson', { allowNested: false }),
    contactSet: new RestifyForeignKeysArray('contact', { allowNested: false }),
  },
  name: 'contactPerson',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
}