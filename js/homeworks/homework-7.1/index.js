/* 
Задание 1
Создайте объект, представляющий человека, с полями "имя" и "возраст". Выведите информацию о человеке в консоль.

Задание 2

Создайте объект, представляющий книгу, с полями "название" и "автор". Создайте массив объектов книг и выведите информацию о каждой книге в консоль.

Задание 3

Дан объект, который олицетворяет собой прямоугольник и длины его сторон const rectangle = { a: 10, b: 35 }. Добавьте в этот объект ключи s  и p, в s должна быть вычислена площадь прямоугольника, а в p его периметр.


Задание 4

Создайте массив объектов, представляющих различные фрукты. Используйте цикл для фильтрации только тех фруктов, которые имеют цвет "красный", и выведите их в консоль.


Задание 5

Создайте объект `playlist` с песнями в виде массива объектов. Выведите информацию о каждой песне в консоль

*/

console.log("Задание 1");

const person = { name: "Mario", age: 20 };

console.log(`Name: ${person.name}, age: ${person.age}`);

console.log("Задание 2");

const book = { name: "Harry Potter", author: "J.K. Rowling" };

const books = [
  { name: "Harry Potter", author: "J.K. Rowling" },
  { name: "1984", author: "George Orwell" },
  { name: "The Alchemist", author: "Paulo Coelho" },
];
for (let i = 0; i < books.length; i++) {
  console.log(`${books[i]["name"]}: ${books[i]["author"]}`);
}

console.log("Задание 3");

const rectangle = { a: 10, b: 35 };

rectangle.s = rectangle.a * rectangle.b;
rectangle.p = (rectangle.a + rectangle.b) * 2;

console.log(rectangle);

console.log("Задание 4");

const fruits = [
  { name: "Apple", color: "Red", taste: "Sweet" },
  { name: "Banana", color: "Yellow", taste: "Sweet" },
  { name: "Mango", color: "Green", taste: "Tart" },
  { name: "Kiwi", color: "Green", taste: "Sweet" },
  { name: "Cherry", color: "Red", taste: "Sweet" },
  { name: "Orange", color: "Orange", taste: "Sweet" },
];

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i]["color"] === "Red") {
    console.log(fruits[i]);
  }
}

console.log("Задание 5");

const playlist = {
  topFiveSongs: [
    {
      title: "The Fate of Ophelia",
      artist: "Taylor Swift",
    },
    {
      title: "Golden",
      artist: "HUNTR/X, EJAE, AUDREY NUNA, REI AMI, KPop Demon Hunters Cast",
    },
    {
      title: "Opalite",
      artist: "Taylor Swift",
    },
    {
      title: "back to friends",
      artist: "sombr",
    },
    {
      title: "Man I Need",
      artist: "Olivia Dean",
    },
  ],
};

for (key in playlist) {
  console.log(`Playlist name: ${key}`);
  for (let i = 0; i < playlist[key].length; i++) {
    console.log(
      `${i + 1}: ${playlist[key][i]["title"]} - ${playlist[key][i]["artist"]}`
    );
  }
}
