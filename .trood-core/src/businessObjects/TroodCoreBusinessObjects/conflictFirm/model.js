import { RestifyForeignKey } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    companyCode: undefined,
    name: undefined,
    client: new RestifyForeignKey('client'),
    created: undefined,
    urAdress: undefined,
    details: undefined,
  },
  name: 'conflictFirm',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
  views: {
    default: 'conflict_firm #{id}',
  },
  meta: {
    id: {
      type: 'number',
      optional: true,
    },
    company_code: {
      type: 'string',
      optional: true,
    },
    name: {
      type: 'string',
      optional: false,
    },
    client: {
      type: 'object',
      linkMeta: 'client',
      linkType: 'inner',
      optional: false,
    },
    created: {
      type: 'datetime',
      optional: true,
    },
    ur_adress: {
      type: 'string',
      optional: true,
    },
    details: {
      type: 'string',
      optional: true,
    },
  },
}