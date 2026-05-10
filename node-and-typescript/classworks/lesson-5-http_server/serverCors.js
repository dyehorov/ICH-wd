import http from "http"

const port = 3333
const host = "127.0.0.1"

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
  res.setHeader("Access-Control-Allow-Headers", "Content-Type")

  res.statusCode = 200
  res.setHeader("Content-Type", "application/json")
  res.end(JSON.stringify({ message: "CORS enabled" }))
})

server.listen(port, () => {
  console.log(`Server is running on http://${host}:${port}`)
})
