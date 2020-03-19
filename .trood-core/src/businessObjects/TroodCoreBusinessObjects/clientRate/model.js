import { RestifyForeignKey } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    client: new RestifyForeignKey('client'),
    employeePosition: new RestifyForeignKey('employeePosition'),
    rate: undefined,
  },
  name: 'clientRate',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
}