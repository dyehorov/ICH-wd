import styles from "./styles.module.css"
import Container from "../container"
import twitter from "../../assets/icons/twitter.svg"
import instagram from "../../assets/icons/instagram.svg"
import facebook from "../../assets/icons/facebook.svg"

const socialLinks = [
  {
    id: 1,
    name: "facebook",
    imageSrc: facebook,
    path: "https://www.facebook.com/",
  },
  { id: 2, name: "twitter", imageSrc: twitter, path: "https://www.x.com" },
  {
    id: 3,
    name: "instagram",
    imageSrc: instagram,
    path: "https://www.instagram.com",
  },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerInner}>
          <div className={styles.footerLeft}>
            <p className={styles.footerTitle}>Contacts</p>
            <div className={styles.contacts}>
              <p>49 222 332 32</p>
              <p>sneaker-shop-text@test</p>
            </div>
            <p className={styles.copyright}>
              &copy; 2026 Sneaker-Shop. All rights reserved
            </p>
          </div>
          <div className={styles.footerRight}>
            <ul className={styles.socialLinksList}>
              {socialLinks.map(link => (
                <li key={link.id}>
                  <a href={link.path} target="_blanc">
                    <img src={link.imageSrc} alt={`${link.name} icon`} />
                  </a>
                </li>
              ))}
            </ul>
            <form className={styles.form}>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Enter your email:"
              />
            </form>
          </div>
        </div>
      </Container>
    </footer>
  )
}
