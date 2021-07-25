import todosReducer, { add, remove, incrementByAmount } from './counterSlice'

describe('Todos reducer', () => {
  const initialState = {
    value: [],
  }
  it('should handle initial state', () => {
    expect(todosReducer(undefined, { type: 'unknown' })).toEqual({
      value: [],
    })
  })

  it('should handle increment', () => {
    const actual = todosReducer(initialState, add())
    expect(actual.value).toEqual(4)
  })

  it('should handle decrement', () => {
    const actual = todosReducer(initialState, remove())
    expect(actual.value).toEqual(2)
  })

  it('should handle incrementByAmount', () => {
    const actual = todosReducer(initialState, incrementByAmount(2))
    expect(actual.value).toEqual(5)
  })
})
