import { useDispatch } from "react-redux"
import { submitQuestionnaire } from "./redux/slices/questionnaireSlice"
import Question from "./components/question"
import Result from "./components/result"
import "./App.css"

const questions = [
  {
    id: 1,
    text: "Question 1",
  },
  {
    id: 2,
    text: "Question 2",
  },
  {
    id: 3,
    text: "Question 3",
  },
  {
    id: 4,
    text: "Question 4",
  },
  {
    id: 5,
    text: "Question 5",
  },
]

export default function App() {
  const dispatch = useDispatch()

  const handleSubmit = () => {
    dispatch(submitQuestionnaire())
  }

  return (
    <div className="app">
      <h1>Questionnaire</h1>

      <div className="questions">
        {questions.map(question => (
          <Question key={question.id} id={question.id} text={question.text} />
        ))}
      </div>

      <button type="button" onClick={handleSubmit}>
        Submit
      </button>

      <Result />
    </div>
  )
}
