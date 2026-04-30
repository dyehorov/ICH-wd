/*
Задание 2
Удаление обработчика события
1.	Создайте новый файл с именем `remove_handler.js`.
2.	Импортируйте модуль `events` и создайте экземпляр `EventEmitter`.
3.	Определите функцию-обработчик, которая будет регистрироваться для события `event`.
4.	Зарегистрируйте этот обработчик для события `event`.
5.	Сгенерируйте событие `event` и убедитесь, что обработчик вызывается.
6.	Удалите зарегистрированный обработчик для события `event`.
7.	Снова сгенерируйте событие `event` и убедитесь, что обработчик больше не вызывается.
*/

// Задание 2

const EventEmitter = require("events")
const emitter = new EventEmitter()

const handler = () => {
  console.log("Hello my app")
}

emitter.on("hello", handler)

emitter.emit("hello")

emitter.removeListener("hello", handler)

emitter.emit("hello")
