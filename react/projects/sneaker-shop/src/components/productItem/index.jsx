import styles from "./styles.module.css"
import AddButtonDefault from "../../assets/icons/add-icon-default.svg"
import addButtonHover from "../../assets/icons/add-icon-hover.svg"
import { useState } from "react"
import { useContext } from "react"
import ProductsContext from "../../context"

export default function ProductItem({ id, name, price, image }) {
  const [hovered, setHovered] = useState(false)
  const { addToCart } = useContext(ProductsContext)

  return (
    <li className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={name} />
      </div>

      <p className={styles.title}>{name}</p>

      <div className={styles.bottom}>
        <div>
          <span className={styles.label}>PRICE:</span>
          <p className={styles.price}>{price} €</p>
        </div>

        <button
          onClick={() => addToCart(id)}
          className={styles.button}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <img src={hovered ? addButtonHover : AddButtonDefault} />
        </button>
      </div>
    </li>
  )
}
