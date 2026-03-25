import styles from "./styles.module.css"
import { useContext, useEffect } from "react"
import ProductsContext from "../../context"
import CartItem from "../cartItem"

export default function CartList() {
  const { cartData, fetchCartData } = useContext(ProductsContext)

  useEffect(() => {
    fetchCartData()
  }, [])

  const getTotalPrice = () => {
    return cartData.reduce((accum, item) => {
      return (accum += Number(item.price))
    }, 0)
  }

  return (
    <div className={styles.cartListWrapper}>
      {cartData.length === 0 ? (
        <span>Nothing here yet. Add some products to your cart.</span>
      ) : (
        <ul className={styles.cartList}>
          {cartData ? (
            cartData.map(product => <CartItem key={product.id} {...product} />)
          ) : (
            <span>Loading...</span>
          )}
        </ul>
      )}
      <aside className={styles.summary}>
        <h3 className={styles.summaryTitle}>Total</h3>
        <div className={styles.summaryProducts}>
          {cartData.map(item => (
            <p key={item.id} className={styles.summaryItem}>
              {item.name}
            </p>
          ))}
        </div>
        <div className={styles.summaryLine}></div>
        <div className={styles.totalPriceBlock}>
          <span className={styles.totalLabel}>PRICE:</span>
          <p className={styles.totalPrice}>{getTotalPrice()} €</p>
        </div>
      </aside>
    </div>
  )
}
