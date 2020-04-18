import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    name: undefined,
  },
  name: 'docCustomType',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
  views: {
    default: 'doc_custom_type #{id}',
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