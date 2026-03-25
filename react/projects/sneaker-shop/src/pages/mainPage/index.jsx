import styles from "./styles.module.css"
import banner from "../../assets/banner.jpg"
import Container from "../../components/container"
import ProductsList from "../../components/productsList"

export default function MainPage() {
  return (
    <div className={styles.mainPageContent}>
      <Container>
        <div className={styles.banner}>
          <img src={banner} alt="Main page banner" />
        </div>
        <h2 className={styles.pageTitle}>Products</h2>
        <ProductsList />
      </Container>
    </div>
  )
}
