import { RestifyForeignKey } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    bankName: undefined,
    bankAddress: undefined,
    bik: undefined,
    ks: undefined,
    rs: undefined,
    requisites: new RestifyForeignKey('requisites'),
    inn: undefined,
    kpp: undefined,
    swift: undefined,
    iban: undefined,
  },
  name: 'bankDetails',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
}