const ContactsFormValidator = {
  email: {
    required: {
      value: true,
      message: "Email is required!",
    },
    pattern: {
      value: /^\S+@\S+$/i,
      message: "Invalid email format",
    },
  },

  name: {
    required: {
      value: true,
      message: "Name is required!",
    },
    minLength: {
      value: 2,
      message: "Name must be at least 2 characters",
    },
    maxLength: {
      value: 26,
      message: "Name must be less than 26 characters",
    },
  },

  message: {
    required: {
      value: true,
      message: "Message is required!",
    },
    minLength: {
      value: 5,
      message: "Message is too short",
    },
  },
}

export default ContactsFormValidator
