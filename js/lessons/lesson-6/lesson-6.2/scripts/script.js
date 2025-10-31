// создание элемента createElement()

const myText = document.createElement("p"); // на данный момент этот элемент не находится в DOM
myText.textContent = "lorem title";

console.log(myText);

const body = document.querySelector("body");

// body.append(myText); // вот тут мы добавили текст в body, НО в самый конец бади

// если надо чтоб добавляемый элемент был первый, надо использовать prepend()

body.prepend(myText);

body.append("last");

// В аppend можно добавлять много элементов

body.append("first", "second", "third");

// есть еще appendChild, но он принимает только одно значение и оно должно быть в переменной

// body.appendChild(myText);

// чтобы удалить надо использовать remove()
// чтоб удалить дочерний элемент надо использовать removeChild()

body.removeChild(myText);

// Задача 1

const fruits = ["apple", "orange", "banana"];

const listContainer = document.createElement("ul");

// for (let i = 0; i < fruits.length; i++) {
//   listContainer.innerHTML += `<li>${fruits[i]}</li>`;
// }

// body.append(listContainer);

for (let i = 0; i < fruits.length; i++) {
  const liElement = document.createElement("li");
  liElement.textContent = i % 2 ? fruits[i] + "!" : fruits[i];
  listContainer.append(liElement);
}

body.append(listContainer);
