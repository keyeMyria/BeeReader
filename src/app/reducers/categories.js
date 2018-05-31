import * as CategoriesActions from '@/actions/categories'

const defaultState = {
  isFetching: false,
  isLoaded: false,
  items: []
}

const Categories = (state = defaultState, action) => {
  switch(action.type) {
    case CategoriesActions.REQUEST:
      return {
        ...state,
        isFetching: true,
        isLoaded: false
      }
    case CategoriesActions.LOAD:
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

export default Categories
