import styles from "./styles.module.css"
import { useState, useRef } from "react"

export default function ToggleText() {
  const [isTextVisible, setIsTextVisible] = useState(true)
  const [animationTime, setAnimationTime] = useState("")
  const textRef = useRef(null)

  const handleTextVisibility = () => {
    if (!textRef.current) return

    setIsTextVisible(prev => !prev)

    if (isTextVisible) {
      textRef.current.classList.add = "visible"
    } else {
      textRef.current.classList.add = "hidden"
    }
  }

  const handleSubmit = event => {
    event.preventDefault()

    handleTextVisibility()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">Hide text</button>
        <input
          type="number"
          value={animationTime}
          onChange={event => setAnimationTime(event.target.value)}
          placeholder="Enter value in ms"
        />
        <p
          ref={textRef}
          className={`${styles.text} ${isTextVisible ? styles.visible : styles.hidden}`}
          style={{ transitionDuration: `${animationTime}ms` }}
        >
          This is hidden text. Click the button to hide or show it.
        </p>
      </form>
    </div>
  )
}
