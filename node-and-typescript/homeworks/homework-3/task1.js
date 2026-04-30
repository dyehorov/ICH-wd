import fs from "fs"

fs.mkdir("myFolder", err => {
  if (err) {
    console.log(`There was an error while creating directory: ${err}`)

    return
  }

  console.log("Directory was successfully created")

  fs.rmdir("myFolder", err => {
    if (err) {
      console.log(`There was an error while deleting directory: ${err}`)

      return
    }

    console.log("Directory was successfully deleted")
  })
})
