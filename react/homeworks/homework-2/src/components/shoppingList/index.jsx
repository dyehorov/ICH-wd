export default function ShoppingList({ productsList }) {
  return (
    <ul>
      {productsList.map(product => (
        <li key={Math.random()}>{product}</li>
      ))}
    </ul>
  )
}
