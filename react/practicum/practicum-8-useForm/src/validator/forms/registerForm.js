const registerFormValidation = {
  login: {
    required: {
      value: true,
      message: "Login is required!",
    },
  },

  email: {
    required: {
      value: true,
      message: "Email is required!",
    },
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Email is not valid!",
    },
  },

  password: {
    required: {
      value: true,
      message: "Password is required!",
    },
    minLength: {
      value: 6,
      message: "Password must have at least have 6 characters",
    },
  },
}

export default registerFormValidation
