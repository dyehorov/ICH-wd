import { useSelector } from "react-redux"
import ExpenseItem from "../expenseItem"

export default function ExpenseList() {
  const { expenses } = useSelector(state => state.expenses)

  return (
    <ul>
      {expenses.length === 0 ? (
        <span>Add expense</span>
      ) : (
        expenses.map(expense => (
          <ExpenseItem
            key={expense.id}
            name={expense.name}
            amount={expense.amount}
            id={expense.id}
          />
        ))
      )}
    </ul>
  )
}
