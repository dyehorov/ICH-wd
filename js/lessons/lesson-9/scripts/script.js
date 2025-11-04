// Объект event - это событие, которое происходит в браузере (клик мышки, нажатие клавиши). Создается автоматически при возникновении события и содержит информацию событии, такую как тип события и целевой элемент.

//  Основные методы объекта event
//             1. preventDefault() позволяет отменить стандартное поведение браузера по умолчанию при возникновении события.
//             2. stopPropagation() - позволяет остановить распостранение события дальше по цепочке элементов
//             3. stopImmediatePropagation() - позволяет остановить распостранение события сразу же и предотвратить вызов других обработчиков этого же события

//  stopPropagation() - останавливает пробитие к родителю, stopImmediatePropagation() - останавливает пробитие к родителю и распостранение вызовов других обработчиков. Если есть несколько обработчиков на одном элементе, то только один обработается.

// Стандартное поведение - перезагрузка страницы при нажатии Submit в форме.

// Типы событий при работе с формой
//         1. submit - возникает, когда пользователь отправляет форму.
//         2. reset - возникает, когда пользователь сбрасывает значения формы и возвращает ее к   исходному состоянию
//         3. change - возникает, когда значение любого типа input изменяется (смена фокуса на другой элемент)
//         4. input - возникает при каждом изменении значения элемента формы, включая каждое нажатие клавиши. Только отслеживает тип text в input

// Доп. типы событий
//         1. focus - когда элемент получает фокус ввода
//         2. blur - когда элемент теряет фокус ввода
//         3. keydown - когда пользователь нажимает клавишу на клавиатуре.
//         4. keyup - когда пользователь отпускает клавишу на клавиатуре.

// 1. Создайте форму с полем для ввода email и кнопкой "Отправить". Напишите JavaScript-функцию, которая будет вызываться при отправке формы. В функции проверьте, чтобы введенный email содержал символ "@". Если условие выполняется, выведите сообщение "Форма отправлена", в противном случае выведите сообщение "Введите корректный email".

const form = document.querySelector(".form");

function checkSpecialSymbol(string, symbol) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === symbol) {
      return true;
    }
  }

  return false;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailInput = event.target.elements["email"];

  const isEmailValid = checkSpecialSymbol(emailInput.value, "@");

  if (isEmailValid) {
    console.log("Form data has been sent");
  } else {
    console.log("Invalid data");
  }
});

// 2. Создайте форму с выпадающим списком (select) для выбора языка и кнопкой "Применить". Напишите JavaScript-функцию, которая будет вызываться при отправке формы. В функции получите выбранное значение из выпадающего списка и выведите сообщение "Язык выбран: [выбранное значение]"

const formSelect = document.querySelector(".form-select");
const select = document.querySelector("#lang");
const message = document.createElement("p");
formSelect.appendChild(message);

formSelect.addEventListener("submit", (event) => {
  event.preventDefault();

  message.textContent = `Язык выбран: ${select.value}`;
});

//3.Создайте форму с радиокнопками для выбора цвета фона и кнопкой "Применить". Напишите JavaScript-функцию, которая будет вызываться при отправке формы. В функции получите выбранное значение радиокнопки и установите соответствующий цвет фона для страницы.

const setColorForm = document.querySelector("#setColorForm");

setColorForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const color = event.target.elements["color"].value;

  if (!color) {
    return;
  }

  document.body.style.backgroundColor = color;
});
