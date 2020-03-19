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
}