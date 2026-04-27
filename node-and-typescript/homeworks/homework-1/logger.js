const fs = require("fs")

function logMessage(message) {
  fs.appendFile("log.txt", message, err => {
    if (err) {
      console.error("There was and error adding log to log.txt:", err)
    }

    console.log("Log is added to log.txt!")
  })
}

module.exports = {
  logMessage,
}
