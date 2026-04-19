import "./App.css"
import { useEffect } from "react"
import { fetchPosts } from "./redux/slices/postsSlice"
import { fetchTodos } from "./redux/slices/todoSlice"
import { useSelector, useDispatch } from "react-redux"

export default function App() {
  const dispatch = useDispatch()

  const { data: postData, status, error } = useSelector(state => state.posts)

  const { data: todoData } = useSelector(state => state.todos)

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  // console.log(postData)
  // console.log(status)
  // console.log(error)

  // if (status === "loading") {
  //   return <p>Loading...</p>
  // }

  return (
    <div>
      <h1>Posts App</h1>
      <button onClick={() => dispatch(fetchPosts())}>Get posts</button>
      {status === "failed" && <p>Error: Failed to get posts</p>}
      {status === "loading" && <p>Loading...</p>}
      {status === "succeeded" && (
        <ul style={{ padding: "20px" }}>
          {postData.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
      {
        <ul style={{ padding: "20px" }}>
          {todoData.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      }
    </div>
  )
}
