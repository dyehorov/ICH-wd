import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  expenses: [],
  isEditting: false,
  editingId: null,
  formValues: { name: "", amount: "" },
}

const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      state.expenses.push(action.payload)
    },
    deleteExpense: (state, action) => {
      state.expenses = state.expenses.filter(
        expense => expense.id !== action.payload,
      )
    },
    editExpense: (state, action) => {
      const expense = state.expenses.find(item => item.id === action.payload)

      if (!expense) return

      state.isEditting = true
      state.editingId = expense.id
      state.formValues = {
        name: expense.name,
        amount: expense.amount,
      }
    },
    updateExpense: (state, action) => {
      const { id, name, amount } = action.payload

      const expense = state.expenses.find(item => item.id === id)

      if (!expense) return

      expense.name = name
      expense.amount = amount

      state.isEditting = false
      state.editingId = null
      state.formValues = {
        name: "",
        amount: "",
      }
    },
  },
})

export const { addExpense, deleteExpense, editExpense, updateExpense } =
  expenseSlice.actions

export default expenseSlice
