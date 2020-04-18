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
    approved_date: {
      type: 'datetime',
      optional: true,
    },
    bill_status: {
      type: 'object',
      linkMeta: 'bill_status',
      linkType: 'inner',
      optional: true,
    },
    date_invoice_sent: {
      type: 'datetime',
      optional: true,
    },
    sum_bill: {
      type: 'number',
      optional: true,
    },
    total_sum_payment: {
      type: 'number',
      optional: true,
    },
    deleted: {
      type: 'bool',
      optional: true,
    },
    time_entry_set: {
      type: 'array',
      linkMeta: 'time_entry',
      linkType: 'outer',
      optional: true,
    },
    expense_set: {
      type: 'array',
      linkMeta: 'expense',
      linkType: 'outer',
      optional: true,
    },
    invoice_set: {
      type: 'array',
      linkMeta: 'invoice',
      linkType: 'outer',
      optional: true,
    },
    document_set: {
      type: 'generic',
      linkMeta: 'document',
      linkType: 'outer',
      optional: true,
    },
    payment_set: {
      type: 'array',
      linkMeta: 'payment',
      linkType: 'outer',
      optional: true,
    },
    date_full_paid: {
      type: 'datetime',
      optional: true,
    },
  },
}