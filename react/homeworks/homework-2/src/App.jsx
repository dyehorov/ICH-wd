import "./App.css"
import Greetings from "./components/greetings"
import ShoppingList from "./components/shoppingList"
import OrderStatus from "./components/orderStatus"

function App() {
  const products = [
    "Laptop",
    "Smartphone",
    "Headphones",
    "Keyboard",
    "Mouse",
    "Monitor",
  ]

  const orders = [
    { orderId: 101, status: "in transit" },
    { orderId: 102, status: "delivered" },
    { orderId: 103, status: "processing" },
    { orderId: 104, status: "cancelled" },
  ]

  return (
    <>
      <Greetings name={"Bob"} />
      {products.length === 0 ? (
        <p>Shopping list is empty</p>
      ) : (
        <ShoppingList productsList={products} />
      )}
      {orders.length === 0 ? (
        <p>No orders</p>
      ) : (
        <div>
          {orders.map(order => (
            <OrderStatus
              key={Math.random()}
              orderId={order.orderId}
              status={order.status}
            />
          ))}
        </div>
      )}
    </>
  )
}

export default App
