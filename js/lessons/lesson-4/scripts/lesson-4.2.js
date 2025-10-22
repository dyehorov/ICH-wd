// Объекты - структуры данных, которые позволяют хранить и организовывать информацию в ввиде пар ключ-значение. Как и массив это непримитивная сущность, но массив это список. Объект это более персонально, например объект о каком-то пользователе.

// Свойство это пара ключ-значение   color: red;          color - ключ       red - значение

// Ключ это "строка", а значение может быть любым типом данных

// Создание объекта

const user = {
  name: "Carl",
  age: 15,
  email: "carl15@test.com",
  address: {
    country: "Japan",
    city: "Tokio",
    street: "124 Str.",
    geo: [42.32, 76.2],
  },
};

// Доступ к объекту

console.log(user);
console.log(user.name); // Carl либо можно вот так console.log(user['name']);
console.log(user.age); // 15
console.log(user["name"]); // Carl

console.log(user.address.city); // Tokio
console.log(user.address.geo[0]); // 42.32

// Редактирование объекта такое же как и в массиве

user.name = "Alice";
console.log(user.name); // Alice

// Добавление свойства в объект

user.isAdmin = true;
console.log(user); // { name: 'Alice', age: 15, email: 'carl15@test.com', isAdmin: true }
console.log(user.isAdmin); // true

// Удаление свойства (delete)

delete user.age;
console.log(user); // { name: 'Alice', email: 'carl15@test.com', isAdmin: true } нет свойства age: 15,

console.log(`Location ${user.address.city}, ${user.address.country}`);

// =============Перебор объекта=====================

// чтоб перебрать объект используем цикл for...in

console.log("========Перебор объекта=========");

// переменную в for...in называют key, объявлять с помощью const/let не надо

for (key in user) {
  console.log(user[key]);
}

console.log("========Задание 1===========");

const person = { name: "Mark", age: 23 };
console.log(person.name, person.age);

console.log("=========Задание 2===========");

const book = { title: "Harry Potter" };
book.title = "Airport";
console.log(book.title);

console.log("=========Задание 3==========");

const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2017,
};

console.log(
  `Год выпуска ${car["year"]}, марки ${car["brand"]}, модель ${car["model"]}`
);

console.log("=========Задание 4===========");

const dog = { name: "Jack", age: 12 };

dog.breed = "Husky";

console.log(dog.breed);

console.log("========Задание 5==========");

const computer = {
  color: "black",
  system: "MacOs",
  price: 1500,
};

delete computer.price;

console.log(computer);

console.log("========Задание 6==========");

const fruit = { name: "Apple", color: "Red", taste: "Sweet" };

for (key in fruit) {
  console.log(`${key}: ${fruit[key]}`);
}
