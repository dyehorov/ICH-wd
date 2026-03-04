import { useRef } from "react"
import styles from "./styles.module.css"

export default function FleeButton() {
  const fleeBtnRef = useRef(null)

  const handleMouseOver = () => {
    const button = fleeBtnRef.current

    if (!button) return

    const newX = Math.random() * window.innerWidth - button.offsetWidth
    const newY = Math.random() * window.innerHeight - button.offsetHeight

    button.style.top = `${newY}px`
    button.style.left = `${newX}px`
  }

  return (
    <button
      style={{ position: "absolute" }}
      ref={fleeBtnRef}
      onMouseOver={handleMouseOver}
    >
      Run away
    </button>
  )
}
