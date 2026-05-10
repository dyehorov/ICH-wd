import fs from "fs"

const readStream = fs.createReadStream("largeFile.txt", "utf-8")

readStream.on("data", chunk => {
  console.log("New data chunk:")
  console.log(chunk)
})

readStream.on("end", () => {
  console.log("Reading file done")
})

readStream.on("error", err => {
  console.log(`There was an error while reading file: ${err.message}`)
})
