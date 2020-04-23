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
  views: {
    default: 'price #{id}',
  },
  meta: {
    id: {
      type: 'number',
      optional: true,
    },
    number: {
      type: 'number',
      optional: false,
    },
    name: {
      type: 'string',
      optional: false,
    },
    priceUnit: {
      type: 'object',
      linkMeta: 'price_unit',
      linkType: 'inner',
      optional: false,
    },
    amount: {
      type: 'number',
      optional: false,
    },
    author: {
      type: 'object',
      linkMeta: 'employee',
      linkType: 'inner',
      optional: false,
    },
    created: {
      type: 'datetime',
      optional: true,
    },
    utbms: {
      type: 'object',
      linkMeta: 'utbms',
      linkType: 'inner',
      optional: true,
    },
    serviceType: {
      type: 'object',
      linkMeta: 'service_type',
      linkType: 'inner',
      optional: true,
    },
  },
}