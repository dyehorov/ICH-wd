const registerFormValidation = {
  firstName: {
    required: {
      value: true,
      message: "First name is required!",
    },
    maxLength: {
      value: 26,
      message: "Too many characters in the first name! Must be less that 26!",
    },
    minLength: {
      value: 2,
      message: "First name must at least have 2 characters",
    },
  },

  lastName: {
    required: {
      value: true,
      message: "Last name is required!",
    },
    maxLength: {
      value: 26,
      message: "Too many characters in the last name! Must be less that 26!",
    },
    minLength: {
      value: 2,
      message: "Last name must at least have 2 characters",
    },
  },

  password: {
    required: {
      value: true,
      message: "Password is required!",
    },
    minLength: {
      value: 8,
      message: "Password must have at least have 8 characters",
    },
  },
}

export default registerFormValidation
