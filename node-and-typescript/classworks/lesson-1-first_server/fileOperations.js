const fs = require("fs")

fs.writeFile("example.txt", "Hello, Node.js!", err => {
  if (err) {
    console.error("Error occured while writing file: ", err)

    return
  }

  console.log("File created successfully!")

  fs.readFile("example.txt", "utf8", (err, data) => {
    if (err) {
      console.error("Error occured while reading file: ", err)

      return
    }

    console.log("File data:", data)

    fs.unlink("example.txt", err => {
      if (err) {
        console.log("Error occured while deleting file: ", err)

        return
      }

      console.log("File deleted successfully!")
    })
  })
})
