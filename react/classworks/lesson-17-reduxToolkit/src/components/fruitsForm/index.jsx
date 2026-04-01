import { useState } from "react"
import { useDispatch } from "react-redux"
import { addFruit } from "../../redux/slices/fruitsSlice"

export default function FruitsForm() {
  const [inputValue, setInputValue] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = event => {
    event.preventDefault()

    if (!inputValue.trim()) return

    dispatch(addFruit(inputValue))
    setInputValue("")
  }

  return (
    <form onSubmit={event => handleSubmit(event)}>
      <input
        type="text"
        placeholder="Enter a fruit name..."
        value={inputValue}
        onChange={event => setInputValue(event.target.value)}
      />
      <input type="submit" />
    </form>
  )
}
