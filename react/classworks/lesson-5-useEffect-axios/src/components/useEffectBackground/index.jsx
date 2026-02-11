import { useState, useEffect } from "react"

export default function UseEffectBackground() {
  const [text, setText] = useState("")
  const [backgroundColor, setBackgroundColor] = useState("white")

  useEffect(() => {
    console.log("start set theme func")
    if (text.length < 5) {
      setBackgroundColor("lightblue")
    } else if (text.length < 10) {
      setBackgroundColor("lightgreen")
    } else {
      setBackgroundColor("pink")
    }
  }, [text])

  return (
    <div style={{ backgroundColor: backgroundColor }}>
      <h1>Change color </h1>
      <input
        type="text"
        value={text}
        onChange={event => setText(event.target.value)}
      />
    </div>
  )
}
