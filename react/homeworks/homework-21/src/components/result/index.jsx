import { useSelector } from "react-redux"

export default function Result() {
  const { isSubmitted, result } = useSelector(state => state.data)

  if (!isSubmitted) {
    return null
  }

  return <h2>{result}</h2>
}
