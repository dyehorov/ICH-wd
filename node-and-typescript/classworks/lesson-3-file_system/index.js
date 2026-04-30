const fs = require("fs")

// fs.readFile("input.txt", "utf8", (error, data) => {
//   if (error) {
//     console.log(`There was an error while reading a file: ${error}`)

//     return
//   }

//   fs.writeFile("output.txt", data, "utf8", error => {
//     if (error) {
//       console.log(`There was an error while copying a file: ${error}`)

//       return
//     }

//     console.log(`File was successfully copied!`)
//   })
// })

// try {
//   const data = fs.readFileSync("input.txt", "utf8")

//   fs.writeFileSync("output.txt", data, "utf8")

//   console.log("File was successfully copied!")
// } catch (error) {
//   console.log(`There was an error while copying a file: ${error}`)
// }
