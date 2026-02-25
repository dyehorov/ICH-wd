import styles from "./styles.module.css"
import PostsList from "../postsList"
import PostForm from "../postForm"
import Container from "../container"
import { useState, useEffect } from "react"

const BASE_URL = "https://699eb2fb78dda56d396b079c.mockapi.io/"

export default function Main() {
  const [isPostCreated, setIsPostCreated] = useState(false)

  return (
    <main className={styles.main}>
      <Container>
        <div className={styles.mainInner}>
          <PostsList
            url={BASE_URL}
            isPostCreated={isPostCreated}
            setIsPostCreated={setIsPostCreated}
          />
          <PostForm url={BASE_URL} setIsPostCreated={setIsPostCreated} />
        </div>
      </Container>
    </main>
  )
}
