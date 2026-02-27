const registrationForm = {
  title: {
    required: {
      value: true,
      message: "Title is required!",
    },
    validate: value => value.trim().length > 0 || "Title cannot be empty",
  },

  text: {
    required: {
      value: true,
      message: "Text is required!",
    },
    validate: value => value.trim().length > 0 || "Text cannot be empty",
  },
}

export default registrationForm
