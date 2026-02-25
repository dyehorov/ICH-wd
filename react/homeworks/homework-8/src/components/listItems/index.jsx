import { useState, useEffect } from "react"

export default function ListItems() {
  const [inputValue, setInputValue] = useState("")
  const [items, setItems] = useState([])

  function addItem(item) {
    setItems(prev => [...prev, { id: Math.random(), text: item }])
    setInputValue("")
  }

  useEffect(() => {
    console.log("Компонент ListItems обновлен")
  }, [])

  return (
    <div>
      <form
        onSubmit={event => {
          event.preventDefault()

          addItem(inputValue)
        }}
      >
        <input
          type="text"
          value={inputValue}
          onChange={event => setInputValue(event.target.value)}
        />
        <button type="submit">Add item</button>
      </form>
      <ul>{items && items.map(item => <li key={item.id}>{item.text}</li>)}</ul>
    </div>
  )
}
