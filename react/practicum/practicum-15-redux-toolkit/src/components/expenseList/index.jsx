import { useSelector, useDispatch } from "react-redux"
import { deleteExpense, editExpense } from "../../redux/slices/expenseSlice"

export default function ExpenseList() {
  const expenses = useSelector(state => state.expenses.expenses)
  const dispatch = useDispatch()

  return (
    <div>
      {expenses.map(expense => (
        <div key={expense.id}>
          <span>
            {expense.name} - ${expense.amount}
          </span>

          <button onClick={() => dispatch(deleteExpense(expense.id))}>
            Delete
          </button>

          <button onClick={() => dispatch(editExpense(expense.id))}>
            Edit
          </button>
        </div>
      ))}
    </div>
  )
}
