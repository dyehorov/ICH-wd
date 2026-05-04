import dotenv from "dotenv"
import fs from "fs"

dotenv.config()

const fileName = process.env.FILENAME

fs.writeFile(fileName, "Hello World!", err => {
  if (err) {
    console.log(`There was an error while creating a file: ${err}`)

    return
  }

  console.log(`File ${fileName} was created successfully`)
})
