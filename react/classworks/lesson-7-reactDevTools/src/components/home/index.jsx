import { useState } from "react"
function Home() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h2>Home</h2>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(prev => prev + 1)}>Plus one</button>
    </div>
  )
}
export default Home
