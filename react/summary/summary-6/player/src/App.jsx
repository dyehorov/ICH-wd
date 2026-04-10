import "./App.css"
import { useSelector, useDispatch } from "react-redux"

export default function App() {
  const dispatch = useDispatch()

  const playerVolume = useSelector(state => state.player.volume)

  return <h1>{playerVolume}</h1>
}
