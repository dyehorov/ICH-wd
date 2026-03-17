import "./App.css"
import { useState, useMemo } from "react"

function superSlowFunction(num) {
  console.log("calling superSlowFunction")

  for (let i = 0; i <= 2550000000; i++) {}

  return num * 2
}

export default function App() {
  const [number, setNumber] = useState(0)
  const [darkTheme, setDarkTheme] = useState(false)

  // const doubledNumber = superSlowFunction(number)

  const doubledNumber = useMemo(() => {
    return superSlowFunction(number)
  }, [number])

  // const themeStyle = {
  //   backgroundColor: darkTheme ? "black" : "white",
  //   color: darkTheme ? "white" : "black",
  // }

  const themeStyle = useMemo(() => {
    return {
      backgroundColor: darkTheme ? "black" : "white",
      color: darkTheme ? "white" : "black",
    }
  }, [darkTheme])

  return (
    <div style={themeStyle}>
      <input
        type="number"
        value={number}
        onChange={event => setNumber(Number(event.target.value))}
      />
      <div>{doubledNumber}</div>
      <button onClick={() => setDarkTheme(prev => !prev)}>Change theme</button>
    </div>
  )
}
