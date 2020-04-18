import { RestifyForeignKey, RestifyForeignKeysArray } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    employee: new RestifyForeignKey('employee'),
    matter: new RestifyForeignKey('matter'),
    rateType: new RestifyForeignKey('rateType'),
    rate: undefined,
    assessmentSet: new RestifyForeignKeysArray('assessment', { allowNested: false }),
  },
  name: 'teamMember',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
  views: {
    default: 'team_member #{id}',
  },
  meta: {
    id: {
      type: 'number',
      optional: true,
    },
    employee: {
      type: 'object',
      linkMeta: 'employee',
      linkType: 'inner',
      optional: false,
    },
    matter: {
      type: 'object',
      linkMeta: 'matter',
      linkType: 'inner',
      optional: false,
    },
    rate_type: {
      type: 'object',
      linkMeta: 'rate_type',
      linkType: 'inner',
      optional: false,
    },
    rate: {
      type: 'number',
      optional: false,
    },
    assessment_set: {
      type: 'array',
      linkMeta: 'assessment',
      linkType: 'outer',
      optional: true,
    },
  },
}