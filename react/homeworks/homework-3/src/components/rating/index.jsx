import styles from "./styles.module.css"
import { useState } from "react"

const ratingList = [
  "https://www.clipartmax.com/png/middle/297-2970338_rating-2-out-of-5-gold-stars.png",
  "https://www.clipartmax.com/png/middle/73-731815_stars-clipart-2-5-star-rating.png",
  "https://www.clipartmax.com/png/middle/67-676956_out-of-3-out-of-5-star-rating.png",
  "https://www.clipartmax.com/png/middle/67-676995_5-star-rating-png.png",
]

export default function Rating() {
  const [ratingValue, setRatingValue] = useState(0)

  return (
    <div className={styles.ratingContainer}>
      <img src={ratingList[ratingValue]} alt="Star rating" />
      <div className={styles.buttonsContainer}>
        <button onClick={() => setRatingValue(0)}>Bad</button>
        <button onClick={() => setRatingValue(1)}>Okay</button>
        <button onClick={() => setRatingValue(2)}>Good</button>
        <button onClick={() => setRatingValue(3)}>Perfect</button>
      </div>
    </div>
  )
}
