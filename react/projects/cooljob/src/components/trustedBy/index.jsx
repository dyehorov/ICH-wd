import styles from "./styles.module.css"
import disney from "../../assets/sponsors/disney.svg"
import facebook from "../../assets/sponsors/facebook.svg"
import microsoft from "../../assets/sponsors/microsoft.svg"
import sony from "../../assets/sponsors/sony.svg"
import cocaCola from "../../assets/sponsors/coca-cola.svg"
import Container from "../container"

const TRUSTED_COMPANIES = [disney, facebook, microsoft, sony, cocaCola]

export default function TrustedBy() {
  return (
    <section className={styles.trustedBy}>
      <Container>
        <div className={styles.trustedByInner}>
          <p className={styles.trustedByText}>We help you find a job</p>
          <ul className={styles.trustedByList}>
            {TRUSTED_COMPANIES.map((company, index) => (
              <li key={index} className={styles.trustedByListItem}>
                <img src={company} alt="Company logo" />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
