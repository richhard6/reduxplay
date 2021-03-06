import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from './toDosSlice.js'
import Input from '../../components/Input/Input'
import TodoList from '../../components/TodoList/TodoList'

import { Container } from './ToDosStyles'

export function ToDos() {
  const dispatch = useDispatch()

  const [todo, setTodo] = useState({
    name: '',
    important: false,
    isEditing: false,
    id: 1,
  })

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

  //seria bueno hacer focus al abrir la edicion

  return (
    <Container>
      <Input
        handleChange={handleChange}
        handleImportance={handleImportance}
        handleSend={handleSend}
        todo={todo}
      />

      <TodoList />
    </Container>
  )
}
