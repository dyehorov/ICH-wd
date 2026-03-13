import { useEffect } from "react"
import { useForm } from "react-hook-form"
import {
  bookAddAction,
  clearEditingNoteAction,
  bookUpdateInfoAction,
} from "../../redux/actions"
import { connect } from "react-redux"
import styles from "./styles.module.css"

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

      dispatch(clearEditingNoteAction())

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

  return (
    <form className={styles.noteForm} onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Title"
        {...register("title", {
          required: "Title is required",
        })}
      />
      {errors.title && <p className={styles.error}>{errors.title.message}</p>}
      <input
        type="text"
        placeholder="Author"
        {...register("author", {
          required: "Author is required",
        })}
      />
      {errors.author && <p className={styles.error}>{errors.author.message}</p>}
      <input
        type="number"
        placeholder="Year"
        {...register("year", {
          required: "Year is required",
        })}
      />
      {errors.year && <p className={styles.error}>{errors.year.message}</p>}

      <button type="submit">Add Book</button>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    editingBook: state.editingBook,
  }
}

export default connect(mapStateToProps)(NoteForm)
