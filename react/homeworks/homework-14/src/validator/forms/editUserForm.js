const editUserFormValidation = {
  name: {
    required: {
      value: true,
      message: "First name is required!",
    },
  },

  status: {
    required: {
      value: true,
      message: "Status is required!",
    },
  },
}

export default editUserFormValidation
