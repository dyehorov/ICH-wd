import { useSelector, useDispatch } from "react-redux"
import { deleteFruit } from "../../redux/slices/fruitsSlice"

export default function FruitsList() {
  const { fruits } = useSelector(state => state.fruits)

  const dispatch = useDispatch()

  return (
    <ul>
      {fruits.length === 0 ? (
        <span>Add fruits</span>
      ) : (
        fruits.map(fruit => (
          <li key={fruit.id}>
            {fruit.name}{" "}
            <button onClick={() => dispatch(deleteFruit(fruit.id))}>
              Delete
            </button>
          </li>
        ))
      )}
    </ul>
  )
}
