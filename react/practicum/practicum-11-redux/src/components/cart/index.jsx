import { useState } from "react"
import { connect } from "react-redux"
import { removeFromCart, updateCartQuantity } from "../../redux/actions/cart"

function Cart({ cartItems, dispatch }) {
  const [inputValue, setInputValue] = useState({})

  const totalPrice = cartItems.reduce((accum, item) => {
    return accum + item.price * item.quantity
  }, 0)

  return (
    <>
      <ul className="cartList">
        {cartItems.length !== 0 &&
          cartItems.map(item => (
            <li key={item.id}>
              {item.name} ${item.price}
              <input
                type="number"
                value={inputValue[item.id] ?? item.quantity}
                onChange={event => {
                  setInputValue({
                    ...inputValue,
                    [item.id]: event.target.value,
                  })
                }}
                onBlur={event => {
                  const value = Number(event.target.value)

                  dispatch(updateCartQuantity(item.id, value < 1 ? 0 : value))

                  setInputValue({})
                }}
              />
              <button onClick={() => dispatch(removeFromCart(item.id))}>
                Remove
              </button>
            </li>
          ))}
      </ul>
      <p>Total price: ${totalPrice}</p>
    </>
  )
}

const mapStateToProps = state => {
  return {
    cartItems: state.data,
  }
}

export default connect(mapStateToProps)(Cart)
