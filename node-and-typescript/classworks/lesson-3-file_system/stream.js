const fs = require("fs")

const readStream = fs.createReadStream("./streamInput.txt", {
  encoding: "utf8",
  highWaterMark: 1024,
})

readStream.on("data", chunk => {
  console.log("Got a chunk of data:", chunk)
  console.log("============================================")
})
