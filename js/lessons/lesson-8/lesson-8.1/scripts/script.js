const button = document.querySelector("button");

button.style.color = "green";
button.style.padding = "10px";
button.style.margin = "20px";

console.dir(button.style);

button.setAttribute("style", "color: red"); // все предыдущее стираем и записываем то что в ().

// cssText - тоже самое что и через setAtribute, просто записывается проще.

button.style.cssText = "border: 2px solid red; background: blue";

// У вас есть элемент. При клике на кнопку измените его ширину на 100px с использованием setAttribute.
//1
const text = document.querySelector(".text");
const button2 = document.querySelector(".button-click");

button2.addEventListener("click", () => {
  text.setAttribute("style", "width: 100px");
});

// У вас есть элемент. При клике на кнопку примените несколько произвольных стилей с использованием cssText.
//2
button2.addEventListener("click", () => {
  text.style.cssText = "color: red; font-size: 30px";
});

// У вас есть текст. При клике на кнопку измените цвет текста с использованием объекта style.
//3
button2.addEventListener("click", () => {
  text.style.color = "green";
});

//4.У вас есть элемент, например,
// <div id="styledElement"></div>.
// При клике на кнопку, динамически добавьте следующие стили к этому элементу:
// Ширина: 150 пикселей,
// Высота: 150 пикселей,
// Фон: светло-розовый.
//4
const div = document.querySelector("#styledElement");
const button3 = document.querySelector(".button3");

button3.addEventListener("click", () => {
  div.style.cssText =
    "width: 150px; height: 150px; background-color: lightpink ";
});

//5.У вас есть пустая HTML-страница.
// При загрузке страницы через JS создайте элемент div с id "dynamicElement".
// При клике на кнопку, добавьте следующие стили к этому элементу:
// Ширина: 200 пикселей,
// Высота: 200 пикселей,
// Фон: голубой.
// Добавьте текст "Динамический элемент" внутри этого элемента.
//5
// let divElement;

// document.addEventListener("DOMContentLoaded", () => {
//   divElement = document.createElement("div");
//   divElement.setAttribute("id", "dynamicElement");
//   document.body.appendChild(divElement);
// });

// button3.addEventListener("click", () => {
//   divElement.style.cssText =
//     "width: 200px; height: 200px; background-color: lightblue;";
//   divElement.textContent = "Динамический элемент";
// });

// но лучше сделать вот так

document.addEventListener("DOMContentLoaded", () => {
  const div = document.createElement("div");
  const button = document.createElement("button");
  div.setAttribute("id", "dynamicElement");
  button.textContent = "set styles to div";
  document.body.append(div, button);
  button.addEventListener("click", () => {
    div.cssText = "width: 200px; height: 200px; background-color: blue";
    const text = document.createElement("p");
    text.textContent = "dynamic element";
    div.append(text);
  });
});
