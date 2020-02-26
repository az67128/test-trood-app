import { RestifyForeignKey, RestifyForeignKeysArray } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    name: undefined,
    clientActiveStatus: new RestifyForeignKey('clientActiveStatus'),
    responsible: new RestifyForeignKey('employee'),
    clientType: new RestifyForeignKey('clientType'),
    created: undefined,
    conflictCheckDate: undefined,
    revenue: undefined,
    paymentSet: new RestifyForeignKeysArray('payment', { allowNested: false }),
    contactSet: new RestifyForeignKeysArray('contact', { allowNested: false }),
    commentSet: new RestifyForeignKeysArray('comment', { allowNested: false }),
    documentSet: new RestifyForeignKeysArray('document', { allowNested: false }),
    conflictFirmSet: new RestifyForeignKeysArray('conflictFirm', { allowNested: false }),
    contactPersonSet: new RestifyForeignKeysArray('contactPerson', { allowNested: false }),
    matterSet: new RestifyForeignKeysArray('matter', { allowNested: false }),
    requisitesSet: new RestifyForeignKeysArray('requisites', { allowNested: false }),
    conflictStatus: new RestifyForeignKey('conflictStatus'),
    clientRateSet: new RestifyForeignKeysArray('clientRate', { allowNested: false }),
  },
  name: 'client',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
}