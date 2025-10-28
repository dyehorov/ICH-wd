// DOM (Document object model) - представление веб-страницы в виде дерева js объектов

// Каждый тег - узел (node), у каждого узла могут быть дочерние узлы.

// API - это программный интерфейс, который позволяет взаимодействовать с узлами и изменять их свойства

// Любой функционал который позволяет двум системам взаимодействовать называется API (К примемеру на уроки zoom является API между учениками и учителем)

//            1. Браузер создает DOM дерево при загрузке HTML страницы
//            2. Браузер складывает DOM дерево в перемнную document
//            3. Потом браузер сообщает, что DOM создан с помощью DOMContentLoader

// В devtools во вкладке Elements мы видим интерпритацию DOM дерева в HTML

// Все на странице js объект, состоящих из свойств и методов . Кнопка, инпут, ссылка, список - это все js объекты.

// Для изменение js объекта обращаемся к его свойству и меняем его.

// В браузере есть глобальный объект window, который хранит в себе функционал и информацию о проекте.

// Там же хранится объект document (window.document), именно в documennt записывается DOM дерево

// По сути console.log() мы должны вызывать через его родителя window - window.console.log(), но это опускают

// document объект содержащий ссылку на html елементы

// getElementById() - это метод объекта document, вызывается document.getElementById() - принимает elementId (String), возвращает HTMLElement или null

// const myTitle = document.getElementById("title");
// myTitle теперь ссылка на объект h1

// console.log(myTitle);
// console.dir(myTitle); // показывает все свойства js объекта

const myText = document.getElementById("text");
console.dir(myText);

// Самый универсальный метод это document.querySelector(); - он может принять id, class, tag, attribute. НО он возвращает первое совпадение

const myTitle = document.querySelector("#title");
console.dir(myTitle);

// Чтоб обратится ко всем объектам по селектору - document.querySelectorAll()

const myTexts = document.querySelectorAll("#text");
console.dir(myTexts);

const myContainer = document.querySelector(".container");
console.dir(myContainer);

const text = document.querySelector(".text");
console.dir(text);

// Обновление текстового содержимого можно делать с помощью textContent() или innerText()
// Лучше использовать textContent()

console.dir(text.textContent);

text.textContent = "hello";

const text2 = document.querySelector(".text2");
text2.setAttribute("id", "text2");

console.log(text2);

const usernameInput = document.querySelector(".username");
const acceptCheckBoxInput = document.querySelector(".accept");

usernameInput.value = "hello";
acceptCheckBoxInput.checked = true;

const divName = document.querySelector(".name");

// divName.textContent = "hello";
// divName.innerHTML = "hello";      и то и то выдаст hello, но innerHTML мы используем когда надо добавить не только текст

divName.innerHTML = "<p>Hello!</p>"; // добавится HTML код, а если его в textContent ввести то выведет все как строку

// 1.Создайте HTML-страницу с элементом <p>. Используя querySelector, найдите этот элемент и измените его текст на "Привет, мир!".

const text3 = document.querySelector(".text3");
text3.textContent = "Hello, World!";

//2.Создайте HTML-страницу с изображением <img>. Используя setAttribute, измените атрибут src изображения на другой URL.".

const image = document.querySelector(".img");
image.setAttribute("src", "./assets/images/cat.png");
image.setAttribute("alt", "Image of a Cat");

//3.Создайте HTML-страницу с элементом <span>. С использованием textContent или innerText, измените содержимое элемента на текущую дату.

const span = document.querySelector(".span");
span.textContent = "28.10.2025";

//4.Создайте HTML-страницу с элементом <div>. Используя innerHTML, замените внутренний текст этого элемента на "Это <em>курсивный</em> текст".

const content = document.querySelector(".content");
content.innerHTML = "Это <em>курсивный</em> текст";
