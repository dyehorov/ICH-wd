import http from "http"
import logger from "./logger/logger.js"

const port = 3333
const host = "127.0.0.1"

const server = http.createServer((req, res) => {
  const path = req.url
  res.statusCode = 200

  if (path === "/") {
    logger.emit("info", `${path} was requested: home page`)
    res.end("This is Home page")
  } else if (path === "/auth") {
    logger.emit("warning", `${path} was requested: authorization`)
    res.end("Authorization")
  } else if (path === "/video") {
    logger.emit("warning", `${path} was requested: memory usage is high`)
    res.end("This is videos list")
  } else if (path === "/users") {
    logger.emit("info", `${path} was requested: users list`)
    res.end("List of users")
  } else {
    logger.emit("error", `${path} was requested: not found`)
    res.statusCode = 404
    res.end("404, Invalid resource")
  }
})

server.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port} `)
})
