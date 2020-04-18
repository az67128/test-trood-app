import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    name: undefined,
  },
  name: 'employeePosition',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
  views: {
    default: '{name}',
  },
  meta: {
    id: {
      type: 'number',
      optional: true,
    },
    name: {
      type: 'string',
      optional: false,
    },
  },
}