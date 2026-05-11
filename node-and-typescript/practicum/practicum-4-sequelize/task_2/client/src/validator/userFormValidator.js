const userFormValidator = {
  name: {
    required: {
      value: true,
      message: "Name is required!",
    },
  },

  email: {
    required: {
      value: true,
      message: "Email is required!",
    },

    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Invalid email format!",
    },
  },
}

export default userFormValidator
