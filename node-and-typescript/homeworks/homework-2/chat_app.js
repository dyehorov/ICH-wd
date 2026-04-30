const EventEmitter = require("events")

const emitter = new EventEmitter()

function sendMessage(username, message, emitter) {
  emitter.emit("message", username, message)
}

emitter.on("message", (username, message) => {
  console.log(`${username}: ${message}`)
})

sendMessage("Tom", "Hello, how are you?", emitter)
sendMessage("Nancy", "Hello, where are you?", emitter)
sendMessage("Carl", "Let's watch movie tonight", emitter)
