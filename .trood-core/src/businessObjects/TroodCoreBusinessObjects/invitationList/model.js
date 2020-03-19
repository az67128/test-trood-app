import { RestifyForeignKeysArray } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    employee: new RestifyForeignKeysArray('employee', { allowNested: false }),
    invitationListEmployeeSet: new RestifyForeignKeysArray('invitationListEmployee', { allowNested: false }),
    activitySet: new RestifyForeignKeysArray('activity', { allowNested: false }),
  },
  name: 'invitationList',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
}