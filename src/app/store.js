import { configureStore } from '@reduxjs/toolkit'
import todosReducer from '../features/toDos/toDosSlice'

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
})
