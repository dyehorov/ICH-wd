import fs from "fs"

const readStream = fs.createReadStream("largeFile.txt", "utf8")

const writeStream = fs.createWriteStream("output.txt", "utf8")

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
