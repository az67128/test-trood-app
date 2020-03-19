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
}