const initialState = {
  data: [],
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const isItemExist = state.data.some(item => item.id === action.payload.id)

      if (!isItemExist) {
        return {
          ...state,
          data: [...state.data, { ...action.payload, quantity: 1 }],
        }
      }

      return {
        ...state,
        data: state.data.reduce((accum, item) => {
          if (item.id === action.payload.id) {
            accum.push({ ...item, quantity: item.quantity + 1 })
          } else {
            accum.push(item)
          }
          return accum
        }, []),
      }
    }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        data: state.data.reduce((accum, item) => {
          if (item.id === action.payload.id) {
            if (item.quantity > 1) {
              accum.push({ ...item, quantity: item.quantity - 1 })
            }
          } else {
            accum.push(item)
          }

          return accum
        }, []),
      }

    case "UPDATE_CART_QUANTITY":
      return {
        ...state,
        data: state.data.reduce((accum, item) => {
          if (item.id === action.payload.id) {
            if (action.payload.quantity === 0) return accum

            accum.push({ ...item, quantity: action.payload.quantity })
          } else {
            accum.push(item)
          }

          return accum
        }, []),
      }

    default:
      return state
  }
}

export default cartReducer
