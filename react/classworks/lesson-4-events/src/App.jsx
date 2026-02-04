import "./App.css"
import EventComponent from "./components/eventComponent"
import { useState } from "react"
import ImageCarousel from "./components/imageCarousel"
import Form from "./components/form"
import Title from "./components/title"

function App() {
  const [count, setCount] = useState(0)

  const handleClickCounter = () => {
    setCount(prev => prev + 1)
  }

  const items = ["First", "Second", "Third"]

  function handleClick(item) {
    console.log(`Clicked ${item} element`)
  }

  function sayHello(event, number) {
    console.log(event)
    console.log(number)
    console.log("Hello, world!")
  }

  return (
    <>
      <button onClick={event => sayHello(event, 77)}>Click me</button>
      <ul>
        {items.map((item, index) => (
          <li key={index} onClick={() => handleClick(item)}>
            {item}
          </li>
        ))}
      </ul>
      <EventComponent />
      <p>Count: {count}</p>
      <button onClick={handleClickCounter}>Add one</button>
      <div>
        <ImageCarousel />
      </div>
      <Form />
      <Title />
    </>
  )
}

export default App
