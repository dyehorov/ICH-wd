import { connect } from "react-redux"
import cartReducer from "../../redux/reducers/cart"
import { addToCart } from "../../redux/actions/cart"

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 10.0,
  },
  {
    id: 2,
    name: "Product 2",
    price: 20.0,
  },
  {
    id: 3,
    name: "Product 3",
    price: 30.0,
  },
]

function ProductList({ dispatch }) {
  return (
    <ul className="productList">
      {products.length !== 0 &&
        products.map(product => (
          <li key={product.id}>
            {product.name} ${product.price}{" "}
            <button onClick={() => dispatch(addToCart(product))}>
              Add to cart
            </button>
          </li>
        ))}
    </ul>
  )
}

export default connect(cartReducer)(ProductList)
