import { RestifyForeignKeysArray } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    employee: new RestifyForeignKeysArray('employee', { allowNested: false }),
    activitySet: new RestifyForeignKeysArray('activity', { allowNested: false }),
  },
  name: 'invitationList',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
  views: {
    default: 'invitation_list #{id}',
  },
  meta: {
    id: {
      type: 'number',
      optional: true,
    },
    employee: {
      type: 'objects',
      linkMeta: 'employee',
      linkType: 'inner',
      optional: false,
    },
    activitySet: {
      type: 'array',
      linkMeta: 'activity',
      linkType: 'outer',
      optional: true,
    },
  },
}