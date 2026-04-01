import "./App.css"

import ExpenseForm from "./components/expenseForm"
import ExpenseList from "./components/expenseList"

export default function App() {
  return (
    <div className="container">
      <h1>Expense List</h1>
      <ExpenseForm />
      <ExpenseList />
    </div>
  )
}
