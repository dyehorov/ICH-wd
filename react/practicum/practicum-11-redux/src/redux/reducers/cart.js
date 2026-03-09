const initialState = {
  data: [],
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, data: [...state.data, action.payload] }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        data: state.data.filter(cartItem => cartItem.id !== action.payload.id),
      }
    default:
      return state
  }
}

export default cartReducer
