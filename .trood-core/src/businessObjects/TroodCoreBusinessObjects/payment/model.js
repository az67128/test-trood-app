import { RestifyForeignKey } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    author: new RestifyForeignKey('employee'),
    sumPayment: undefined,
    client: new RestifyForeignKey('client'),
    number: undefined,
    created: undefined,
    paymentDate: undefined,
    matter: new RestifyForeignKey('matter'),
    bill: new RestifyForeignKey('bill'),
  },
  name: 'payment',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
}