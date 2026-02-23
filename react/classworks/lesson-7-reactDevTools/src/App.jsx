import { useEffect, useState } from "react"
import "./App.css"
import Home from "./components/home"
function App() {
  const [isDark, setIsDark] = useState(false)
  const styles = {
    color: isDark ? "white" : "black",
    backgroundColor: isDark ? "black" : "white",
  }

  useEffect(() => {
    setIsDark(true)
  }, [])

  return (
    <div style={styles}>
      <h1>App </h1>
      <Home />
    </div>
  )
}
export default App
