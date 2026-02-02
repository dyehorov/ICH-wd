import "./App.css"
import Counter from "./components/counter"
import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  const [numbers, setNumbers] = useState([1, -121, 3, -5])

  const [userData, setUserData] = useState({ name: "Alice", age: 23 })

  function addOne() {
    // setCount(count + 1)
    setCount(prev => prev + 1)
  }

  function pushOne() {
    setNumbers([...numbers, -1])
  }

  function filterList() {
    setNumbers(numbers.filter(number => number > 0))
  }

  function updateAge() {
    // setUserData({ ...userData, age: userData.age + 1 })

    setUserData(prev => {
      return { ...userData, age: prev.age + 1 }
    })

    // setUserData(prev => ({ ...userData, age: prev.age + 1 }))
  }

  console.log("render")

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>Add one</button>
      <div>
        <Counter />
      </div>
      <div
        style={{ marginTop: "24px", border: "2px solid green", padding: "8px" }}
      >
        <button onClick={pushOne}>Push 1</button>
        <button onClick={filterList}>Filter list</button>
        <ul>
          {numbers.map(number => (
            <li key={Math.random()}>{number}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>User Data:</h2>
        <h3>Name: {userData.name}</h3>
        <h3>Age: {userData.age}</h3>
        <button onClick={updateAge}>Increase age</button>
      </div>
    </div>
  )
}

export default App
