const initialState = {
  users: [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "David" },
    { id: 5, name: "Eva" },
    { id: 6, name: "Frank" },
    { id: 7, name: "George" },
    { id: 8, name: "Hannah" },
    { id: 9, name: "Ivan" },
    { id: 10, name: "Jack" },
  ],
  filterValue: "",
}

const userReducer = (state = initialState, action) => {
  console.log(action.payload)

  switch (action.type) {
    case "SET_FILTER":
      return { ...state, filterValue: action.payload }

    default:
      return state
  }
}

export default userReducer
