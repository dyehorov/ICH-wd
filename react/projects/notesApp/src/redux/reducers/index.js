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
    case "EDIT_TODO":
      return {
        data: state.data.reduce((accum, item) => {
          if (item.id !== action.payload.id) {
            accum.push(item)

            return accum
          }

          item = {
            ...item,
            title: action.payload.title,
            text: action.payload.text,
          }

          accum.push(item)

          return accum
        }),
      }
    default:
      return state
  }
}

export default todoReducer
