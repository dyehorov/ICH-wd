/**
 Задание 6
Управление состоянием пользователя
1.	Создайте новый файл с именем `user_state.js`.
2.	Импортируйте модуль `events` и создайте экземпляр `EventEmitter`.
3.	Напишите функцию `changeUserState`, которая принимает новый статус и объект `EventEmitter`.
4.	Внутри функции `changeUserState` генерируйте событие `stateChange` с переданным статусом.
5.	Зарегистрируйте обработчики для события `stateChange`, чтобы выводить новый статус в консоль.
6.	Вызовите функцию `changeUserState` несколько раз с разными статусами.
 */

// Задание 6

const EventEmitter = require("events")
const emitter = new EventEmitter()

function changeUserState(newState, emitter) {
  emitter.emit("stateChange", newState)
}

emitter.on("stateChange", newState => {
  console.log(`New state: ${newState}`)
})

changeUserState("Registered", emitter)
changeUserState("Loged in", emitter)
changeUserState("Loged out", emitter)
