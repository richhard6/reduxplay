import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchCount } from './counterAPI'

const initialState = {
  value: [],
}

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount) => {
    const response = await fetchCount(amount)
    // The value we return becomes the `fulfilled` action payload
    return response.data
  }
)

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    add: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = [...state.value, action.payload]
    },
    remove: (state, action) => {
      const newValue = state.value.map((todo) => {
        return todo.id === action.payload
      })

      const slicer = newValue.indexOf(true)

      state.value = [
        ...state.value.slice(0, slicer),
        ...state.value.slice(slicer + 1, state.value.length),
      ]
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        state.value += action.payload
      })
  },
})

export const { add, remove, incrementByAmount } = todosSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectTodos = (state) => state.todos.value

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.

export default todosSlice.reducer
