import React from 'react'
import { TodoList } from './components/todo-list'
import { Header } from './components/header'

const App = () => (
  <div className="container">
    <Header />
    <TodoList />
  </div>
)

export default App
