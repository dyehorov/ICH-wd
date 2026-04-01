import { configureStore } from "@reduxjs/toolkit"
import counterSlice from "./slices/counterSlice"
import fruitsSlice from "./slices/fruitsSlice"

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    fruits: fruitsSlice.reducer,
  },
})

export default store
// or you can export like this - export default configureStore()
