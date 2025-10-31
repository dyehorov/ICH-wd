/* 1. У вас есть HTML-страница с кнопкой и блоком текста. Напишите JavaScript код, который будет выполнять следующие действия:
 
При клике на кнопку, добавьте класс "highlight" к блоку текста, если у него его еще нет. Если класс уже есть, удалите его.
Если у блока текста есть класс "highlight", измените цвет фона на светло-желтый, а если класс отсутствует, верните исходный цвет фона. */

const textBlock = document.querySelector(".text-block");
const highlightButton = document.querySelector(".highlight");

highlightButton.addEventListener("click", () => {
  isHighlighted = textBlock.classList.toggle("highlight-text");

  highlightButton.textContent = isHighlighted ? "unhiglight" : "highlight";
});

/* 2. Создайте страницу, содержащую пустой список (<ul>) и кнопку "Добавить элемент". При каждом клике на кнопку, добавьте новый элемент списка (<li>) с уникальным текстом (например, "Элемент 1", "Элемент 2" и так далее). Текст может быть случайным. */

const list = document.querySelector(".list");
const addElement = document.querySelector(".add-element");
let i = 1;

addElement.addEventListener("click", () => {
  list.innerHTML += `<p>Элемент ${i}</p>`;
  i++;
});

/* 3. На странице есть кнопка и элемент заголовка (<h1>). При каждом клике на кнопку, измените текст заголовка на "Новый текст {номер клика}". */

const title = document.querySelector(".title");
const changeText = document.querySelector(".changeText");
let j = 1;

changeText.addEventListener("click", () => {
  title.textContent = `New text ${j}`;
  j++;
});

/* 4.* На странице есть список (<ul>) с несколькими элементами (<li>) и кнопка "Удалить последний элемент". При каждом клике на кнопку, удалите последний элемент из списка.
 */

const list2 = document.querySelector(".list2");
const deleteItem = document.querySelector(".deleteItem");

deleteItem.addEventListener("click", () => {
  list2.removeChild(list2.lastElementChild);
});

/* Доп. задания: реализовать методы add() remove() replace() toggle() contains() объекта classList через функции
 */

function addClass(element, elementClass) {
  element.classList = `${element.classList} ${elementClass}`;
}

function removeClass(element, elementClass) {
  const arrayOfClasses = element.classList.value.split(" ");
  const filteredArray = [];
  for (let i = 0; i < arrayOfClasses.length; i++) {
    if (arrayOfClasses[i] != elementClass) {
      filteredArray[filteredArray.length] = arrayOfClasses[i];
    }
  }
  filteredArrayToString = filteredArray.join(" ");
  return (element.classList.value = filteredArrayToString);
}

list2.classList.value = removeClass(list2, "list2");
console.log(list2);

function replace(element, oldClass, newClass) {
  const arrayOfClasses = element.classList.value.split(" ");
  for (let i = 0; i < arrayOfClasses.length; i++) {
    if (arrayOfClasses[i] === oldClass) {
      arrayOfClasses[i] = newClass;
    }
  }
  arrayOfClassesToString = arrayOfClasses.join(" ");
  return (element.classList.value = arrayOfClassesToString);
}

list2.classList.value = replace(list2, "list5", "replacedClass");
console.log(list2);

function toggle(element, elementClass) {}

function contains(element, elementClass) {
  const arrayOfClasses = element.classList.value.split(" ");
  for (let i = 0; i < arrayOfClasses.length; i++) {
    if (arrayOfClasses[i] === elementClass) {
      return true;
    }
  }
  return false;
}

console.log(contains(list2, "list4"));

/* 5. * На странице есть кнопка "Сменить цвет фона" и блок (<div>) с текстом. При каждом клике на кнопку, измените цвет фона блока на случайный цвет. */

const myBlock = document.querySelector(".block");
const changeColor = document.querySelector(".changeColor");
let randomColor;

changeColor.addEventListener("click", () => {
  myBlock.style.backgroundColor = `hsl(${Math.floor(
    Math.random() * 360
  )}, 100%, 50%`;
});

/* 6. * На странице есть кнопка "Кликни меня" и блок текста, который отображает текущее количество кликов. При каждом клике на кнопку, увеличивайте счетчик и обновляйте текст блока. */

const counter = document.querySelector(".counter");
const addOne = document.querySelector(".addOne");

addOne.addEventListener("click", () => {
  counter.textContent++;
});

/* 7 ** Создайте простой калькулятор с полем ввода для чисел и кнопками операций (сложение, вычитание, умножение, деление) и кнопкой "Вычислить". При вводе чисел и выборе операции, при нажатии на "Вычислить" отобразите результат операции. */
