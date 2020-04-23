import { RestifyForeignKey, RestifyForeignKeysArray } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    code: undefined,
    name: undefined,
    responsible: new RestifyForeignKey('employee'),
    client: new RestifyForeignKey('client'),
    matterType: new RestifyForeignKey('matterType'),
    matterStatus: new RestifyForeignKey('matterStatus'),
    matterActiveStatus: new RestifyForeignKey('matterActiveStatus'),
    budgetType: new RestifyForeignKey('budgetType'),
    contactPersons: new RestifyForeignKeysArray('contactPerson', { allowNested: false }),
    description: undefined,
    amount: undefined,
    created: undefined,
    totalBillAmount: undefined,
    startDate: undefined,
    endDate: undefined,
    commentSet: new RestifyForeignKeysArray('comment', { allowNested: false }),
    matterInfoSet: new RestifyForeignKeysArray('matterInfo', { allowNested: false }),
    teamMemberSet: new RestifyForeignKeysArray('teamMember', { allowNested: false }),
  },
  name: 'matter',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
  views: {
    default: 'matter #{id}',
  },
  meta: {
    id: {
      type: 'number',
      optional: true,
    },
    code: {
      type: 'string',
      optional: true,
    },
    name: {
      type: 'string',
      optional: false,
    },
    responsible: {
      type: 'object',
      linkMeta: 'employee',
      linkType: 'inner',
      optional: false,
    },
    client: {
      type: 'object',
      linkMeta: 'client',
      linkType: 'inner',
      optional: false,
    },
    matterType: {
      type: 'object',
      linkMeta: 'matter_type',
      linkType: 'inner',
      optional: false,
    },
    matterStatus: {
      type: 'object',
      linkMeta: 'matter_status',
      linkType: 'inner',
      optional: false,
    },
    matterActiveStatus: {
      type: 'object',
      linkMeta: 'matter_active_status',
      linkType: 'inner',
      optional: false,
    },
    budgetType: {
      type: 'object',
      linkMeta: 'budget_type',
      linkType: 'inner',
      optional: false,
    },
    contactPersons: {
      type: 'objects',
      linkMeta: 'contact_person',
      linkType: 'inner',
      optional: true,
    },
    description: {
      type: 'string',
      optional: true,
    },
    amount: {
      type: 'number',
      optional: true,
    },
    created: {
      type: 'datetime',
      optional: true,
    },
    totalBillAmount: {
      type: 'number',
      optional: true,
    },
    startDate: {
      type: 'datetime',
      optional: true,
    },
    endDate: {
      type: 'datetime',
      optional: true,
    },
    commentSet: {
      type: 'generic',
      linkMeta: 'comment',
      linkType: 'outer',
      optional: true,
    },
    matterInfoSet: {
      type: 'array',
      linkMeta: 'matter_info',
      linkType: 'outer',
      optional: true,
    },
    teamMemberSet: {
      type: 'array',
      linkMeta: 'team_member',
      linkType: 'outer',
      optional: true,
    },
  },
}