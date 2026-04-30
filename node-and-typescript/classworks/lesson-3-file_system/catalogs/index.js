/**
 Задание 6

Создание каталога, работа с файлами внутри него, чтение содержимого каталога с использованием методов модуля `fs`.

1.	Создайте новый скрипт в вашем проекте, например, `app.js`.

2.	Импортируйте необходимые модули `fs` и `path` в ваш скрипт.

3.	Создайте новый каталог с именем `test` в текущей директории с использованием метода `fs.mkdir`.

4.	После успешного создания каталога, создайте файл с именем `example.txt` внутри каталога `test` и запишите в него текст, например, "Hello, Node.js!" с использованием метода `fs.writeFile`.

5.	После успешной записи файла, прочитайте содержимое каталога `test` с использованием метода `fs.readdir`.

6.	Выведите содержимое каталога `test` на консоль.
 */

const fs = require("fs")
const path = require("path")

const dirPath = path.join(__dirname, "test")

fs.mkdir(dirPath, error => {
  if (error) {
    console.log(`There was an error while creating a directory: ${error}`)
  }

  const filePath = path.join(dirPath, "example.txt")
  const fileContent = "Hello, Node.js!"

  fs.writeFile(filePath, fileContent, "utf8", error => {
    if (error) {
      console.log(`Error while creating a file: ${error}`)

      return
    }

    console.log("File was successfully created")

    fs.readdir(dirPath, (error, files) => {
      if (error) {
        console.log(`Error while reading catalog: ${error}`)

        return
      }

      console.log("Catalog data:", files)
    })
  })

  console.log(`Directory '${dirPath}' was successfully created`)
})
