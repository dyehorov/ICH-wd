/*
Задание 4
Таймер обратного отсчета
1.	Создайте новый файл с именем `countdown_timer.js`.
2.	Импортируйте модуль `events` и создайте экземпляр `EventEmitter`.
3.	Напишите функцию `countdown`, которая принимает количество секунд и объект `EventEmitter`.
4.	Внутри функции `countdown` используйте `setInterval`, чтобы каждую секунду генерировать событие `tick` с текущим оставшимся временем.
5.	Когда таймер достигнет нуля, генерируйте событие `end` и остановите интервал.
6.	Зарегистрируйте обработчики для событий `tick` и `end`, чтобы выводить сообщения в консоль.
7.	Вызовите функцию `countdown` с начальным временем и вашим объектом `EventEmitter`.
*/

// Задание 4

const EventEmitter = require("events")
const emitter = new EventEmitter()

function countdown(seconds, emitter) {
  let secondsLeft = seconds

  const interval = setInterval(() => {
    emitter.emit("tick", secondsLeft)
    secondsLeft--

    if (secondsLeft < 0) {
      clearInterval(interval)
      emitter.emit("end")
    }
  }, 1000)
}

emitter.on("tick", time => {
  console.log(`Time left: ${time} ${time > 1 ? "seconds" : "second"}`)
})

emitter.on("end", () => {
  console.log("Timer finished")
})

countdown(5, emitter)
