import styles from "./styles.module.css"
import Container from "../container"
import Search from "../search"
import heroShapeImage from "../../assets/heroShape.svg"

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.inner}>
          <h1 className={styles.title}>
            One Click — <br /> Your Job in Your Pocket
          </h1>

          <Search />
          <div className={styles.heroShape}>
            <img src={heroShapeImage} alt="" />
          </div>
        </div>
      </Container>
    </section>
  )
}
