import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  fruits: [
    { id: 1, name: "Banana" },
    { id: 2, name: "Apple" },
    { id: 3, name: "Pineapple" },
  ],
}

const fruitsSlice = createSlice({
  name: "fruits",
  initialState,
  reducers: {
    addFruit: (state, action) => {
      state.fruits.push({ id: Date.now(), name: action.payload })
    },
    deleteFruit: (state, action) => {
      state.fruits = state.fruits.filter(fruit => fruit.id !== action.payload)
    },
  },
})

export const { addFruit, deleteFruit } = fruitsSlice.actions

export default fruitsSlice
