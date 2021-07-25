import {
  remove,
  toggleEditing,
  saveNewContent,
  changeImportance,
} from '../../features/toDos/toDosSlice'

import { ListItem, Icon, Wrapper, Input, Button } from './TodoStyle'

import { useDispatch } from 'react-redux'

import { useState } from 'react'

function Todo({ todo }) {
  const [newContent, setNewContent] = useState([])

  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(remove(id))
  }

  const toggleEdit = (id) => {
    dispatch(toggleEditing(id))
  }

  const handleSaveNewContent = (e) => {
    e.preventDefault()
    dispatch(saveNewContent(newContent))
  }

  const handleChangeImportance = (id) => {
    dispatch(changeImportance(id))
  }

  return (
    <ListItem importance={todo.important}>
      <Wrapper>
        <Wrapper>
          {todo.isEditing && (
            <Icon
              delete
              isEditing={todo.isEditing}
              onClick={() => handleDelete(todo.id)}
            >
              ❌
            </Icon>
          )}
          <Icon
            isEditing={todo.isEditing}
            onClick={() => todo.isEditing && handleChangeImportance(todo.id)}
          >
            {todo.important === true ? '❗️' : '😎'}{' '}
          </Icon>
        </Wrapper>
        {todo.name}{' '}
        <Icon isEditing={true} onClick={() => toggleEdit(todo.id)}>
          ✍🏻
        </Icon>
      </Wrapper>
      {todo.isEditing && (
        <form onSubmit={handleSaveNewContent}>
          <Input
            placeholder="update todo or change importance clicking @icon"
            onChange={(e) => setNewContent([todo.id, e.target.value])}
          />
          <Button>save</Button>
        </form>
      )}
    </ListItem>
  )
}

export default Todo
