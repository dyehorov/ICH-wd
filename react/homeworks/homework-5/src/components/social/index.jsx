import { useState } from "react"
import styles from "./styles.module.css"

export default function Social({ defaultIcon, hoverIcon, label }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <img
      className={styles.logoImage}
      src={isHovered ? hoverIcon : defaultIcon}
      alt={`${label} icon`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  )
}
