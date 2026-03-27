const currentYear = new Date().getFullYear()

const bookFormValidation = {
  title: {
    required: "Title is required",
  },
  author: {
    required: "Author is required",
  },
  year: {
    required: "Year is required",
    max: {
      value: currentYear,
      message: `The publish year cannot be after ${currentYear}`,
    },
  },
}

export default bookFormValidation
