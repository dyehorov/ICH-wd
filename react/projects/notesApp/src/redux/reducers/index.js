const initialState = {
  data: [],
  editingNote: null,
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, data: [...state.data, action.payload] }
    case "DELETE_TODO": {
      const filteredData = state.data.filter(
        todo => todo.id !== action.payload.id,
      )
      const updatedEditingNote =
        state.editingNote && state.editingNote.id === action.payload.id
          ? null
          : state.editingNote

      return {
        ...state,
        data: filteredData,
        editingNote: updatedEditingNote,
      }
    }
    case "EDIT_TODO":
      return {
        ...state,
        data: state.data.map(item => {
          if (item.id !== action.payload.id) {
            return item
          }

          return {
            ...item,
            title: action.payload.title,
            text: action.payload.text,
          }
        }),
      }
    case "SET_EDITING_NOTE":
      return {
        ...state,
        editingNote: action.payload,
      }
    case "CLEAR_EDITING_NOTE":
      return {
        ...state,
        editingNote: null,
      }
    default:
      return state
  }
}

export default todoReducer
