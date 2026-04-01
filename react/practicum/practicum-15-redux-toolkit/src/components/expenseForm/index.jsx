import { useState } from "react"
import { useDispatch } from "react-redux"
import { addExpense } from "../../redux/slices/expenseSlice"

export default function ExpenseForm() {
  const [nameValue, setNameValue] = useState("")
  const [amountValue, setAmountValue] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = event => {
    event.preventDefault()

    const expense = { id: Date.now(), name: nameValue, amount: amountValue }

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
      <input type="submit" value={"Add Expense"} />
    </form>
  )
}
