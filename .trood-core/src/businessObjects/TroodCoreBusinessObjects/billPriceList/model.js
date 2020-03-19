import { RestifyForeignKey, RestifyForeignKeysArray } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    matter: new RestifyForeignKey('matter'),
    employee: new RestifyForeignKeysArray('employee', { allowNested: false }),
    billPriceListEmployeeSet: new RestifyForeignKeysArray('billPriceListEmployee', { allowNested: false }),
  },
  name: 'billPriceList',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
}