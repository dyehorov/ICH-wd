import "./App.css"
import CitySelector from "./components/citySelector"
import CityCard from "./components/cityCard"
import { useState } from "react"
import MathQuiz from "./components/mathQuiz"

function App() {
  const [selectedCity, setSelectedCity] = useState(null)

  return (
    <div className="container">
      <CitySelector
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
      />
      {selectedCity && <CityCard selectedCity={selectedCity} />}
      <MathQuiz />
    </div>
  )
}

export default App
