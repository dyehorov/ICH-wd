import { useState } from "react"
function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(prev => prev + 1)}>plus one</button>
      <button onClick={() => setCount(prev => prev - 1)}>minus one</button>
      <button onClick={() => setCount(0)}>reset</button>
    </div>
  )
}
export default Counter
