import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  add,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectTodos,
} from './counterSlice'
import styles from './Counter.module.css'

export function Counter() {
  const todos = useSelector(selectTodos)
  const dispatch = useDispatch()

  const [todo, setTodo] = useState({ name: '', important: false, id: 1 })

  const handleChange = (e) => {
    setTodo((prevState) => {
      return { ...prevState, name: e.target.value }
    })
  }

  const handleImportance = (e) => {
    setTodo((prevState) => {
      return {
        ...prevState,
        important: e.target.value === 'important' ? true : false,
      }
    })
  }

  const handleSend = () => {
    dispatch(add(todo))

    setTodo((prevState) => {
      return {
        ...prevState,
        important: false,
        name: '',
      }
    })
  }

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <button onClick={handleSend}> add todo</button>
      <select onChange={handleImportance}>
        <option value="important">important</option>
        <option value="notimportant">not important</option>
      </select>

      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.name} {todo.important === true ? '❗️' : '😎'} {todo.id}
        </div>
      ))}
    </div>
  )
}
