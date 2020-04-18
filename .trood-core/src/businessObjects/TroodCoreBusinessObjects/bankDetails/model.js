import { RestifyForeignKey } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    bankName: undefined,
    bankAddress: undefined,
    bik: undefined,
    ks: undefined,
    rs: undefined,
    requisites: new RestifyForeignKey('requisites'),
    inn: undefined,
    kpp: undefined,
    swift: undefined,
    iban: undefined,
  },
  name: 'bankDetails',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
  views: {
    default: 'bank_details #{id}',
  },
  meta: {
    id: {
      type: 'number',
      optional: true,
    },
    bank_name: {
      type: 'string',
      optional: true,
    },
    bank_address: {
      type: 'string',
      optional: true,
    },
    bik: {
      type: 'string',
      optional: true,
    },
    ks: {
      type: 'string',
      optional: true,
    },
    rs: {
      type: 'string',
      optional: true,
    },
    requisites: {
      type: 'object',
      linkMeta: 'requisites',
      linkType: 'inner',
      optional: true,
    },
    inn: {
      type: 'string',
      optional: true,
    },
    kpp: {
      type: 'string',
      optional: true,
    },
    swift: {
      type: 'string',
      optional: true,
    },
    iban: {
      type: 'string',
      optional: true,
    },
  },
}