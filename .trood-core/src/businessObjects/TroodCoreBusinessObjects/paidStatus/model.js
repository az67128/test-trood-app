import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    code: undefined,
    name: undefined,
    order: undefined,
  },
  name: 'paidStatus',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
}