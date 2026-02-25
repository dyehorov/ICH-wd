import styles from "./styles.module.css"
import PostsList from "../postsList"
import PostForm from "../postForm"
import Container from "../container"

export default function Main() {
  return (
    <main className={styles.main}>
      <Container>
        <div className={styles.mainInner}>
          <PostsList />
          <PostForm />
        </div>
      </Container>
    </main>
  )
}
