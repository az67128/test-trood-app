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
  views: {
    default: 'payment #{id}',
  },
  meta: {
    id: {
      type: 'number',
      optional: true,
    },
    author: {
      type: 'object',
      linkMeta: 'employee',
      linkType: 'inner',
      optional: false,
    },
    sumPayment: {
      type: 'number',
      optional: false,
    },
    client: {
      type: 'object',
      linkMeta: 'client',
      linkType: 'inner',
      optional: false,
    },
    number: {
      type: 'string',
      optional: true,
    },
    created: {
      type: 'datetime',
      optional: true,
    },
    paymentDate: {
      type: 'datetime',
      optional: true,
    },
    matter: {
      type: 'object',
      linkMeta: 'matter',
      linkType: 'inner',
      optional: true,
    },
    bill: {
      type: 'object',
      linkMeta: 'bill',
      linkType: 'inner',
      optional: true,
    },
  },
}