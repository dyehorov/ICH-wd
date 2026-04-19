import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const BASE_URL = "https://jsonplaceholder.typicode.com"

export const fetchTodos = createAsyncThunk(
  "posts/fetchPosts",
  async (_, thunkApi) => {
    try {
      const response = await axios.get(`${BASE_URL}/todos`)

      if (response.status > 399) {
        console.log("Client error")

        throw new Error("Error: Failed to fetch posts")
      }

      return response.data
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  },
)

export const deleteTodo = createAsyncThunk(
  "posts/fetchPosts",
  async (id, thunkApi) => {
    try {
      const response = await axios.delete(`${BASE_URL}/todos/${id}`)

      if (response.status > 399) {
        console.log("Client error")

        throw new Error("Error: Failed to fetch posts")
      }

      return response.data
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  },
)

const setLoading = state => {
  state.status = "loading"
  state.error = null
}

const setError = (state, action) => {
  state.status = "failed"
  state.error = action.payload
}

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    data: [],
    status: "idle", // loading, succeeded, failed
    error: null,
  },
  reducers: {
    clear(state, action) {
      localStorage.clear()
    },
  },
  extraReducers: builder => {
    builder
      .addCase(todosSlice.pending, setLoading)
      .addCase(todosSlice.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.data = action.payload
      })
      .addCase(todosSlice.rejected, setError)
  },
})

export const { clear } = todosSlice.actions

export default todosSlice.reducer
