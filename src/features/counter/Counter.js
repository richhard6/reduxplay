import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  add,
  remove,
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
    // laas dos primeras veces no suma
    dispatch(add(todo))

    console.log(todo)

    setTodo((prevState) => {
      return {
        ...prevState,
        important: false,
        name: '',
        id: prevState.id + 1,
      }
    })
  }

  const handleDelete = (id) => {
    dispatch(remove(id))
    console.log(id)
  }

  return (
    <div>
      <input value={todo.name} type="text" onChange={handleChange} />
      <button onClick={handleSend}> add todo</button>
      <select onChange={handleImportance}>
        <option value="important">important</option>
        <option value="notimportant">not important</option>
      </select>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <i onClick={() => handleDelete(todo.id)}>x</i>
            {todo.name} {todo.important === true ? '❗️' : '😎'}
          </li>
        ))}
      </ul>
    </div>
  )
}
