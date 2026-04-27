const http = require("http")

const port = 3333
const host = "127.0.0.1"

const server = http.createServer((req, res) => {
  res.statusCode = 200
  const path = req.url

  if (path === "/") {
    res.end("Welcome to home page")
  } else if (path === "/about") {
    res.end("About us")
  } else {
    res.statusCode = 404
    res.end("404, Page not found")
  }
})

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`)
})
