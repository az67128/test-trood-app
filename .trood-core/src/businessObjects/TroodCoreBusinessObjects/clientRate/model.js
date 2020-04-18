import { RestifyForeignKey } from 'redux-restify'
import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    client: new RestifyForeignKey('client'),
    employeePosition: new RestifyForeignKey('employeePosition'),
    rate: undefined,
  },
  name: 'clientRate',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
  views: {
    default: 'client_rate #{id}',
  },
  meta: {
    id: {
      type: 'number',
      optional: true,
    },
    client: {
      type: 'object',
      linkMeta: 'client',
      linkType: 'inner',
      optional: false,
    },
    employee_position: {
      type: 'object',
      linkMeta: 'employee_position',
      linkType: 'inner',
      optional: false,
    },
    rate: {
      type: 'number',
      optional: false,
    },
  },
}