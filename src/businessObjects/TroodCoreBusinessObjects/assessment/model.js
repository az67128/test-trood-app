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
  views: {
    default: 'assessment #{id}',
  },
  meta: {
    id: {
      type: 'number',
      optional: true,
    },
    rating: {
      type: 'number',
      optional: false,
    },
    rewiewer: {
      type: 'object',
      linkMeta: 'employee',
      linkType: 'inner',
      optional: false,
    },
    details: {
      type: 'string',
      optional: false,
    },
    created: {
      type: 'datetime',
      optional: true,
    },
    is_min: {
      type: 'bool',
      optional: true,
    },
    is_max: {
      type: 'bool',
      optional: true,
    },
    team_member: {
      type: 'object',
      linkMeta: 'team_member',
      linkType: 'inner',
      optional: false,
    },
  },
}