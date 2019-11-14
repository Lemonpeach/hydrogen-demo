import React, { useEffect, createRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodoList, addTodoList } from '../store/actions/todo-list';

export const TodoList = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTodoList())
  }, [])

  const todoList = useSelector(({ todoList })=> todoList)
  const newItem = createRef()

  return (
    <React.Fragment>
      <ol className="todo-list">
        {
          todoList && todoList.data.map(({ id, title }) => (
            <li className="todo-item" key={id}>
              <div>{title}</div>
            </li>
          ))
        }
      </ol>
      <form className="form" onSubmit={() => dispatch(addTodoList(newItem.current.value))}>
        <input className="input" type="text" name="todo-item" ref={newItem} />
        <button className="button" type="submit">Add</button>
      </form>
    </React.Fragment>
  )
}