import { RestifyForeignKey, RestifyForeignKeysArray } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    matter: new RestifyForeignKey('matter'),
    employee: new RestifyForeignKeysArray('employee', { allowNested: false }),
  },
  name: 'billPriceList',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
  views: {
    default: 'bill_price_list #{id}',
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
    employee: {
      type: 'objects',
      linkMeta: 'employee',
      linkType: 'inner',
      optional: false,
    },
  },
}