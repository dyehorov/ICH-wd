/**
 * Задание 7
Создайте скрипт для асинхронного чтения файла с событиями для разных исходов.
Создайте проект fileEventReader
Создайте файл fileReader.js:
Импортируйте fs и events
Создайте экземпляр EventEmitter
Создайте функцию readFileAsync(filePath), которая:
Генерирует событие start перед чтением
Читает файл асинхронно
При успехе генерирует событие success с содержимым файла
При ошибке генерирует событие error с текстом ошибки
Экспортируйте функцию и эмиттер
Создайте файл app.js:
Импортируйте модуль
Зарегистрируйте обработчики для событий start, success, error
Вызовите readFileAsync('./test.txt')
Создайте файл test.txt с любым текстом
Запустите app.js
 */

import fs from "fs"
import EventEmitter from "events"

const emitter = new EventEmitter()

function readFileAsync(filePath) {
  emitter.emit("start", filePath)

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      emitter.emit("error", err.message)

      return
    }

    emitter.emit("success", data)
  })
}

export { readFileAsync, emitter }
