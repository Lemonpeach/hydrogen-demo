import uuid from 'uuid/v4'
import { client } from '../services'

export const FETCH_TODO_LIST_PENDING = 'FETCH_TODO_LIST_PENDING'
export const FETCH_TODO_LIST_ERROR = 'FETCH_TODO_LIST_ERROR'
export const FETCH_TODO_LIST_FUFILLED = 'FETCH_TODO_LIST_FUFILLED'

export const CREATE_TODO_ITEM_ERROR = 'CREATE_TODO_ITEM_ERROR'
export const CREATE_TODO_ITEM_SUCCESS = 'CREATE_TODO_ITEM_SUCCESS'

export const fetchTodoList = () => async dispatch => {
  dispatch({ type: FETCH_TODO_LIST_PENDING })

  try {
    const todoList = await client.service('todo-list').find()
    dispatch({
      type: FETCH_TODO_LIST_FUFILLED,
      data: todoList
    })
  } catch (error) {
    dispatch({
      type: FETCH_TODO_LIST_ERROR
    })
  }
}

export const addTodoList = title => async dispatch => {
  try {
    const todoItem = await client.service('todo-list').create({
      title,
      id: uuid()
    })
    dispatch({
      type: CREATE_TODO_ITEM_SUCCESS,
      data: todoItem
    })
  } catch (error) {
    dispatch({
      type: CREATE_TODO_ITEM_ERROR
    })
  }
}
