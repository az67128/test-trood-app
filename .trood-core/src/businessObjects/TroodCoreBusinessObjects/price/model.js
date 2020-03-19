import { RestifyForeignKey } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    number: undefined,
    name: undefined,
    priceUnit: new RestifyForeignKey('priceUnit'),
    amount: undefined,
    author: new RestifyForeignKey('employee'),
    created: undefined,
    utbms: new RestifyForeignKey('utbms'),
    serviceType: new RestifyForeignKey('serviceType'),
  },
  name: 'price',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
}