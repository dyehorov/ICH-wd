const http = require("http")

const port = 3333
const host = "127.0.0.1"

const server = http.createServer((req, res) => {
  res.statusCode = 200
  const path = req.url

  if (path === "/") {
    res.setHeader("Content-Type", "text/html")

    res.write("<h1>Main Page</h1>")
  } else if (path === "/about") {
    res.setHeader("Content-Type", "text/plain")

    res.end("About us: We learn Node.js")
  } else if (path === "/contact") {
    res.setHeader("Content-Type", "application/json")

    res.end(
      JSON.stringify({
        phone: "+49 492 329 32 92",
        email: "text@gmail.com",
      }),
    )
  } else if (path === "/text") {
    res.setHeader("Content-Type", "text/plain")

    res.end("Hello, World!")
  } else if (path === "/json") {
    res.setHeader("Content-Type", "application/json")

    res.end(
      JSON.stringify({
        message: "Hello, World!",
        status: "success",
        code: 200,
      }),
    )
  } else if (path === "/admin") {
    res.setHeader("Content-Type", "text/plain")

    res.end("403 Forbidden - Access Denied")
  } else if (path === "/old-page") {
    res.setHeader("Location", "/")
    res.statusCode = 301

    res.end("Redirect to the main page")
  } else if (path === "/secret") {
    res.setHeader("Content-Type", "application/json")
    res.statusCode = 401

    res.end(
      JSON.stringify({
        error: "Unauthorized",

        message: "Authorisation missing",
      }),
    )
  } else if (path === "/delete") {
    res.setHeader("Content-Type", "text/plain")
    res.statusCode = 405

    res.end("405 Method Not Allowed - This route does not support GET method")
  } else if (path === "/error") {
    res.setHeader("Content-Type", "application/json")
    res.statusCode = 500

    res.end(
      JSON.stringify({
        error: "Internal Server Error",

        message: "Inner Server Error",
      }),
    )
  } else {
    res.setHeader("Content-Type", "text/plain")
    res.statusCode = 404

    res.end("404 Not Found - Page not found")
  }
})

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`)
})
