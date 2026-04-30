const fs = require("fs")
const writeStream = fs.createWriteStream("outputWriteStream.txt", "utf8")
writeStream.write("First line!\n")
writeStream.write("Second line!\n")
writeStream.write("Third line!\n")
writeStream.end("Last line!")
writeStream.on("finish", () => {
  console.log("Finished creating file")
})
writeStream.on("error", err => {
  console.error("Error when writing file")
})
