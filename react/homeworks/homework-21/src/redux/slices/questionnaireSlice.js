import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  answers: {},
  result: "",
  isSubmitted: false,
}

const questionnaireSlice = createSlice({
  name: "questionnaire",
  initialState,
  reducers: {
    selectAnswer: (state, action) => {
      const { questionId, answer } = action.payload

      state.answers[questionId] = answer
      state.isSubmitted = false
      state.result = ""
    },
    submitQuestionnaire: state => {
      const result = Object.values(state.answers).filter(Boolean).length

      state.result = `Your score: ${result}`
      state.isSubmitted = true
    },
  },
})

export const { selectAnswer, submitQuestionnaire } = questionnaireSlice.actions

export default questionnaireSlice
