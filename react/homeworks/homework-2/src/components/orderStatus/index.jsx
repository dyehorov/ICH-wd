export default function OrderStatus({ orderId, status }) {
  return (
    <p>
      Order #{orderId}: {status}
    </p>
  )
}
