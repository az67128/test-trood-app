import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    code: undefined,
    name: undefined,
    order: undefined,
  },
  name: 'rateType',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
  views: {
    default: 'rate_type #{id}',
  },
  meta: {
    id: {
      type: 'number',
      optional: true,
    },
    code: {
      type: 'string',
      optional: false,
    },
    name: {
      type: 'string',
      optional: false,
    },
    order: {
      type: 'number',
      optional: false,
    },
  },
}