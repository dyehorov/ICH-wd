import "./App.css"
import CitySelector from "./components/citySelector"
import CityCard from "./components/cityCard"
import { useState } from "react"

function App() {
  const [selectedCity, setSelectedCity] = useState(null)

  return (
    <div className="container">
      <CitySelector
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
      />
      {selectedCity && <CityCard selectedCity={selectedCity} />}
    </div>
  )
}

export default App
