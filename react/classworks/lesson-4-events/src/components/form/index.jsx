import { useState } from "react"

// export default function Form() {
//   const [text, setText] = useState("")

//   function handleChange(event) {
//     setText(event.target.value)
//   }

//   return (
//     <form>
//       <h2>My form</h2>
//       <input type="text" value={text} onChange={handleChange} />
//       <button onClick={() => setText("")}>Click me</button>
//       <p>{text}</p>
//     </form>
//   )
// }

export default function Form() {
  const [text, setText] = useState("")
  const [isValid, setIsValid] = useState(true)
  const [message, setMessage] = useState("")

  function handleChange(event) {
    const newValue = event.target.value
    setText(newValue)

    if (newValue.length < 5) {
      setIsValid(false)
      setMessage("The title must be more than 5 characters")
    } else {
      setIsValid(true)
      setMessage("The title is ready")
    }
  }

  return (
    <form>
      <h2>My form</h2>
      <input
        style={{ borderColor: isValid ? "green" : "red", outline: "none" }}
        type="text"
        value={text}
        onChange={handleChange}
      />
      <p style={{ color: isValid ? "green" : "red", outline: "none" }}>
        {message}
      </p>
    </form>
  )
}
