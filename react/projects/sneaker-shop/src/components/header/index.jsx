import styles from "./styles.module.css"
import Container from "../container"
import Nav from "../nav"

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerInner}>
          <h1 className={styles.logo}>Sneaker - Shop</h1>
          <Nav />
        </div>
      </Container>
    </header>
  )
}
