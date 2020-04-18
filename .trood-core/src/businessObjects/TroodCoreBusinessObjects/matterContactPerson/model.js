import { RestifyForeignKey } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    matter: new RestifyForeignKey('matter'),
    contactPerson: new RestifyForeignKey('contactPerson'),
  },
  name: 'matterContactPerson',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
  views: {
    default: 'matter__contact_person #{id}',
  },
  meta: {
    id: {
      type: 'number',
      optional: true,
    },
    matter: {
      type: 'object',
      linkMeta: 'matter',
      linkType: 'inner',
      optional: false,
    },
    contact_person: {
      type: 'object',
      linkMeta: 'contact_person',
      linkType: 'inner',
      optional: false,
    },
  },
}