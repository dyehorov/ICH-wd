import { useEffect } from "react"
import { useForm } from "react-hook-form"
import {
  addTodoAction,
  clearEditingNoteAction,
  editTodoAction,
} from "../../redux/actions"
import { connect } from "react-redux"
import styles from "./styles.module.css"

function NoteForm({ editingNote, dispatch }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  useEffect(() => {
    if (editingNote) {
      reset({
        title: editingNote.title,
        text: editingNote.text,
      })

      return
    }

    reset({
      title: "",
      text: "",
    })
  }, [editingNote, reset])

  const onSubmit = data => {
    if (editingNote) {
      dispatch(
        editTodoAction({
          id: editingNote.id,
          title: data.title,
          text: data.text,
        }),
      )

      dispatch(clearEditingNoteAction())

      return
    }

    const newTodo = {
      id: crypto.randomUUID(),
      title: data.title,
      text: data.text,
      completed: false,
    }

    dispatch(addTodoAction(newTodo))
    reset({
      title: "",
      text: "",
    })
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

      <textarea
        placeholder="Some text"
        rows={4}
        {...register("text", {
          required: "Enter a text of the note",
        })}
      />
      {errors.text && <p className={styles.error}>{errors.text.message}</p>}

      <button type="submit"> {editingNote ? "Edit Note" : "Add Note"}</button>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    editingNote: state.editingNote,
  }
}

export default connect(mapStateToProps)(NoteForm)
