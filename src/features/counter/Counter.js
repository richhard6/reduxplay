import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  add,
  remove,
  toggleEditing,
  saveNewContent,
  incrementIfOdd,
  selectTodos,
} from './counterSlice'
import styles from './Counter.module.css'

export function Counter() {
  const todos = useSelector(selectTodos)
  const dispatch = useDispatch()

  const [todo, setTodo] = useState({
    name: '',
    important: false,
    isEditing: false,
    id: 1,
  })

  const [newContent, setNewContent] = useState([])

  const handleChange = (e) => {
    setTodo((prevState) => {
      return { ...prevState, name: e.target.value }
    })
  }

  const handleImportance = (e) => {
    console.log(e)
    setTodo((prevState) => {
      return {
        ...prevState,
        important: e.target.value === 'important' ? true : false,
      }
    })
  }

  const handleSend = (e) => {
    e.preventDefault()
    dispatch(add(todo))

    console.log(todo)

    setTodo((prevState) => {
      return {
        ...prevState,
        important: false,
        name: '',
        id: prevState.id + 1,
        isEditing: false,
      }
    })
  }

  const handleDelete = (id) => {
    dispatch(remove(id))
    console.log(id)
  }

  const toggleEdit = (id) => {
    dispatch(toggleEditing(id))
  }

  const handleSaveNewContent = (e) => {
    e.preventDefault()
    dispatch(saveNewContent(newContent))
  }

  //seria bueno hacer focus al abrir la edicion

  return (
    <div className={styles.container}>
      <form className={styles.input} onSubmit={handleSend}>
        <input
          placeholder="add todo"
          value={todo.name}
          type="text"
          onChange={handleChange}
        />
        <button> add todo</button>
        <select
          onChange={handleImportance}
          value={todo.important === false ? 'notimportant' : 'important'}
        >
          <option value="important">important</option>
          <option value="notimportant">not important</option>
        </select>
      </form>

      <ul className={styles.list}>
        {todos.map((todo) => (
          <li
            className={todo.important === true ? styles.important : null}
            key={todo.id}
          >
            {todo.isEditing && (
              <i className={styles.icon} onClick={() => handleDelete(todo.id)}>
                x
              </i>
            )}
            {todo.name} {todo.important === true ? '❗️' : '😎'}
            <i onClick={() => toggleEdit(todo.id)}>✍🏻</i>
            {todo.isEditing && (
              <form onSubmit={handleSaveNewContent}>
                <input
                  placeholder="update todo"
                  onChange={(e) => setNewContent([todo.id, e.target.value])}
                />
                <button>save</button>
              </form>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
