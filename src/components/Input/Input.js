import { Input as InputHTML, Button } from '../Todo/TodoStyle'
import { Form, Select } from './InputStyle'

function Input({ handleChange, handleImportance, handleSend, todo }) {
  return (
    <Form onSubmit={handleSend}>
      <InputHTML
        placeholder="add todo"
        value={todo.name}
        type="text"
        onChange={handleChange}
      />
      <Button> add</Button>
      <Select
        onChange={handleImportance}
        value={todo.important === false ? 'notimportant' : 'important'}
      >
        <option value="important">important</option>
        <option value="notimportant">not important</option>
      </Select>
    </Form>
  )
}

export default Input
