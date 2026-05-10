import fs from "fs"

const readStream = fs.createReadStream("sourceFile.jpg")

const writeStream = fs.createWriteStream("destinationFile.jpg")

readStream.pipe(writeStream)

writeStream.on("finish", () => {
  console.log("Copying successfully done")
})

readStream.on("error", error => {
  console.log("Error while reading file:", error)
})

writeStream.on("error", error => {
  console.log("Error while writing file:", error)
})
