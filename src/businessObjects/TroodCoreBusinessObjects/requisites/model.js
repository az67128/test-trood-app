import { RestifyForeignKey, RestifyForeignKeysArray } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    legalName: undefined,
    inn: undefined,
    legalAddress: undefined,
    ogrn: undefined,
    kpp: undefined,
    director: undefined,
    accaunter: undefined,
    client: new RestifyForeignKey('client'),
    bankDetailsSet: new RestifyForeignKeysArray('bankDetails', { allowNested: false }),
  },
  name: 'requisites',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
}