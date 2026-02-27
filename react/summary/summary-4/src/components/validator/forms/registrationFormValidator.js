const RegistrationFormValidator = {
  login: {
    required: {
      value: true,
      message: "Login is required!",
    },
    validate: value => value.trim().length > 0 || "Field cannot be empty",
    minLength: {
      value: 4,
      message: "Login must have at leadt 4 characters",
    },
    maxLength: {
      value: 20,
      message: "Too many characters in the login! Must be less that 20!",
    },
  },
  email: {
    required: {
      value: true,
      message: "Email is required!",
    },
    validate: value => value.trim().length > 0 || "Field cannot be empty",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Invalid email format!",
    },
  },
  firstName: {
    required: {
      value: true,
      message: "First name is required!",
    },
    validate: value => value.trim().length > 0 || "Field cannot be empty",
    pattern: {
      value: /^[A-Za-zА-Яа-яЁё]{2,}$/,
      message: "Only letters (Cyrillic or Latin)",
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
    validate: value => value.trim().length > 0 || "Field cannot be empty",
    pattern: {
      value: /^[A-Za-zА-Яа-яЁё]{2,}$/,
      message: "Only letters (Cyrillic or Latin)",
    },
    minLength: {
      value: 2,
      message: "Last name must at least have 2 characters",
    },
  },
  password: {
    required: { value: true, message: "Password is required!" },
    minLength: { value: 6, message: "Minimum 6 characters" },
    // pattern: {
    //   value: /^(?=.*[A-Z])(?=.*\d).{6,}$/,
    //   message: "Must contain at least 1 uppercase letter and 1 digit",
    // },
    validate: value => value.trim().length > 0 || "Field cannot be empty",
  },
  confirmPassword: {
    required: { value: true, message: "Confirm password is required!" },
  },
  age: {
    required: { value: true, message: "Age is required!" },
    valueAsNumber: true,
    min: { value: 18, message: "Age must be at least 18" },
    max: { value: 100, message: "Age must be at most 100" },
  },
  phone: {
    required: { value: true, message: "Phone is required!" },
    pattern: {
      value: /^\+65\d{6}\s\d{2}-\d{2}$/,
      message: "Format must be: +65XXXXXX XX-XX",
    },
    validate: value => {
      const digits = value.replace(/\D/g, "")
      if (!digits.startsWith("65")) return "Phone must start with +65"
      if (digits.length !== 12)
        return "Must contain exactly 10 digits after the code"
      return true
    },
  },
}

export default RegistrationFormValidator
