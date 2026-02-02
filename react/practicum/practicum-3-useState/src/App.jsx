import { useState } from "react"
import "./App.css"
import Header from "./components/header"
import MainContent from "./components/mainContent"
import Footer from "./components/footer"

function App() {
  const [theme, setTheme] = useState(true)

  return (
    <div className="wrapper">
      <Header setTheme={setTheme} currentTheme={theme} />
      <MainContent currentTheme={theme} />
      <Footer currentTheme={theme} />
    </div>
  )
}

export default App
