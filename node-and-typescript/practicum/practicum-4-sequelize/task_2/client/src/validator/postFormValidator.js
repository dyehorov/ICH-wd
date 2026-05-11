const postFormValidator = {
  title: {
    required: {
      value: true,
      message: "Title is required!",
    },
  },

  description: {
    required: {
      value: true,
      message: "Description is required!",
    },
  },

  author: {
    required: {
      value: true,
      message: "Author is required!",
    },
  },
}

export default postFormValidator
