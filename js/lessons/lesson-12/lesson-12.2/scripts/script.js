// localStorage - объект хранящийся в window, который позволяет долговременно сохранять данные в браузере

// работает как хранилище данных в формате ключа-значение, как и в объектах
// знаечение хранятся в виде строк
// не имеет ограничение по времени хранения, только если не удалить самому
// макс. объем данных ограничен размером 5 МВ

// Зачем нужен localStorage?
//    - Хранение состояни приложения - позволяет восстановить состояния приложения при перезагрузке страницы или возвращении пользователя
//    - Кэширование данных - позволяет избежать повторных запросов к серверу и ускорить загрузку страницы (например: данные пользователя в профиле)
//    - Хранение пользовательских настроек - позволяет сохранить настройки между сеансами работы пользователя и персонализировать опыт (например: тема сайта, интерфейса, )
//    - Хранение токенов аутентификации - позволяет сохранить сеанс пользователя и автоматически входить в систему при повторном посещении сайта.

// В localStorage хранится ТОЛЬКО публичная информация.

localStorage.setItem("name", "Alice") // добавляет значение
localStorage.setItem("age", "53") // добавляет

localStorage.removeItem("login") // удаляет значение

console.log(window.localStorage)

// Если записать в localStorage свойство с существующим уже ключем, то оно просто перезапишет свойство.

// Чтоб извлечь используем localStorage.getItem('key')
// Метод вернет string или null (если нет значение по этому ключу)

const ageInLocalStorage = localStorage.getItem("age")

console.log(ageInLocalStorage)

// Чтоб удалить используем метод .revomeItem('key')

localStorage.removeItem("age")
console.log(localStorage)

// Чтоб полностью очистить объект localStorage, используем метод clear(), например пользователь удалил аккаунт.

// localStorage.clear()
console.log(localStorage)

const counter = document.querySelector(".counter")
const plusOneBtn = document.querySelector(".plusOneBtn")

counter.textContent = localStorage.getItem("counterValue") || 0

plusOneBtn.addEventListener("click", () => {
  // counter.textContent++
  localStorage.setItem("counterValue", ++counter.textContent)
})
