import { RestifyForeignKey } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    companyCode: undefined,
    name: undefined,
    client: new RestifyForeignKey('client'),
    created: undefined,
    urAdress: undefined,
    details: undefined,
  },
  name: 'conflictFirm',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
}