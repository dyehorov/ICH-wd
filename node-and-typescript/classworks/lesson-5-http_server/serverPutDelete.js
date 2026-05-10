import http from "http"

const port = 3333
const host = "127.0.0.1"

const server = http.createServer((req, res) => {
  const method = req.method

  res.setHeader("Content-Type", "text/plain")
  res.statusCode = 200

  if (method === "PUT") {
    res.end("PUT-request handled")
  } else if (method === "DELETE") {
    res.end("DELETE-request handled")
  } else {
    res.statusCode = 405
    res.end("Method Not Allowed")
  }
})

server.listen(port, () => {
  console.log(`Server is running on http://${host}:${port}`)
})
