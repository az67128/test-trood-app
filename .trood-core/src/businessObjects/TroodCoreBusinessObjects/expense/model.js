import { RestifyForeignKey } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    author: new RestifyForeignKey('employee'),
    amount: undefined,
    name: undefined,
    created: undefined,
    expenseType: new RestifyForeignKey('expenseType'),
    billiable: undefined,
    details: undefined,
    bill: new RestifyForeignKey('bill'),
    matter: new RestifyForeignKey('matter'),
    expenseDate: undefined,
  },
  name: 'expense',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
  views: {
    default: 'expense #{id}',
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
    amount: {
      type: 'number',
      optional: false,
    },
    name: {
      type: 'string',
      optional: false,
    },
    created: {
      type: 'datetime',
      optional: true,
    },
    expenseType: {
      type: 'object',
      linkMeta: 'expense_type',
      linkType: 'inner',
      optional: true,
    },
    billiable: {
      type: 'bool',
      optional: true,
    },
    details: {
      type: 'string',
      optional: true,
    },
    bill: {
      type: 'object',
      linkMeta: 'bill',
      linkType: 'inner',
      optional: true,
    },
    matter: {
      type: 'object',
      linkMeta: 'matter',
      linkType: 'inner',
      optional: true,
    },
    expenseDate: {
      type: 'datetime',
      optional: true,
    },
  },
}