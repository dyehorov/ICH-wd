// 1. Создайте массив объектов с полями "имя" и "возраст". Напишите функцию, используя метод map,чтобы создать новый массив объектов, в которых добавлено новое свойство "статус" со значением "взрослый" для тех, кто старше 18 лет, и "ребенок" для остальных.

console.log("Задание 1");

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 15 },
];

function addAdultAndChildKey(array) {
  return array.map((elem) => ({
    name: elem.name,
    age: elem.age,
    status: elem.age > 18 ? "Adult" : "Child",
  }));
}

console.log(addAdultAndChildKey(people));

// 2. Создайте массив объектов с полями "название" и "рейтинг". Используйте метод forEach, чтобы вывести в консоль названия объектов, у которых рейтинг больше 4.

console.log("Задание 2");

const movies = [
  { title: "Inception", rating: 4.9 },
  { title: "The Dark Knight", rating: 5.0 },
  { title: "Interstellar", rating: 4.8 },
  { title: "The Matrix", rating: 4.5 },
];

function giveMovieWithRatingHigherThan4(array) {
  array.forEach((elem) => {
    if (elem.rating > 4) {
      console.log(elem.title);
    }
  });
}

giveMovieWithRatingHigherThan4(movies);
