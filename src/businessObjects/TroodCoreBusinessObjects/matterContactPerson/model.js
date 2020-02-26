import { RestifyForeignKey } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    matter: new RestifyForeignKey('matter'),
    contactPerson: new RestifyForeignKey('contactPerson'),
  },
  name: 'matterContactPerson',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
}