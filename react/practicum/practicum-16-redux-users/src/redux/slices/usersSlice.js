import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  users: [],
  isEditting: false,
  editingId: null,
  formValues: { name: "", age: "", email: "" },
}

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload)
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload)
    },
    editUser: (state, action) => {
      const user = state.users.find(item => item.id === action.payload)

      if (!user) return

      state.isEditting = true
      state.editingId = user.id
      state.formValues = {
        name: user.name,
        age: user.age,
        email: user.email,
      }
    },
    updateUser: (state, action) => {
      const { id, name, age, email } = action.payload

      const user = state.users.find(item => item.id === id)

      if (!user) return

      user.name = name
      user.age = age
      user.email = email

      state.isEditting = false
      state.editingId = null
      state.formValues = {
        name: "",
        age: "",
        email: "",
      }
    },
  },
})

export const { addUser, deleteUser, editUser, updateUser } = usersSlice.actions

export default usersSlice
