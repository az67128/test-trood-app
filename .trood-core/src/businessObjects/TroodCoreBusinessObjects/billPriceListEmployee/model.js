import { RestifyForeignKey } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    billPriceList: new RestifyForeignKey('billPriceList'),
    employee: new RestifyForeignKey('employee'),
  },
  name: 'billPriceListEmployee',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
  views: {
    default: 'bill_price_list__employee #{id}',
  },
  meta: {
    id: {
      type: 'number',
      optional: true,
    },
    billPriceList: {
      type: 'object',
      linkMeta: 'bill_price_list',
      linkType: 'inner',
      optional: false,
    },
    employee: {
      type: 'object',
      linkMeta: 'employee',
      linkType: 'inner',
      optional: false,
    },
  },
}