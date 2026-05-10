import http from "http"
import fs from "fs"

const port = 3333
const host = "127.0.0.1"

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain")

  try {
    throw new Error("Test server error")
  } catch (err) {
    const log = `[${new Date().toISOString()}] ${err.message}\n`

    fs.appendFile("errors.log", log, fsErr => {
      if (fsErr) {
        console.error("Failed to write log:", fsErr)
      }
    })

    res.statusCode = 500
    res.end("Internal Server Error")
  }
})

server.listen(port, () => {
  console.log(`Server is running on http://${host}:${port}`)
})
