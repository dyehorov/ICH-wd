import styles from "./styles.module.css"
import Container from "../../components/container"
import CartList from "../../components/cartList"

export default function MainPage() {
  return (
    <div className={styles.cartPageContent}>
      <Container>
        <h2 className={styles.pageTitle}>Cart</h2>
        <CartList />
      </Container>
    </div>
  )
}
