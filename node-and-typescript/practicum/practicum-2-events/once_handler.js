/*
Задание 3
Использование метода `once` для одноразовых событий
1.	Создайте новый файл с именем `once_handler.js`.
2.	Импортируйте модуль `events` и создайте экземпляр `EventEmitter`.
3.	Зарегистрируйте обработчик для события `event` с использованием метода `once`.
4.	Сгенерируйте событие `event` и убедитесь, что обработчик вызывается.
5.	Снова сгенерируйте событие `event` и убедитесь, что обработчик больше не вызывается, так как он был одноразовым.
 */

// Задание 3

const EventEmitter = require("events")
const emitter = new EventEmitter()

emitter.once("event", () => {
  console.log("Triggers ony once")
})

emitter.emit("event")
emitter.emit("event")
emitter.emit("event")
emitter.emit("event")
