import { useForm } from "react-hook-form"
import userLogo from "../../assets/userLogo.svg"
import styles from "./styles.module.css"
import axios from "axios"

export default function PostForm({ url, setIsPostCreated }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  async function publishPost(data) {
    const isoString = new Date().toISOString()

    const postData = {
      title: data.title,
      text: data.text,
      date: isoString,
    }

    try {
      await axios.post(`${url}/posts`, postData)

      console.log("Success")

      reset()

      setIsPostCreated(true)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={styles.postFormContainer}>
      <h2>Write a post</h2>
      <form onSubmit={handleSubmit(publishPost)}>
        <div>
          <img src={userLogo} alt="User logo" />
        </div>
        <div className={styles.formInner}>
          <div>
            <label>
              <span>Title</span>
              <input
                type="text"
                {...register("title", { required: "Title is required" })}
              />
              {errors.title && <span>{errors.title.message}</span>}
            </label>
            <label>
              <span>Text</span>
              <input
                type="text"
                {...register("text", { required: "Text is required" })}
              />
              {errors.text && <span>{errors.text.message}</span>}
            </label>
          </div>
          <button className={styles.buttonSubmit} type="submit">
            Publish
          </button>
        </div>
      </form>
    </div>
  )
}
