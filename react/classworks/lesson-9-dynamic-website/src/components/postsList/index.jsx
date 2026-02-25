import styles from "./styles.module.css"
import userLogo from "../../assets/userLogo.svg"
import axios from "axios"
import { useEffect } from "react"

const BASE_URL = "https://699eb2fb78dda56d396b079c.mockapi.io/"

const posts = []

export default function PostsList() {
  return (
    <div className={styles.postListContainer}>
      <h2>Posts list</h2>
      <ul>
        <li>
          <div>
            <div className={styles.userLogo}>
              <img src={userLogo} alt="user logo" />
              <span>User logo</span>
            </div>
          </div>
          <div className={styles.postContent}>
            <h3>Title</h3>
            <p>Text</p>
          </div>
          <div className={styles.postActions}>
            <span>Post Id</span>
            <button>Delete</button>
          </div>
        </li>
      </ul>
    </div>
  )
}
