import { configureStore } from "@reduxjs/toolkit"
import postsReducer from "./slices/postsSlice"
import todosReducer from "./slices/todoSlice"

const store = configureStore({
  reducer: {
    posts: postsReducer,
    todos: todosReducer,
  },
})

export default store
