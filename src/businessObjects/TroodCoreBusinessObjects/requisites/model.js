import { RestifyForeignKey, RestifyForeignKeysArray } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    legalName: undefined,
    inn: undefined,
    legalAddress: undefined,
    ogrn: undefined,
    kpp: undefined,
    director: undefined,
    accaunter: undefined,
    client: new RestifyForeignKey('client'),
    bankDetailsSet: new RestifyForeignKeysArray('bankDetails', { allowNested: false }),
  },
  name: 'requisites',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
  views: {
    default: 'requisites #{id}',
  },
  meta: {
    id: {
      type: 'number',
      optional: true,
    },
    legal_name: {
      type: 'string',
      optional: true,
    },
    inn: {
      type: 'string',
      optional: true,
    },
    legal_address: {
      type: 'string',
      optional: true,
    },
    ogrn: {
      type: 'string',
      optional: true,
    },
    kpp: {
      type: 'string',
      optional: true,
    },
    director: {
      type: 'string',
      optional: true,
    },
    accaunter: {
      type: 'string',
      optional: true,
    },
    client: {
      type: 'object',
      linkMeta: 'client',
      linkType: 'inner',
      optional: true,
    },
    bank_details_set: {
      type: 'array',
      linkMeta: 'bank_details',
      linkType: 'outer',
      optional: true,
    },
  },
}