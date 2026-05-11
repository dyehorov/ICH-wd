import styles from "./styles.module.css"
import postFormValidator from "../../validator/postFormValidator"
import axios from "axios"
import { useForm } from "react-hook-form"
import { useState } from "react"

export default function PostForm() {
  const [postMessage, setPostMessage] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    reset,
  } = useForm()

  const { title, description, author } = postFormValidator

  const createPost = async data => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:3333/post/create",
        data,
      )

      setPostMessage(response.data.message)
      reset()
    } catch (error) {
      console.error(`There was an error creating a post: ${error}`)
    }
  }

  return (
    <form onSubmit={handleSubmit(createPost)}>
      <h1>Create Post</h1>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <label>
          Title <input {...register("title", title)} />
        </label>
        {errors.title && <p>{errors.title.message}</p>}

        <label>
          Author <input {...register("author", author)} />
        </label>
        {errors.author && <p>{errors.author.message}</p>}

        <label>
          Description <textarea {...register("description", description)} />
        </label>
        {errors.description && <p>{errors.description.message}</p>}
      </div>

      <button type="submit" disabled={!isValid || isSubmitting}>
        Create post
      </button>

      {postMessage && <p className={styles.successMessage}>{postMessage}</p>}
    </form>
  )
}
