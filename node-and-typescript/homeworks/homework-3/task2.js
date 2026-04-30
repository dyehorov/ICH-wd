import fs from "fs"

fs.writeFile("info.txt", "Node.js is awesome!", err => {
  if (err) {
    console.log(`There was an error while creating file: ${err}`)

    return
  }

  console.log("File was successfully created")

  fs.readFile("info.txt", (err, data) => {
    if (err) {
      console.log(`There was an error while reading a: ${err}`)

      return
    }

    console.log(`File's data: ${data}`)
  })
})
