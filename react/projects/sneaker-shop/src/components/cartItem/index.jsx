import styles from "./styles.module.css"
import deleteButton from "../../assets/icons/deleteButton.svg"
import { useContext } from "react"
import ProductsContext from "../../context"

export default function CartItem({ id, name, price, image }) {
  const { deleteFromCart } = useContext(ProductsContext)

  return (
    <li className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={name} />
      </div>

      <div className={styles.divider}></div>

      <p className={styles.title}>{name}</p>

      <div className={styles.priceBlock}>
        <span className={styles.label}>PRICE:</span>
        <p className={styles.price}>{price} €</p>
      </div>

      <button
        className={styles.deleteButton}
        type="button"
        onClick={() => deleteFromCart(id)}
      >
        <img
          src={deleteButton}
          alt="Delete item"
          className={styles.deleteIcon}
        />
      </button>
    </li>
  )
}
