// Задание 2
// Зарегистрировать несколько обработчиков на одно событие и удалить один из них
// 1.	Создайте новый файл с именем `event_handlers_example.js`.
// 2.	В этом файле создайте экземпляр EventEmitter.
// 3.	Зарегистрируйте два обработчика на одно событие.
// 4.	Удалите один из обработчиков.
// 5.	Сгенерируйте событие и убедитесь, что остался только один обработчик.

const EventEmitter = require("events")
const emitter = new EventEmitter()

const handler1 = () => {
  console.log("Hello my app")
}

const handler2 = () => {
  console.log("We learn Node.js!")
}

emitter.on("hello", handler1)
emitter.on("hello", handler2)

emitter.removeListener("hello", handler1)

emitter.emit("hello")
