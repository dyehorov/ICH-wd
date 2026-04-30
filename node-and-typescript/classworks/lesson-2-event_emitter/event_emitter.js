const EventEmitter = require("events")
const emitter = new EventEmitter()

emitter.on("hello", () => {
  console.log("Hello my app")
})

emitter.emit("hello")
emitter.emit("hello")

emitter.once("connect", () => {
  console.log("Connected only once!")
})

emitter.emit("connect")
emitter.emit("connect")
emitter.emit("connect")
emitter.emit("connect")
emitter.emit("connect")

emitter.on("message", data => {
  console.log("Message received:", data)
})

emitter.emit("message", "Hello, World!")
