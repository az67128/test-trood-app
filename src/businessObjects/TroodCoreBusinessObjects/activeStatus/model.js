import { messages } from '$trood/mainConstants'
export default {
  defaults: {
    id: undefined,
    name: undefined,
    order: undefined,
  },
  name: 'activeStatus',
  deletion: {
    confirm: true,
    message: messages.deletionQuestion,
  },
}