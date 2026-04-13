import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  todos: [],
}

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      })
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    },
    toggleCompleted: (state, action) => {
      state.todos = state.todos.map(todo => {
        if (todo.id !== action.payload) return

        todo.completed = !todo.completed

        return todo
      })
    },
  },
})

export default todosSlice
