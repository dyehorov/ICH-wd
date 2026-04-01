import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  value: 0,
  length: 1,
}

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: state => {
      state.value++
      state.length = Math.abs(state.value).toString().length
    },
    decrement: state => {
      state.value--
      state.length = Math.abs(state.value).toString().length
    },
    reset: state => {
      state.value = 0
      state.length = Math.abs(state.value).toString().length
    },
  },
})

export const { increment, decrement, reset } = counterSlice.actions

export default counterSlice
