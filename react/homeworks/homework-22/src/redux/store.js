import { configureStore } from "@reduxjs/toolkit"
import quoteReducer from "./slices/quoteSlice"

const store = configureStore({
  reducer: {
    quote: quoteReducer,
  },
})

export default store
