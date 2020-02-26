import { RestifyForeignKey } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    author: new RestifyForeignKey('employee'),
    timeEntryBillable: new RestifyForeignKey('timeEntryBillable'),
    name: undefined,
    duration: undefined,
    matter: new RestifyForeignKey('matter'),
    timeEntryDate: undefined,
    created: undefined,
    details: undefined,
    activity: new RestifyForeignKey('activity'),
    bill: new RestifyForeignKey('bill'),
    approvedDuration: undefined,
    approvedDate: undefined,
    utbms: new RestifyForeignKey('utbms'),
    timeEntryStatus: new RestifyForeignKey('timeEntryStatus'),
    rate: undefined,
    approveRate: undefined,
    deleted: undefined,
    sumRecord: undefined,
    approvedSumRecord: undefined,
    haveTime: undefined,
    timeEntryEndDate: undefined,
  },
  name: 'timeEntry',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
}