import { useDispatch } from "react-redux"
import { deleteExpense, isEditting } from "../../redux/slices/expenseSlice"

export default function ExpenseItem({ name, amount, id }) {
  const dispatch = useDispatch()

  return (
    <li>
      <span>{name}</span> - <span>${amount}</span>{" "}
      <button onClick={() => dispatch(deleteExpense(id))}>Delete</button>
      <button
        onClick={() => {
          dispatch(isEditting({ name: name, amount: amount }))
        }}
      >
        Edit
      </button>
    </li>
  )
}
