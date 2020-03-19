import { RestifyForeignKey, RestifyForeignKeysArray } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    name: undefined,
    responsible: new RestifyForeignKey('employee'),
    executor: new RestifyForeignKey('employee'),
    activityStatus: new RestifyForeignKey('activityStatus'),
    matter: new RestifyForeignKey('matter'),
    important: undefined,
    created: undefined,
    details: undefined,
    start: undefined,
    deadline: undefined,
    deleted: undefined,
    documentSet: new RestifyForeignKeysArray('document', { allowNested: false }),
    commentSet: new RestifyForeignKeysArray('comment', { allowNested: false }),
    timeEntrySet: new RestifyForeignKeysArray('timeEntry', { allowNested: false }),
    activityType: new RestifyForeignKey('activityType'),
    invitationList: new RestifyForeignKey('invitationList'),
    timerSet: new RestifyForeignKeysArray('timer', { allowNested: false }),
    activityAccessStatus: new RestifyForeignKey('activityAccessStatus'),
    haveTime: undefined,
  },
  name: 'activity',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
}