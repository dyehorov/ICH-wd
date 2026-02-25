import styles from "./styles.module.css"
import userLogo from "../../assets/userLogo.svg"
import axios from "axios"
import { useState, useEffect } from "react"

export default function PostsList({ url, isPostCreated, setIsPostCreated }) {
  const [posts, setPosts] = useState([])
  const [pageNumber, setPageNumber] = useState(1)

  const loadPosts = async () => {
    try {
      const response = await axios.get(
        `${url}/posts?page=${pageNumber}&limit=3&order=asc`,
      )

      console.log(response)

      setPosts(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const deletePost = async id => {
    try {
      await axios.delete(`${url}/posts/${id}`)

      loadPosts()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadPosts()
  }, [])

  useEffect(() => {
    loadPosts()
  }, [pageNumber])

  useEffect(() => {
    loadPosts()
    setIsPostCreated(false)
  }, [isPostCreated])

  return (
    <div className={styles.postListContainer}>
      <h2>Posts list</h2>
      <ul>
        {posts.length === 0 ? (
          <p>No posts</p>
        ) : (
          posts.map(post => {
            return (
              <li key={post.id}>
                <div className={styles.userLogo}>
                  <img src={post.userImage} alt="user logo" />
                </div>
                <div className={styles.postContent}>
                  <h3>{post.title}</h3>
                  <p>{post.text}</p>
                </div>
                <div className={styles.postActions}>
                  <span>{post.id}</span>
                  <button
                    id={post.id}
                    onClick={event => deletePost(event.target.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            )
          })
        )}
      </ul>
      <div className={styles.pageButtons}>
        <button
          disabled={pageNumber === 1}
          onClick={() => setPageNumber(prev => prev - 1)}
        >
          Previous
        </button>
        <span>{pageNumber}</span>
        <button
          disabled={posts.length <= 2}
          onClick={() => setPageNumber(prev => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  )
}
