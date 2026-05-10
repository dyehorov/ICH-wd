import fs from "fs"
import http from "http"

const host = "127.0.0.1"
const port = 3333

const server = http.createServer((req, res) => {
  try {
    throw new Error("Special error")
  } catch (error) {
    fs.appendFile("errors.log", error.stack, err => {
      if (err) {
        console.log(`There was an error while writing a file: ${err}`)

        res.statusCode = 500
        res.end("Error while writing log")
        return
      }

      console.log("File was written successfully")

      res.setHeader(`Content-Type`, `text/plain`)
      res.statusCode = 500
      res.end("Internal server error")
    })
  }
})

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`)
})
