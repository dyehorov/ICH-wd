import styles from "./styles.module.css"
import { useState } from "react"
import Answer from "../answer"

export default function MathQuiz() {
  const [correct, setCorrect] = useState(0)
  const [incorrect, setIncorrect] = useState(0)
  const [expression, setExpression] = useState({
    a: Math.floor(Math.random() * 100 + 1),
    b: Math.floor(Math.random() * 100 + 1),
  })
  const [answer, setAnswer] = useState("")

  function updatePoints(a, b, answer) {
    if (a + b === +answer) {
      setCorrect(prev => prev + 1)
      setExpression({
        a: Math.floor(Math.random() * 100 + 1),
        b: Math.floor(Math.random() * 100 + 1),
      })
      setAnswer("")
    } else {
      setIncorrect(prev => prev + 1)
      setExpression({
        a: Math.floor(Math.random() * 100 + 1),
        b: Math.floor(Math.random() * 100 + 1),
      })
      setAnswer("")
    }
  }

  return (
    <div className={styles.quizContainer}>
      <h2>Math quiz</h2>
      <p>
        Correct {correct}, Incorrect {incorrect}
      </p>
      <div className={styles.expressionContainer}>
        <div>
          {expression.a} + {expression.b} =
        </div>
        <Answer
          answer={answer}
          setAnswer={setAnswer}
          updatePoints={updatePoints}
          expression={expression}
        />
      </div>
    </div>
  )
}
