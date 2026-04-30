// Задание 3
// Создать событие, которое будет срабатывать только один раз
// 1.	Создайте новый файл с именем `once_example.js`.
// 2.	В этом файле создайте экземпляр EventEmitter.
// 3.	Зарегистрируйте одноразовый обработчик события.
// 4.	Сгенерируйте событие несколько раз и убедитесь, что обработчик сработал только один раз.

const EventEmitter = require("events")
const emitter = new EventEmitter()

emitter.once("greet", () => {
  console.log("Welcome!")
})

emitter.emit("greet")
emitter.emit("greet")
emitter.emit("greet")
