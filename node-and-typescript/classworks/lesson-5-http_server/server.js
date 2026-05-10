import http from "http"

const port = 3333
const host = "127.0.0.1"

// const server = http.createServer((req, res) => {
//   const url = req.url
//   res.statusCode = 200
//   res.setHeader("Content-Type", "text/plain")

//   if (url === "/") {
//     res.end("This is main page!")
//   } else if (url === "/about") {
//     res.end("About us")
//   } else if (url === "/contact") {
//     res.end("Contacts")
//   } else {
//     res.statusCode = 404
//     res.end("404, Page was not found")
//   }
// })

const server = http.createServer((req, res) => {
  const url = req.url
  const method = req.method
  res.statusCode = 200
  res.setHeader("Content-Type", "text/plain")

  if (method !== "GET" && method !== "POST") {
    res.statusCode = 405
    res.end("Method is not allowed")

    return
  }

  if (method === "GET") {
    if (url === "/") {
      res.end("Welcome to the main page!")
    } else if (url === "/about") {
      res.end("This is page about us")
    } else if (url === "/contact") {
      res.end("This is contacts page")
    } else {
      res.statusCode = 404
      res.end("404, Page was not found")
    }
  } else {
    if (url === "/submit") {
      res.statusCode = 201
      res.end("Form sent!")
    } else {
      res.statusCode = 404
      res.end("404, Page was not found")
    }
  }
})

server.listen(port, () => {
  console.log(`Server is running on http://${host}:${port}`)
})
