import { useEffect } from "react"
import { useForm } from "react-hook-form"
import {
  bookAddAction,
  clearEditingBookAction,
  bookUpdateInfoAction,
} from "../../redux/actions"
import { connect } from "react-redux"
import Form from "../form"

function NoteForm({ editingBook, dispatch }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  useEffect(() => {
    if (editingBook) {
      reset({
        title: editingBook.title,
        author: editingBook.author,
        year: editingBook.year,
      })

      return
    }

    reset({
      title: "",
      author: "",
      year: "",
    })
  }, [editingBook, reset])

  const onSubmit = data => {
    if (editingBook) {
      dispatch(
        bookUpdateInfoAction({
          id: editingBook.id,
          title: data.title,
          author: data.author,
          year: data.year,
        }),
      )

      dispatch(clearEditingBookAction())

      return
    }

    const newBook = {
      id: crypto.randomUUID(),
      title: data.title,
      author: data.author,
      year: data.year,
      isAvailable: true,
    }

    dispatch(bookAddAction(newBook))
    reset()
  }

  const currentYear = new Date().getFullYear()
  const fields = [
    {
      name: "title",
      type: "text",
      placeholder: "Book title",
      rules: { required: "Title is required" },
    },
    {
      name: "author",
      type: "text",
      placeholder: "Author",
      rules: { required: "Author is required" },
    },
    {
      name: "year",
      type: "number",
      placeholder: "Year",
      rules: {
        required: "Year is required",
        max: currentYear,
      },
      getErrorMessage: error => {
        if (error.type === "max") {
          return `The publish year cannot be after ${currentYear}`
        }

        return error.message
      },
    },
  ]

  return (
    <Form
      fields={fields}
      register={register}
      errors={errors}
      onSubmit={handleSubmit(onSubmit)}
      submitLabel={editingBook ? "Edit Book" : "Add Book"}
    />
  )
}

const mapStateToProps = state => {
  return {
    editingBook: state.editingBook,
  }
}

export default connect(mapStateToProps)(NoteForm)
