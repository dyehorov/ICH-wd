import "./App.css"
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, reset } from "./redux/slices/counterSlice"
import FruitsForm from "./components/fruitsForm"
import FruitsList from "./components/fruitsList"

export default function App() {
  // const counterValue = useSelector(state => state.counter.value)
  // const counterLength = useSelector(state => state.counter.length)

  // const { value, length } = useSelector(state => state.counter)

  const { value: counterValue, length: counterLength } = useSelector(
    state => state.counter,
  )

  const dispatch = useDispatch()

  return (
    <div>
      <h1>Counter: {counterValue}</h1>
      <p>Length: {counterLength}</p>
      <button onClick={() => dispatch(increment())}>Plus one</button>
      <button onClick={() => dispatch(decrement())}>Minus one</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <div style={{ margin: "20px" }}>
        <h2 style={{ marginBottom: "10px" }}>Fruit List</h2>
        <FruitsForm />
        <FruitsList />
      </div>
    </div>
  )
}
