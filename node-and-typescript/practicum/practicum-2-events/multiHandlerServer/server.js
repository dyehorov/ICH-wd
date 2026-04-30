import http from "http"
import EventEmitter from "events"

const port = 3333
const host = "127.0.0.1"
const emitter = new EventEmitter()

emitter.once("firstStart", () => {
  console.log(
    "[ВАЖНО] Сервер запущен впервые! (это сообщение появится только один раз)",
  )
})

const server = http.createServer((req, res) => {
  res.statusCode = 200

  if (req.url === "/") {
    res.end("This is root resource")
  } else if (req.url === "/about") {
    res.end("This is about resource")
  } else if (req.url === "/user") {
    res.end("This is user resource")
  } else {
    res.statusCode = 404
    res.end("404, Page not found")
  }
})

server.listen(port, host, () => {
  emitter.emit("firstStart")
})
