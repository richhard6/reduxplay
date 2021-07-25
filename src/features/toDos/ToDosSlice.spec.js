import todosReducer, {
  add,
  remove,
  toggleEditing,
  saveNewContent,
  changeImportance,
} from './ToDosSlice'

describe('Todos reducer', () => {
  const initialState = {
    value: [],
  }
  const toAdd = { name: 'test', important: false, isEditing: false, id: 1 }

  it('should handle initial state', () => {
    expect(todosReducer(undefined, { type: 'unknown' })).toEqual({
      value: [],
    })
  })

  it('should handle add todo', () => {
    const actual = todosReducer(initialState, add(toAdd))
    expect(actual.value).toEqual([toAdd])
  })

  it('should handle toggle edit', () => {
    const addedState = todosReducer(initialState, add(toAdd))
    const editedState = todosReducer(addedState, toggleEditing(1))

    expect(editedState.value[0].isEditing).toEqual(true)
  })

  it('should handle decrement', () => {
    const addedState = todosReducer(initialState, add(toAdd))
    const actual = todosReducer(addedState, remove(1))
    expect(actual.value).toEqual([])
  })

  it('should save edited todo ', () => {
    const addedState = todosReducer(initialState, add(toAdd))
    const actual = todosReducer(addedState, saveNewContent([1, 'edited']))
    console.log(actual)
    expect(actual.value[0].name).toEqual('edited')
  })

  it('should have changed importance ', () => {
    const addedState = todosReducer(initialState, add(toAdd))
    const actual = todosReducer(addedState, changeImportance(1))
    console.log(actual)
    expect(actual.value[0].important).toEqual(true)
  })
})
