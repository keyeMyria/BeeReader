import * as SubscriptionsActions from '@/actions/subscriptions'

const defaultState = {
  isFetching: false,
  isLoaded: false,
  items: []
}

const Subscriptions = (state = [], action) => {
  switch(action.type) {
    case SubscriptionsActions.REQUEST:
      return {
        ...state,
        isFetching: true,
        isLoaded: false
      }
    case SubscriptionsActions.LOAD:
      return {
        ...state,
        isFetching: false,
        isLoaded: true,
        items: action.items
      }
    default:
      return state
  }
}

export default Subscriptions
