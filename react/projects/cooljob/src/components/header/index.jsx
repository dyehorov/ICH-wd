import styles from "./styles.module.css"
import Logo from "../logo"
import Container from "../container"
import NavLinks from "../navLinks"

const NAV_LINKS = [
  { label: "Job Search", href: "#jobs" },
  { label: "Startup Search", href: "#startups" },
]

export default function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.headerInner}>
          <div className={styles.headerLeftSide}>
            <Logo />

            <NavLinks links={NAV_LINKS} />
          </div>

          <div className={styles.headerRightSide}>
            <a href="#" className={styles.signup}>
              Sign up
            </a>
            <a href="#" className={styles.loginBtn}>
              Log in
            </a>
          </div>
        </div>
      </Container>
    </header>
  )
}
