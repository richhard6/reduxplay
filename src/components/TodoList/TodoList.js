import { useSelector } from 'react-redux'
import { selectTodos } from '../../features/counter/counterSlice'
import Todo from '../Todo/Todo'

function TodoList({ styles }) {
  const todos = useSelector(selectTodos)
  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <Todo todo={todo} styles={styles} />
      ))}
    </ul>
  )
}

export default TodoList
