import { useState, useRef, useEffect } from "react"
import styles from "./styles.module.css"

export default function ClickCounter() {
  const [clickCount, setClickCount] = useState(0)
  const buttonRef = useRef(null)

  useEffect(() => {
    if (!buttonRef.current) return

    buttonRef.current.style.backgroundColor = "cadetblue"
    buttonRef.current.style.padding = "10px"
  }, [])

  const handleClick = () => {
    setClickCount(prev => prev + 1)
  }

  return (
    <div>
      <button ref={buttonRef} onClick={handleClick}>
        Click me!
      </button>
      <p>Click counter: {clickCount}</p>
    </div>
  )
}
