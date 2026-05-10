import http from "http"
import fs from "fs"
import path from "path"
import dotenv from "dotenv"
import emitter from "./logger.js"

dotenv.config()

const VALID_TOKEN = process.env.VALID_TOKEN
const PORT = process.env.PORT

const server = http.createServer((req, res) => {
  const { url, method, headers } = req

  console.log(`${url} ${method}`)

  if (url === "/") {
    res.end("Home Page")

    return
  }

  if (method === "GET" && url === "/list") {
    if (!checkAuth(headers)) {
      sendJsonResponse(res, 401, {
        error: "Unauthorized",
        message: "There is not token or it's invalid",
      })

      return
    }

    fs.readdir(__dirname, (err, files) => {
      if (err) {
        sendJsonResponse(res, 500, { error: "Error reading directory" })

        return
      }

      const fileList = files.filter(file => {
        try {
          return fs.statSync(path.join(__dirname, file)).isFile()
        } catch (error) {
          return false
        }
      })

      sendJsonResponse(res, 200, { fileList })
    })
  }

  if (url.startsWith("/files/")) {
    const filename = url.substring(7) // example.txt
    const filepath = path.join(__dirname, filename) // http_server/example.txt

    if (!checkAuth(headers)) {
      sendJsonResponse(res, 401, {
        error: "Unauthorized",
        message: "There is no token or it's invalid",
      })

      return
    }

    if (method === "GET") {
      emitter.emit("fileAccess", filename)

      fs.readFile(filepath, "utf8", (err, data) => {
        if (err) {
          sendJsonResponse(res, 500, {
            error: "Error while reading file",
          })

          return
        }

        sendJsonResponse(res, 200, data)
      })
    } else if (method === "POST") {
      let body = "Hello, World! We learn Node.js"
      req.on("data", chunk => {
        body += chunk.toString()
      })

      res.on("end", () => {
        fs.writeFile(filepath, body, "utf8", err => {
          if (err) {
            sendJsonResponse(res, 500, { error: "Error while writing a file" })

            return
          }

          emitter.emit("fileWrite", filename, body.length)

          sendJsonResponse(res, 200, {
            message: `File ${filename} was successfully written`,
            size: body.length,
          })
        })
      })
    } else if (method === "DELETE") {
      fs.unlink(filepath, err => {
        if (err) {
          sendJsonResponse(res, 500, { error: "Error while deleting a file" })

          return
        }

        emitter.emit("fileDelete", filename)

        sendJsonResponse(res, 200, {
          message: `File ${filename} was successfully deleted`,
        })
      })
    } else {
      sendJsonResponse(res, 405, {
        error: "Method not allowed",
      })
    }

    return
  }

  sendJsonResponse(res, 404, {
    error: "Not Found",
    message: "Path does not exist",
  })
})

function checkAuth(headers) {
  const authHeader = headers["authorization"]

  if (!authHeader) {
    emitter.emit("authFailed", "Token is not provided")

    return false
  }

  if (authHeader !== VALID_TOKEN) {
    emitter.emit("authFailed", "Token is not valid")

    return false
  }
  emitter.emit("authSuccess", VALID_TOKEN)

  return true
}

function sendJsonResponse(res, statusCode, data) {
  setCorsHeaders(res)
  res.statusCode = statusCode
  res.setHeader("Content-Type", "application/json")
  res.end(JSON.stringify(data))
}

function setCorsHeaders(res) {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS")
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization")
}

server.listen(PORT, () => {
  console.log(`Server is running at http://127.0.0.1:${PORT}`)
})
