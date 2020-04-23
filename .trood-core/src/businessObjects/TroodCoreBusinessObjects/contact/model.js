import { RestifyForeignKey, RestifyGenericForeignKey } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    contactType: new RestifyForeignKey('contactType'),
    value: undefined,
    targetObject: new RestifyGenericForeignKey([
      'employee',
      'contactPerson',
      'client',
      'candidate',
    ]),
  },
  name: 'contact',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
  views: {
    default: 'contact #{id}',
  },
  meta: {
    id: {
      type: 'number',
      optional: true,
    },
    contactType: {
      type: 'object',
      linkMeta: 'contact_type',
      linkType: 'inner',
      optional: false,
    },
    value: {
      type: 'string',
      optional: false,
    },
    targetObject: {
      type: 'generic',
      linkMetaList: [
        'employee',
        'contact_person',
        'client',
        'candidate',
      ],
      linkType: 'inner',
      optional: false,
    },
  },
}