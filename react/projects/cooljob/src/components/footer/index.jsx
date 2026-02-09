import styles from "./styles.module.css"
import Container from "../container"
import SectionTitle from "../sectionTitle"
import NavLinks from "../navLinks"
import Logo from "../logo"
import SocialLinks from "../socialLinks"

const POPULAR_CITIES = [
  { label: "Osaka", href: "#" },
  { label: "Koyasan", href: "#" },
  { label: "Tokyo", href: "#" },
  { label: "Hakone", href: "#" },
  { label: "Naeba", href: "#" },
  { label: "Tomamu", href: "#" },
  { label: "Yokohama", href: "#" },
  { label: "Nagoya", href: "#" },
  { label: "Sapporo", href: "#" },
  { label: "Kobe", href: "#" },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <SectionTitle title={"Popular cities"} />
        <NavLinks links={POPULAR_CITIES} />
        <div className={styles.footerBottom}>
          <Logo />
          <SocialLinks />
        </div>
      </Container>
    </footer>
  )
}
