import React, { useState } from "react"
import "./App.css"
import ValueDisplay from "./components/valueDisplay"

export default function App() {
  const [value, setValue] = useState("")

  return (
    <div className="app">
      <h1>Current and Previous Value</h1>
      <input
        className="app__input"
        type="text"
        value={value}
        onChange={event => setValue(event.target.value)}
        placeholder="Enter text..."
      />
      <ValueDisplay value={value} />
    </div>
  )
}
