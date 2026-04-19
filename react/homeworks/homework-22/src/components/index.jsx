import styles from "./styles.module.css"
import { fetchQuote } from "../redux/slices/quoteSlice"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"

export default function Quote() {
  const dispatch = useDispatch()
  const { quote } = useSelector(state => state.quote)

  console.log(quote)

  useEffect(() => {
    dispatch(fetchQuote())
  }, [dispatch])

  return (
    <div className={styles.quoteWrapper}>
      <p className={styles.quote}>"{quote.quote}"</p>
      <p className={styles.author}>- {quote.author}</p>
      <button className={styles.button} onClick={() => dispatch(fetchQuote())}>
        New Quote
      </button>
    </div>
  )
}
