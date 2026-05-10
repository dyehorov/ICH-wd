import axios from "axios"
import fs from "fs"

const BASE_URL = "https://jsonplaceholder.typicode.com/posts"

const fetchData = async () => {
  const response = await axios.get(BASE_URL)

  const data = JSON.stringify(response.data, null, 2)

  fs.writeFile("posts.txt", data, err => {
    if (err) {
      console.log(`There was an error while creating a file: ${err}`)

      return
    }

    fs.readFile("posts.txt", "utf8", (err, data) => {
      if (err) {
        console.log(`There was an error while reading a file: ${err}`)

        return
      }

      console.log(data)
    })
  })
}

fetchData()
