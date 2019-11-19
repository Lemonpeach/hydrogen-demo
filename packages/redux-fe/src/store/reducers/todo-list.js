import {
  FETCH_TODO_LIST_PENDING,
  FETCH_TODO_LIST_FUFILLED,
  FETCH_TODO_LIST_ERROR
} from '../thunks/todo-list'

const initialState = {
  loading: false,
  error: false,
  data: []
}

export const todoList = (state = initialState, { type, data }) => {
  switch (type) {
    case FETCH_TODO_LIST_PENDING:
      return {
        ...state,
        loading: true,
        error: false
      }
    case FETCH_TODO_LIST_FUFILLED:
      return {
        ...state,
        loading: false,
        error: false,
        data
      }
    case FETCH_TODO_LIST_ERROR:
      return {
        ...state,
        loading: false,
        error: true
      }
    default:
      return state
  }
}
