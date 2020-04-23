import { RestifyForeignKey } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    employee: new RestifyForeignKey('employee'),
    invitationList: new RestifyForeignKey('invitationList'),
  },
  name: 'invitationListEmployee',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
  views: {
    default: 'invitation_list__employee #{id}',
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
    invitationList: {
      type: 'object',
      linkMeta: 'invitation_list',
      linkType: 'inner',
      optional: true,
    },
  },
}