function Input({ handleChange, handleImportance, handleSend, todo }) {
  return (
    <form onSubmit={handleSend}>
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
  )
}

export default Input
