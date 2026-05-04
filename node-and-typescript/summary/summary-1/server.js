import http from "http"
import fs from "fs"
import path from "path"
import EventEmitter from "events"

const emitter = new EventEmitter()
const host = "127.0.0.1"
const port = 3333

emitter.on("copyStart", (source, dest) => {
  console.log(`[START] Copying fils from ${source} to ${dest}`)
})
emitter.on("copyProgress", (bytes, source) => {
  console.log(`[PROGRESS] Copied ${bytes} from ${source}`)
})
emitter.on("copyComplete", (source, dest) => {
  console.log(`[COMPLETED] Copying fils finished: ${source} -> ${dest}`)
})
emitter.on("copyError", (source, error) => {
  console.log(`[ERROR] While copying ${source}: ${error}`)
})

const server = http.createServer((req, res) => {
  const url = req.url
  if (url === "/") {
    res.end("File operations server")
  } else if (url === "/copy/small") {
    const source = "small.txt"
    const dest = "small_copy.txt"
    fs.access(source, fs.constants.F_OK, err => {
      if (err) {
        emitter.emit("copyError", source, "File was not found")
        res.statusCode = 404
        res.end(
          `Error: file ${source} was not found. You need to create it with /create/small`,
        )
      } else {
        copyFileWithStreams(source, dest, res)
      }
    })
  } else if (url === "/copy/large") {
    const source = "large.txt"
    const dest = "large_copy.txt"
    fs.access(source, fs.constants.F_OK, err => {
      if (err) {
        emitter.emit("copyError", source, "File was not found")
        res.statusCode = 404
        res.end(
          `Error: file ${source} was not found. You need to create it with /create/large`,
        )
      } else {
        copyFileWithStreams(source, dest, res)
      }
    })
  } else if (url === "/copy/image") {
    const source = "photo.jpg"
    const dest = "photo_copy.jpg"
    fs.access(source, fs.constants.F_OK, err => {
      if (err) {
        emitter.emit("copyError", source, "File was not found")
        res.statusCode = 404
        res.end(
          `Error: file ${source} was not found. You need to create it with /create/image`,
        )
      } else {
        copyFileWithStreams(source, dest, res)
      }
    })
  } else if (url === "/copy/backup") {
    const source = "data.txt"
    const dest = "backup/data.txt"
    fs.access(source, fs.constants.F_OK, err => {
      if (err) {
        emitter.emit("copyError", source, "File was not found")
        res.statusCode = 404
        res.end(
          `Error: file ${source} was not found. You need to create it with /create/image`,
        )
      } else {
        copyFileWithStreams(source, dest, res)
      }
    })
  } else if (url === "/create/small") {
    fs.writeFile("small.txt", "This is small file", err => {
      if (err) {
        console.log(`There was an error while creatind a file: ${err}`)
      }
    })
  } else if (url === "/create/large") {
    fs.writeFile("large.txt", "This is large file", err => {
      if (err) {
        console.log(`There was an error while creatind a file: ${err}`)
      }
    })
  } else if (url === "/create/data") {
    fs.writeFile("data.txt", "This is data file", err => {
      if (err) {
        console.log(`There was an error while creatind a file: ${err}`)
      }
    })
  }
})

function copyFileWithStreams(source, dest, res, onProgress) {
  emitter.emit("copyStart", source, dest)
  const readStream = fs.createReadStream(source)
  const writeStream = fs.createWriteStream(dest)
  let bytesCopied = 0
  readStream.on("data", chunk => {
    bytesCopied += chunk.length
    if (onProgress) {
      onProgress(bytesCopied)
    }
    emitter.emit("copyProgress", bytesCopied, source)
  })
  readStream.on("error", err => {
    emitter.emit("copyError", source, err)
    res.statusCode = 404
    res.end(`Error: Source file ${source} was not found.`)
  })
  writeStream.on("error", err => {
    emitter.emit("copyError", dest, err.message)
    res.statusCode = 500
    res.end(`Error: Failed copying file.`)
  })
  writeStream.on("finish", () => {
    emitter.emit("copyComplete", source, dest)
    res.statusCode = 200
    res.end(`File ${source} was successfully copied to ${dest}`)
  })
  readStream.pipe(writeStream)
}
server.listen(port, () => {
  console.log(`Server is running at http://${host}:${port}`)
})
