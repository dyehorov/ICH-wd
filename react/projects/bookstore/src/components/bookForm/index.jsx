import { useEffect } from "react"
import { useForm } from "react-hook-form"
import {
  bookAddAction,
  clearEditingBookAction,
  bookUpdateInfoAction,
} from "../../redux/actions"
import { connect } from "react-redux"
import bookFormValidation from "../../validator/forms/bookForm"
import styles from "./styles.module.css"

function BookForm({ editingBook, dispatch }) {
  const { title, author, year } = bookFormValidation

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
  return (
    <form className={styles.noteForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.field}>
        <input
          type="text"
          placeholder="Book title"
          {...register("title", title)}
        />
        {errors.title && <p className={styles.error}>{errors.title.message}</p>}
      </div>

      <div className={styles.field}>
        <input
          type="text"
          placeholder="Author"
          {...register("author", author)}
        />
        {errors.author && (
          <p className={styles.error}>{errors.author.message}</p>
        )}
      </div>

      <div className={styles.field}>
        <input
          type="number"
          placeholder="Year"
          {...register("year", year)}
        />
        {errors.year && <p className={styles.error}>{errors.year.message}</p>}
      </div>

      <button type="submit">{editingBook ? "Edit Book" : "Add Book"}</button>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    editingBook: state.editingBook,
  }
}

export default connect(mapStateToProps)(BookForm)
