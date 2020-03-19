import { RestifyForeignKey } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    employee: new RestifyForeignKey('employee'),
  },
  name: 'matterEmployee',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
}