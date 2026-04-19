import { configureStore } from "@reduxjs/toolkit"
import questionnaireSlice from "./slices/questionnaireSlice"

const store = configureStore({
  reducer: {
    data: questionnaireSlice.reducer,
  },
})

export default store
