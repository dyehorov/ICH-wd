import { useForm } from "react-hook-form"
import userLogo from "../../assets/userLogo.svg"
import styles from "./styles.module.css"

export default function PostForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  function publishPost(data) {
    console.log(data)
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
            </label>
            <label>
              <span>Text</span>
              <input
                type="text"
                {...register("text", { required: "Text is required" })}
              />
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
