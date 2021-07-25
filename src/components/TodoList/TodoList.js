import { useSelector } from 'react-redux'
import { selectTodos } from '../../features/toDos/toDosSlice'
import { List } from './TodoListStyle'
import Todo from '../Todo/Todo'

function TodoList() {
  const todos = useSelector(selectTodos)
  return (
    <List>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </List>
  )
}

export default TodoList
