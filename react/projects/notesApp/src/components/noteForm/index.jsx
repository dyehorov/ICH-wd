import { useForm } from "react-hook-form"
import { addTodoAction, editTodoAction } from "../../redux/actions"
import { connect } from "react-redux"
import styles from "./styles.module.css"

function NoteForm({ isNoteEditing, setIsNoteEditing, dispatch }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = data => {
    const newTodo = {
      id: crypto.randomUUID(),
      title: data.title,
      text: data.text,
      completed: false,
    }

    if (isNoteEditing) {
      dispatch(editTodoAction(newTodo))

      setIsNoteEditing(false)
    } else {
      dispatch(addTodoAction(newTodo))
    }

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

      <textarea
        placeholder="Some text"
        rows={4}
        {...register("text", {
          required: "Enter a text of the note",
        })}
      />
      {errors.text && <p className={styles.error}>{errors.text.message}</p>}

      <button type="submit"> {isNoteEditing ? "Edit Note" : "Add Note"}</button>
    </form>
  )
}

export default connect()(NoteForm)
