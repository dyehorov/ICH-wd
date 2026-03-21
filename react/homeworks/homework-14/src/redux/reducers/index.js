const initialState = {
  name: "John Doe",
  status: "Online",
}

const userReducer = (state = initialState, action) => {
  console.log(action.payload)

  switch (action.type) {
    case "SET_USER_INFO":
      return {
        ...state,
        name: action.payload.name,
        status: action.payload.status,
      }

    default:
      return state
  }
}

export default userReducer
