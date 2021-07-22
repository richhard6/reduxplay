import { configureStore } from '@reduxjs/toolkit'
import todosReducer from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
})
