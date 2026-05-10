import http from "http"
import dotenv from "dotenv"

dotenv.config()

const password = process.env.PASSWORD

const host = "127.0.0.1"
const port = 3333

const server = http.createServer((req, res) => {
  const authorization = req.headers["authorization"]

  res.setHeader("Content-Type", "text/plain")

  if (authorization !== password) {
    res.statusCode = 401
    res.end("Unauthorized")

    return
  }

  res.statusCode = 200
  res.end("Authorization header received")
})

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`)
})
