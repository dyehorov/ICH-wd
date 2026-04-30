import chalk from "chalk"
import EventEmitter from "events"

const logger = new EventEmitter()

function getTime() {
  const date = new Date()
  return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}

logger.on("info", message => {
  console.log(`${chalk.black.bgGreen.bold("INFO")}: ${getTime()} ${message}`)
})

logger.on("warning", message => {
  const date = new Date()
  console.log(
    `${chalk.black.bgYellow.bold("WARNING")}: ${getTime()} ${message}`,
  )
})

logger.on("error", message => {
  const date = new Date()
  console.log(`${chalk.black.bgRed.bold("ERROR")}: ${getTime()} ${message}`)
})

export default logger
