const http = require("http")
const fs = require("fs")
const path = require("path")
const EventEmitter = require("events")

const emitter = new EventEmitter()
const PORT = 3333

const examplePath = path.join(__dirname, "example.txt")
const copyPath = path.join(__dirname, "example_copy.txt")
const dirPath = path.join(__dirname, "mydir")

emitter.on("fileRead", () => {
  console.log("[EVENT] File read")
})

emitter.on("fileWritten", () => {
  console.log("[EVENT] File written")
})

emitter.on("fileDeleted", () => {
  console.log("[EVENT] File deleted")
})

emitter.on("dirCreated", () => {
  console.log("[EVENT] Directory created")
})

emitter.on("dirRead", () => {
  console.log("[EVENT] Directory read")
})

emitter.on("fileCopied", () => {
  console.log("[EVENT] File copied")
})

emitter.on("error", error => {
  console.log("[ERROR]", error.message)
})

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Server is running...")

    return
  }

  if (req.url === "/read/example.txt") {
    fs.readFile(examplePath, "utf8", (err, data) => {
      if (err) {
        emitter.emit("error", err)
        res.statusCode = 500
        res.end("Error while reading file")

        return
      }

      emitter.emit("fileRead")

      res.end(data)
    })
    return
  }

  if (req.url === "/write/example.txt") {
    fs.writeFile(examplePath, "Hello from Node.js!", err => {
      if (err) {
        emitter.emit("error", err)
        res.statusCode = 500
        res.end("Error writing file")
        return
      }

      emitter.emit("fileWritten")
      res.end("File written successfully")
    })
    return
  }

  if (req.url === "/delete/example.txt") {
    fs.unlink(examplePath, err => {
      if (err) {
        emitter.emit("error", err)
        res.statusCode = 500
        res.end("Error deleting file")
        return
      }

      emitter.emit("fileDeleted")
      res.end("File deleted successfully")
    })
    return
  }

  if (req.url === "/mkdir/mydir") {
    fs.mkdir(dirPath, { recursive: true }, err => {
      if (err) {
        emitter.emit("error", err)
        res.statusCode = 500
        res.end("Error creating directory")
        return
      }

      emitter.emit("dirCreated")
      res.end("Directory created successfully")
    })
    return
  }

  if (req.url === "/readdir/mydir") {
    fs.readdir(dirPath, (err, files) => {
      if (err) {
        emitter.emit("error", err)
        res.statusCode = 500
        res.end("Error reading directory")
        return
      }

      emitter.emit("dirRead")
      res.end(files.join("\n"))
    })
    return
  }

  if (req.url === "/copy/example.txt") {
    fs.copyFile(examplePath, copyPath, err => {
      if (err) {
        emitter.emit("error", err)
        res.statusCode = 500
        res.end("Error copying file")
        return
      }

      emitter.emit("fileCopied")
      res.end("File copied successfully")
    })
    return
  }

  res.statusCode = 404
  res.end("Route not found")
})

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
