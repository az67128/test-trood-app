import { RestifyForeignKey } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    rating: undefined,
    rewiewer: new RestifyForeignKey('employee'),
    details: undefined,
    created: undefined,
    isMin: undefined,
    isMax: undefined,
    teamMember: new RestifyForeignKey('teamMember'),
  },
  name: 'assessment',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
}