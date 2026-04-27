/*
Задание 3
Создание HTTP сервера с расширенной маршрутизацией и статус-кодами

Создайте новый проект advancedHttpServer.
Создайте файл server.js.
Импортируйте модуль http.
Создайте HTTP сервер и настройте следующие маршруты:

Маршрут "/" (корень)
Статус код: 200
Content-Type: text/html
Ответ: HTML с заголовком первого уровня "Главная страница"

Маршрут "/about"
Статус код: 200
Content-Type: text/plain
Ответ: текст "О нас: Мы изучаем Node.js"

Маршрут "/contact"
Статус код: 200
Content-Type: application/json
Ответ: JSON объект с полями phone и email (например, номер телефона и адрес электронной почты)

Маршрут "/text"
Статус код: 200
Content-Type: text/plain
Ответ: текст "Привет, мир!"

Маршрут "/json"
Статус код: 200
Content-Type: application/json
Ответ: JSON объект с полями message, status и code

Маршрут "/admin"
Статус код: 403
Content-Type: text/plain
Ответ: текст "403 Forbidden - Доступ запрещен"

Маршрут "/old-page"
Статус код: 301
Заголовок Location: '/'
Ответ: текст "Перенаправление на главную страницу" 

Маршрут "/secret"
Статус код: 401
Content-Type: application/json
Ответ: JSON объект с полями error и message об отсутствии авторизации

Маршрут "/delete"
Статус код: 405
Content-Type: text/plain
Ответ: текст "405 Method Not Allowed - Этот маршрут не поддерживает GET"

Маршрут "/error"
Статус код: 500
Content-Type: application/json
Ответ: JSON объект с полями error и message о внутренней ошибке сервера

Для любого другого маршрута (который не описан выше) верните:
Статус код: 404
Content-Type: text/plain
Ответ: текст "404 Not Found - Страница не найдена"

Запустите сервер на порту 3000. Выведите сообщение в консоль, что сервер запущен.

Проверьте работу сервера. Откройте браузер и перейдите по адресам:

http://localhost:3000/
http://localhost:3000/about
http://localhost:3000/contact
http://localhost:3000/text
http://localhost:3000/json
http://localhost:3000/admin
http://localhost:3000/old-page (должно перенаправить на главную)
http://localhost:3000/secret
http://localhost:3000/delete
http://localhost:3000/error
http://localhost:3000/anything-else (должен выдать 404)
*/
