import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addExpense, updateExpense } from "../../redux/slices/expenseSlice"

export default function ExpenseForm() {
  const [nameValue, setNameValue] = useState("")
  const [amountValue, setAmountValue] = useState("")

  const dispatch = useDispatch()

  const isEditting = useSelector(state => state.expenses.isEditting)
  const formValues = useSelector(state => state.expenses.formValues)
  const editingId = useSelector(state => state.expenses.editingId)

  useEffect(() => {
    if (isEditting) {
      setNameValue(formValues.name)
      setAmountValue(formValues.amount)
    } else {
      setNameValue("")
      setAmountValue("")
    }
  }, [isEditting, formValues])

  const handleSubmit = event => {
    event.preventDefault()

    if (isEditting) {
      dispatch(
        updateExpense({
          id: editingId,
          name: nameValue,
          amount: amountValue,
        }),
      )
      return
    }

    const expense = {
      id: Date.now(),
      name: nameValue,
      amount: amountValue,
    }

    dispatch(addExpense(expense))
    setNameValue("")
    setAmountValue("")
  }

  return (
    <form onSubmit={event => handleSubmit(event)}>
      <input
        type="text"
        placeholder="Name"
        value={nameValue}
        onChange={event => setNameValue(event.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amountValue}
        onChange={event => setAmountValue(event.target.value)}
        required
      />
      <input
        type="submit"
        value={isEditting ? "Edit expense" : "Add Expense"}
      />
    </form>
  )
}
