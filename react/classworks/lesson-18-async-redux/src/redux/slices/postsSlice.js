import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const BASE_URL = "https://jsonplaceholder.typicode.com"

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (_, thunkApi) => {
    try {
      const response = await axios.get(`${BASE_URL}/posts`)

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

const postsSlice = createSlice({
  name: "posts",
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
      .addCase(fetchPosts.pending, setLoading)
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.data = action.payload
      })
      .addCase(fetchPosts.rejected, setError)
  },
})

export const { clear } = postsSlice.actions

export default postsSlice.reducer
