import { readFileAsync, emitter } from "./fileReader.js"

emitter.on("start", filePath => {
  console.log(`Started reading file: ${filePath}`)
})

emitter.on("success", data => {
  console.log(`File content: ${data}`)
})

emitter.on("error", message => {
  console.log(`Error while reading file: ${message}`)
})

readFileAsync("./test.txt")
