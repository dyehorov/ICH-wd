import styles from "./styles.module.css"
import { useContext } from "react"
import ProductsContext from "../../context"
import ProductItem from "../productItem"

export default function ProductsList() {
  const products = useContext(ProductsContext)

  return (
    <ul className={styles.productList}>
      {products ? (
        products.map(product => <ProductItem key={product.id} {...product} />)
      ) : (
        <span>Loading...</span>
      )}
    </ul>
  )
}
