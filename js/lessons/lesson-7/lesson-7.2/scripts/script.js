// Что такое событие? - Событие это любое действие пользователя - клик, прокрут, нажатие кнопки и тд

// События DOM - это сигналы от браузера о том, что что-то произошло, например, страница загружена. JS может реагировать на низ и выполнять код в ответ на них.

// Интерфейс Event - это любое событие, которое происходит в DOM; некоторые из них генерируемые пользователи, а некоторые - генерируемые API (события, означающие завершение процесса анимации)

// Обработка события - это вызов функции при выполнении события.

// Способы обработки событий:
//              1. метод addEventListener()  (самый оптимальный)
//              2. Использование атрибута HTML (Крайне неудобно)

// addEventListener - это метод, который позволяет зарегистрировать обработчик события для определенного элемента

// Обработка события - это когда произошло событие и вызвалась какая-то функция.

const button = document.querySelector(".click-me-btn");
const button2 = document.querySelector(".click-me-btn-function");

button.addEventListener("click", () => {
  console.log("button was clicked");
});

button.addEventListener("mouseover", () => {
  console.log("button mouseover");
});

function onClick() {
  console.log("btn was clicked");
}

button2.addEventListener("click", onClick);

const counter = document.querySelector("h1");
const addButton = document.querySelector(".add-one");
const minusOne = document.querySelector(".minus-one");
const reset = document.querySelector(".reset");

addButton.addEventListener("click", () => {
  counter.textContent++;
});

minusOne.addEventListener("click", () => {
  counter.textContent--;
});

reset.addEventListener("click", () => {
  counter.textContent = 0;
});

const addLineBtn = document.querySelector(".add-line");

addLineBtn.addEventListener("click", () => {
  const textElement = document.createElement("p");
  textElement.textContent = "Hello World";
  document.body.appendChild(textElement);
});

const taskValueInput = document.querySelector(".task-value");
const saveTaskBtn = document.querySelector(".save-task-btn");
const toDoContainer = document.querySelector(".to-do");

saveTaskBtn.addEventListener("click", () => {
  if (taskValueInput.value !== "") {
    const task = document.createElement("p");
    task.innerHTML = `<p>${taskValueInput.value}</p>`;
    toDoContainer.appendChild(task);
    taskValueInput.value = "";
  } else {
    console.log("Enter a task");
  }
});

const btn = document.querySelector(".btn");

btn.addEventListener("click", (event) => {
  console.dir(event.target);
});

// event.stopPropagation(); если есть слои, чтоб не нажимать на верхний слой и под ним слои тоже срабатывали.
