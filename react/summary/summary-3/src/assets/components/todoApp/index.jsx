import { useState, useEffect } from "react"
import axios from "axios"
import TodoItem from "../todoItem"

const BASE_URL = "https://jsonplaceholder.typicode.com"

export default function TodoApp() {
  const [todos, setTodos] = useState([])

  const getData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/todos?_limit=5`)

      console.log(response)

      setTodos(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <h2>Todo app</h2>
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} title={todo.title} />
        ))}
      </ul>
    </>
  )
}
