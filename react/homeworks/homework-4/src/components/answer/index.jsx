import styles from "./styles.module.css"

export default function Answer({
  answer,
  setAnswer,
  expression,
  updatePoints,
}) {
  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        if (answer.length === 0) return

        updatePoints(expression.a, expression.b, answer)
      }}
    >
      <input
        type="number"
        name="answer"
        id="answer"
        placeholder="Enter answer here..."
        value={answer}
        onChange={event => setAnswer(event.target.value)}
      />
      <input type="submit" value="Submit your answer" />
    </form>
  )
}
