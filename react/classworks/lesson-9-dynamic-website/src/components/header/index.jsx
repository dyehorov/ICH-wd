import styles from "./styles.module.css"
import Container from "../container"
import Logo from "./logo"
import Nav from "./nav"

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__inner}>
          <Logo />
          <Nav />
        </div>
      </Container>
    </header>
  )
}
