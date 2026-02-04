import { useState } from "react"

export default function Form({ updateColor }) {
  const [inputValue, setInputValue] = useState("")

  function handleSubmit(event) {
    event.preventDefault()

    updateColor(inputValue)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="color"
        value={inputValue}
        onChange={event => setInputValue(event.target.value)}
      />
      <button type="submit">Change color</button>
    </form>
  )
}
