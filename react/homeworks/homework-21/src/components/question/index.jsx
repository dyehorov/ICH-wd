import { useDispatch, useSelector } from "react-redux"
import { selectAnswer } from "../../redux/slices/questionnaireSlice"

export default function Question({ id, text }) {
  const dispatch = useDispatch()
  const selectedAnswer = useSelector(state => state.data.answers[id])

  const handleSelect = answer => {
    dispatch(selectAnswer({ questionId: id, answer }))
  }

  return (
    <div>
      <p>{text}</p>

      <label>
        <input
          type="radio"
          name={`question-${id}`}
          checked={selectedAnswer === true}
          onChange={() => handleSelect(true)}
        />
        Option 1
      </label>

      <label>
        <input
          type="radio"
          name={`question-${id}`}
          checked={selectedAnswer === false}
          onChange={() => handleSelect(false)}
        />
        Option 2
      </label>
    </div>
  )
}
