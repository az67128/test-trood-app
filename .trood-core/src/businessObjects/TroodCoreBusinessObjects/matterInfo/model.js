import { RestifyForeignKey } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    author: new RestifyForeignKey('employee'),
    info: undefined,
    matter: new RestifyForeignKey('matter'),
    created: undefined,
  },
  name: 'matterInfo',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
}