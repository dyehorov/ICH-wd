import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const BASE_URL = "https://dummyjson.com/quotes/random"

export const fetchQuote = createAsyncThunk(
  "quote/fetchQuote",
  async (_, thunkApi) => {
    try {
      const response = await axios.get(`${BASE_URL}`)

      if (response.status > 399) {
        console.log("Client error")

        throw new Error("Error: Failed to fetch quote")
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

const quoteSlice = createSlice({
  name: "quote",
  initialState: {
    quote: [],
    status: "idle",
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchQuote.pending, setLoading)
      .addCase(fetchQuote.fulfilled, (state, action) => {
        state.status = "succeeded"
        state.quote = action.payload
      })
      .addCase(fetchQuote.rejected, setError)
  },
})

export default quoteSlice.reducer
