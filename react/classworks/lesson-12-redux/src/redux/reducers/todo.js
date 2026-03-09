const initialState = {
  data: [],
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, data: [...state.data, action.payload] }
    case "DELETE_TODO":
      return {
        ...state,
        data: state.data.filter(todo => todo.id !== action.payload.id),
      }
    default:
      return state
  }
}

export default todoReducer
