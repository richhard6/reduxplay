import {
  remove,
  toggleEditing,
  saveNewContent,
} from '../../features/counter/counterSlice'

import { useDispatch } from 'react-redux'

import { useState } from 'react'

function Todo({ todo, styles }) {
  const [newContent, setNewContent] = useState([])

  const dispatch = useDispatch()

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

  return (
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
  )
}

export default Todo
