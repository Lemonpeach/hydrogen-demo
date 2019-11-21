import React, { createRef } from 'react'
import { useDispatch } from 'react-redux'
import uuid from 'uuid/v4'

const addTodoItem = () => {}

export const TodoList = () => {
  const todoList = []
  const dispatch = useDispatch()
  const newItem = createRef()

  return (
    <React.Fragment>
      <ol className="todo-list">
        {
          todoList.length > 0 && todoList.map(({ id, title }) => (
            <li className="todo-item" key={id}>
              <div>{title}</div>
            </li>
          ))
        }
      </ol>
      <form className="form" onSubmit={event => {
        event.preventDefault()
        addTodoItem({ title: newItem.current.value, id: uuid() })(dispatch)
      }}>
        <input className="input" type="text" name="todo-item" ref={newItem} />
        <button className="button" type="submit">Add</button>
      </form>
    </React.Fragment>
  )
}
