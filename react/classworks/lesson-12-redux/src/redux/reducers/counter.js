const initialState = {
  count: 0,
  name: "Alice",
  data: null,
}

const counterReducer = (state = initialState, action) => {
  console.log(action)

  switch (action.type) {
    case "PLUS":
      return { ...state, count: state.count + 1 }
    case "MINUS":
      return { ...state, count: state.count - 1 }
    case "RESET":
      return { ...state, count: 0 }
    case "SEND_DATA":
      return { ...state, data: action.payload }
    default:
      return state
  }
}

export default counterReducer
