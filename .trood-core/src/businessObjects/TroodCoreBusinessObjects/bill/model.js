import { RestifyForeignKey, RestifyForeignKeysArray } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    number: undefined,
    approver: new RestifyForeignKey('employee'),
    matter: new RestifyForeignKey('matter'),
    created: undefined,
    approvedDate: undefined,
    billStatus: new RestifyForeignKey('billStatus'),
    dateInvoiceSent: undefined,
    sumBill: undefined,
    totalSumPayment: undefined,
    deleted: undefined,
    timeEntrySet: new RestifyForeignKeysArray('timeEntry', { allowNested: false }),
    expenseSet: new RestifyForeignKeysArray('expense', { allowNested: false }),
    invoiceSet: new RestifyForeignKeysArray('invoice', { allowNested: false }),
    documentSet: new RestifyForeignKeysArray('document', { allowNested: false }),
    paymentSet: new RestifyForeignKeysArray('payment', { allowNested: false }),
    dateFullPaid: undefined,
  },
  name: 'bill',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
  views: {
    default: 'bill #{id}',
  },
  meta: {
    id: {
      type: 'number',
      optional: true,
    },
    number: {
      type: 'string',
      optional: false,
    },
    approver: {
      type: 'object',
      linkMeta: 'employee',
      linkType: 'inner',
      optional: false,
    },
    matter: {
      type: 'object',
      linkMeta: 'matter',
      linkType: 'inner',
      optional: false,
    },
    created: {
      type: 'datetime',
      optional: true,
    },
    approvedDate: {
      type: 'datetime',
      optional: true,
    },
    billStatus: {
      type: 'object',
      linkMeta: 'bill_status',
      linkType: 'inner',
      optional: true,
    },
    dateInvoiceSent: {
      type: 'datetime',
      optional: true,
    },
    sumBill: {
      type: 'number',
      optional: true,
    },
    totalSumPayment: {
      type: 'number',
      optional: true,
    },
    deleted: {
      type: 'bool',
      optional: true,
    },
    timeEntrySet: {
      type: 'array',
      linkMeta: 'time_entry',
      linkType: 'outer',
      optional: true,
    },
    expenseSet: {
      type: 'array',
      linkMeta: 'expense',
      linkType: 'outer',
      optional: true,
    },
    invoiceSet: {
      type: 'array',
      linkMeta: 'invoice',
      linkType: 'outer',
      optional: true,
    },
    documentSet: {
      type: 'generic',
      linkMeta: 'document',
      linkType: 'outer',
      optional: true,
    },
    paymentSet: {
      type: 'array',
      linkMeta: 'payment',
      linkType: 'outer',
      optional: true,
    },
    dateFullPaid: {
      type: 'datetime',
      optional: true,
    },
  },
}