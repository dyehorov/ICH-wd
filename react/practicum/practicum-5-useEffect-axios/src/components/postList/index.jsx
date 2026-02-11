import { useEffect, useState } from "react"
import styles from "./styles.module.css"
import axios from "axios"
import Post from "../post"

const BASE_URL = "https://dummyjson.com/posts"

export default function PostList() {
  const [pageNumber, setPageNumber] = useState(1)
  const [posts, setPosts] = useState([])
  const [totalPosts, setTotalPosts] = useState(0)

  const totalPages = Math.ceil(totalPosts / 10)

  const getPosts = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}?limit=10&skip=${(pageNumber - 1) * 10}`,
      )

      setPosts(response.data.posts)
      setTotalPosts(response.data.total)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPosts()
  }, [pageNumber])

  return (
    <>
      <ul className={styles.postsList}>
        {posts && posts.map(post => <Post key={post.id} {...post} />)}
      </ul>
      <div className={styles.buttons}>
        <button
          onClick={() => {
            if (pageNumber === 1) {
              return
            }
            setPageNumber(prev => prev - 1)
          }}
        >
          Previous
        </button>
        <span>{pageNumber}</span>
        <button
          onClick={() => {
            if (pageNumber >= totalPages) return
            setPageNumber(prev => prev + 1)
          }}
        >
          Next
        </button>
      </div>
    </>
  )
}
