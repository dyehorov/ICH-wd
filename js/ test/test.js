// // const user = { name: "Сharly" };

// // function changeUserName(user) {
// //   user.name = "Mark";
// //   return user;
// // }

// // const newUser = changeUserName(user);

// // console.log(user); // { name: 'Mark' }
// // console.log(newUser); // { name: 'Mark' }

// // const users = [
// //   { name: "Alice", age: 25 },
// //   { name: "Bob", age: 30 },
// //   { name: "Luca", age: 20 },
// // ];

// // for (let user of users) {
// //   if (user.age < 25) {
// //     console.log(user);
// //   }
// // }

// // const newUsers = [];

// // for (let user of users) {
// //   newUsers.push(user.name);
// // }

// // console.log(newUsers);

// // let usersAgeSum = 0;

// // for (let user of users) {
// //   usersAgeSum += user.age;
// // }

// // const average = usersAgeSum / users.length;

// // console.log(average);

// // console.log(null == undefined);

// // console.log(0 || "default");

// function createCounter() {
//   let count = 0;

//   return function () {
//     count++;
//     console.log(count);
//   };
// }

// const counter = createCounter();

// counter(); // 1
// counter(); // 2
// counter(); // 3
// counter(); // 4
// counter(); // 5

// // 1️⃣ Фиксированное имя свойства
// const car = { brand: "Audi", color: "black" };
// // Выведи цвет машины через точку

// console.log(car.color);

// // 2️⃣ Имя свойства хранится в переменной
// const key = "brand";
// // Выведи марку машины, используя переменную key (⚠️ не через точку)

// console.log(car[key]);

// // 3️⃣ Имя свойства создаётся динамически
// const person = {};
// const field = "age";
// person[field] = 25;
// // Добавь в объект person новое свойство age и выведи его

// person[field] = 55;

// console.log(person[field]);

// // 4️⃣ Вычисляемое выражение
// const data = {};
// const id = 3;
// // Создай свойство "user_3" со значением "Sofiia" и выведи объект

// data["user_" + id] = "Sofiia";

// console.log(data["user_" + 3]);

// // 5️⃣ Ошибка нарочно :)
// const user = { name: "Lena" };
// const prop = "name";
// // Попробуй console.log(user.prop) и объясни, почему undefined

// console.log(user.prop); // undefined потому что в переменной prop лежит строка "name", поэтому мы получаем user."name".

// // 6️⃣ Попробуй теперь console.log(user[prop]) — чем отличается?

// console.log(user[prop]); // Lena, потому что ту мы обращаемся к объекту и просим вывести значение ключа name

// // 7️⃣ Пример с массивом объектов
// const products1 = [
//   { id: 1, name: "Book" },
//   { id: 2, name: "Pen" },
//   { id: 3, name: "Bag" },
// ];

// // Создай пустой объект result = {}
// // Пройди по products (forEach или reduce)
// // и добавь в result свойства вида result[product.id] = product.name

// // После цикла выведи result
// // Должно получиться: { 1: "Book", 2: "Pen", 3: "Bag" }

// const result = {};

// products1.forEach((item) => {
//   result[item.id] = item.name;
// });

// console.log(result);

// // const numbers = [2, 4, 6, 8];

// // const doubledNumbers = numbers.map((item) => item * 2);
// // console.log(doubledNumbers);

// // const numbers2 = [1, 2, 3, 4, 5, 6];

// // const onlyEven = numbers2.filter((item) => item % 2 === 0);
// // console.log(onlyEven);

// // const fruits = ["apple", "banana", "cherry"];
// // fruits.forEach((item, index) => console.log(`${index}: ${item}`));

// // const users = [
// //   { name: "Sofiia", age: 21 },
// //   { name: "Danylo", age: 27 },
// //   { name: "Lena", age: 19 },
// // ];

// // const onlyNames = users.map((item) => item.name);
// // console.log(onlyNames);

// // const olderTwenty = users.filter((item) => item.age > 20);
// // console.log(olderTwenty);

// // const numbers3 = [1, 2, 3, 4, 5, 6];

// // const result = numbers3
// //   .filter((item) => item % 2 === 0)
// //   .map((item) => item ** 2)
// //   .reduce((acc, item) => acc + item, 0);

// // console.log(result);

// // const people = ["Sofiia", "Danylo", "Lena"];

// // const peopleInString = people.join();
// // console.log(peopleInString);

// // const nums = [5, 10, -3, 7];
// // console.log(nums.every((item) => item > 0));

// // const nums2 = [10, 20, 55, 99];
// // console.log(nums2.some((item) => item > 100));

// // const arr = [10, 20, 30, 40]; // должно вернуть 25
// // console.log(arr.reduce((sum, item) => sum + item, 0) / arr.length);

// // // 1. Верни новый массив, где каждое число увеличено на 10.
// // const numbers = [1, 5, 10, 20];

// // const addTen = numbers.map((item) => item + 10);
// // console.log(addTen);

// // // 2. Из этого массива оставь только элементы, которые длиннее 4 символов.
// // const words = ["sun", "planet", "sky", "universe"];

// // console.log(words.filter((item) => item.length > 4));

// // // 3. Найди среднее значение температур.
// // const temps = [20, 25, 30, 35];

// // console.log(temps.reduce((acc, item) => acc + item, 0) / temps.length);

// // // 4. Верни массив только с именами пользователей.
// // const users = [
// //   { name: "Sofiia", age: 21 },
// //   { name: "Alex", age: 19 },
// //   { name: "Danylo", age: 27 },
// // ];

// // const usersName = users.map((item) => item.name);
// // console.log(usersName);

// // // 5. Найди первого пользователя, которому больше 20 лет.

// // const firstUserOlder20 = users.find((item) => item.age > 20);
// // console.log(firstUserOlder20);

// // // 6. Проверь, есть ли хотя бы одно число больше 100.
// // const nums = [50, 75, 120, 80];

// // console.log(nums.some((item) => item > 100));

// // // 7. Проверь, все ли числа положительные.
// // const values = [1, 2, 3, 4, -5];

// // console.log(values.every((item) => item > 0));

// // // 8. Отсортируй массив объектов по возрасту от младшего к старшему.
// // const people = [
// //   { name: "Lena", age: 25 },
// //   { name: "Sofiia", age: 20 },
// //   { name: "Danylo", age: 30 },
// // ];

// // console.log(people.sort((a, b) => a.age - b.age));

// // // 9. Найди сумму квадратов нечётных чисел.
// // const arr = [1, 2, 3, 4, 5, 6];

// // const result = arr
// //   .filter((item) => item % 2 !== 0)
// //   .map((item) => item ** 2)
// //   .reduce((acc, item) => acc + item, 0);

// // console.log(result);

// // // 10. Из этого массива создай строку формата "apple → banana → cherry".
// // const fruits = ["apple", "banana", "cherry"];

// // console.log(fruits.join(" -> "));

// // 1️⃣ Подсчитай количество положительных и отрицательных чисел отдельно.
// // результат: { positive: 3, negative: 2 }
// // const nums = [10, -5, 7, -3, 8];

// // const positivesAndNegatives = (arr) => {
// //   let positive = 0;
// //   let negative = 0;
// //   arr.forEach((element) => {
// //     element > 0 ? positive++ : negative++;
// //   });
// //   return { positive: positive, negative: negative };
// // };

// // const positiveNegativeNumbers = positivesAndNegatives(nums);
// // console.log(positiveNegativeNumbers);

// // // 2️⃣ Удали все дубликаты из массива.
// // // результат: [1, 2, 3, 4, 5]
// // const arr = [1, 2, 2, 3, 4, 4, 5];

// // const uniqueArr = arr.filter((item, index) => item !== arr[index - 1]);
// // console.log(uniqueArr);

// // 3️⃣ Подсчитай, сколько раз встречается каждое слово.
// // результат: { apple: 3, banana: 2, cherry: 1 }
// // const fruits = ["apple", "banana", "apple", "cherry", "banana", "apple"];

// // const result3 = fruits.reduce((acc, item) => {
// //   acc[item] = (acc[item] ?? 0) + 1;

// //   acc[apple] = 0 + 1 = 1
// //   acc[apple] = 1 + 1

// //   return acc;
// // }, []);

// // console.log(result3);

// // fruits.reduce((acc,item) => {
// //   if (!acc[item]) {
// //     acc[item] = 0
// //   }

// //   if (acc[item]) {
// //     acc[item] += 1
// //   }

// //   return acc
// // }, {} )

// // // 4️⃣ Объедини массив объектов в один объект по id.
// // // результат: { 1: "Sofiia", 2: "Danylo", 3: "Lena" }
// // const users = [
// //   { id: 1, name: "Sofiia" },
// //   { id: 2, name: "Danylo" },
// //   { id: 3, name: "Lena" },
// // ];

// // const usersObject = users.reduce((acc, item) => {
// //   acc[item.id] = item.name;

// //   return acc;
// // }, {});

// // console.log(usersObject);

// // // 5️⃣ Найди самого молодого и самого старшего пользователя.
// // // результат: { min: { name: "Lena", age: 19 }, max: { name: "Danylo", age: 30 } }
// // const people = [
// //   { name: "Sofiia", age: 21 },
// //   { name: "Danylo", age: 30 },
// //   { name: "Lena", age: 19 },
// // ];

// // // 6️⃣ Преобразуй массив в “плоский” (flatten).
// // // результат: [1, 2, 3, 4, 5]
// // const nested = [1, [2, 3], [4, [5]]];

// // // 7️⃣ Получи общую сумму стоимости всех товаров.
// // // результат: 300
// // const products = [
// //   { name: "Book", price: 100 },
// //   { name: "Pen", price: 50 },
// //   { name: "Bag", price: 150 },
// // ];

// // const sum = products.reduce((acc, item) => {
// //   return acc + item.price;
// // }, 0);

// // console.log("sum", sum);

// // // 8️⃣ Отсортируй имена пользователей по алфавиту (без учёта регистра).
// // // результат: ["Alex", "Danylo", "Lena", "Sofiia"]
// // const names = ["Sofiia", "lena", "Danylo", "alex"];

// // // 9️⃣ Группируй пользователей по возрасту (например, <25 и ≥25).
// // // результат: { young: ["Lena", "Sofiia"], adult: ["Danylo"] }
// // const groupPeople = [
// //   { name: "Sofiia", age: 21 },
// //   { name: "Danylo", age: 27 },
// //   { name: "Lena", age: 19 },
// // ];

// // // 🔟 Найди средний рейтинг всех фильмов, округлённый до десятых.
// // // результат: 8.3
// // const movies = [
// //   { title: "Inception", rating: 9.1 },
// //   { title: "Avatar", rating: 7.8 },
// //   { title: "Interstellar", rating: 8.0 },
// // ];

// 1 Найди сумму всех цен товаров
const products1 = [{ price: 100 }, { price: 200 }, { price: 300 }];
// Ожидаемый результат: 600

console.log("Задание 1");

function sumOfProducts(array) {
  let sum = 0;
  for (const element of array) {
    sum += element.price;
  }

  return sum;
}

console.log(sumOfProducts(products1));

// 2️⃣ Извлеки только имена пользователей
const users2 = [
  { name: "Sofiia", age: 22 },
  { name: "Danylo", age: 24 },
];
// Ожидаемый результат: ["Sofiia", "Danylo"]

console.log("Задание 2");

function onlyNames(array) {
  const onlyNames = [];
  for (const element of array) {
    onlyNames.push(element.name);
  }
  return onlyNames;
}

console.log(onlyNames(users2));

// 3️⃣ Отфильтруй пользователей старше 22 лет
const users3 = [
  { name: "Sofiia", age: 22 },
  { name: "Danylo", age: 24 },
];
// Ожидаемый результат: [{ name: "Danylo", age: 24 }]

console.log("Задание 3");

function showUsersOlder22(array) {
  return array.filter((user) => user.age > 22);
}

console.log(showUsersOlder22(users3));

// 4️⃣ Добавь свойство isAdult: true, если age >= 18
const users4 = [
  { name: "Sofiia", age: 22 },
  { name: "Danylo", age: 15 },
];

// Ожидаемый результат:
// [{ name: "Sofiia", age: 22, isAdult: true }, { name: "Danylo", age: 15, isAdult: false }]

console.log("Задание 4");

function addAdultKey(array) {
  const newArray = [];
  let i = 0;
  for (const element of array) {
    const newElement = { ...element };
    newElement.isAdult = newElement.age >= 18 ? true : false;
    newArray[i] = newElement;
    i++;
  }

  return newArray;
}

console.log(addAdultKey(users4));

// 5️⃣ Найди объект с минимальной ценой
const products5 = [
  { name: "apple", price: 3 },
  { name: "banana", price: 2 },
  { name: "mango", price: 5 },
];
// Ожидаемый результат: { name: "banana", price: 2 }

console.log("Задание 5");

function findObjectWithMinimalPrice(array) {
  const objectWithMinimalPrice = { name: null, price: Infinity };

  for (const element of array) {
    if (objectWithMinimalPrice.price > element.price) {
      objectWithMinimalPrice.name = element.name;
      objectWithMinimalPrice.price = element.price;
    }
  }

  return objectWithMinimalPrice;
}

console.log(findObjectWithMinimalPrice(products5));

// 6️⃣ Преобразуй массив в объект по id
const users6 = [
  { id: 1, name: "Sofiia" },
  { id: 2, name: "Danylo" },
];
// Ожидаемый результат: { 1: "Sofiia", 2: "Danylo" }

console.log("Задание 6");

function makeObjectFromArray(array) {
  const newObject = {};
  for (const element of array) {
    newObject[element.id] = element.name;
  }
  return newObject;
}

console.log(makeObjectFromArray(users6));

// 7️⃣ Подсчитай количество товаров по категориям
const items7 = [
  { name: "apple", category: "fruit" },
  { name: "banana", category: "fruit" },
  { name: "carrot", category: "vegetable" },
];
// Ожидаемый результат: { fruit: 2, vegetable: 1 }

console.log("Задание 7");

function sumOfProductsInEachCategory(array) {
  const newObject = {};
  for (const element of array) {
    newObject[element.category] = newObject[element.category]
      ? newObject[element.category] + 1
      : 1;
  }

  return newObject;
}

console.log(sumOfProductsInEachCategory(items7));

// 8️⃣ Объедини два массива по id
const users8 = [{ id: 1, name: "Sofiia" }];
const info8 = [{ id: 1, city: "Amberg" }];
// Ожидаемый результат: [{ id: 1, name: "Sofiia", city: "Amberg" }]

// 9️⃣ Удали дубликаты из массива чисел
const arr9 = [1, 2, 2, 3, 4, 4, 5];
// Ожидаемый результат: [1, 2, 3, 4, 5]

// 🔟 Отсортируй людей по возрасту по возрастанию
const people10 = [
  { name: "Sofiia", age: 22 },
  { name: "Danylo", age: 19 },
  { name: "Lena", age: 25 },
];
// Ожидаемый результат:
// [{ name: "Danylo", age: 19 }, { name: "Sofiia", age: 22 }, { name: "Lena", age: 25 }]

// 11️⃣ Группируй имена по первой букве
const users11 = ["Anna", "Andriy", "Bohdan", "Sofiia", "Serhii"];
// Ожидаемый результат:
// { A: ["Anna", "Andriy"], B: ["Bohdan"], S: ["Sofiia", "Serhii"] }

// 12️⃣ Подсчитай общую сумму заказов по пользователям
const orders12 = [
  { user: "Sofiia", amount: 120 },
  { user: "Sofiia", amount: 80 },
  { user: "Danylo", amount: 150 },
];
// Ожидаемый результат: { Sofiia: 200, Danylo: 150 }

// 13️⃣ Найди товар с самой высокой ценой и верни только имя
const products13 = [
  { name: "apple", price: 3 },
  { name: "banana", price: 6 },
  { name: "mango", price: 5 },
];
// Ожидаемый результат: "banana"

// 14️⃣ Создай массив из ключей объекта
const obj14 = { name: "Sofiia", age: 22, city: "Amberg" };
// Ожидаемый результат: ["name", "age", "city"]

// 15️⃣ Найди сумму всех чисел (включая вложенные)
const arr15 = [1, [2, [3, 4]], 5];
// Ожидаемый результат: 15

// 16️⃣ Удали свойство "password" из всех пользователей
const users16 = [
  { name: "Sofiia", password: "123" },
  { name: "Danylo", password: "456" },
];
// Ожидаемый результат: [{ name: "Sofiia" }, { name: "Danylo" }]

// 17️⃣ Проверь, есть ли товар дороже 1000
const products17 = [
  { name: "Laptop", price: 800 },
  { name: "Phone", price: 1200 },
];
// Ожидаемый результат: true

// 18️⃣ Создай объект частоты символов строки
const str18 = "banana";
// Ожидаемый результат: { b: 1, a: 3, n: 2 }

// 19️⃣ Создай инвентарь: посчитай общее количество каждого товара
const items19 = [
  { name: "apple", qty: 3 },
  { name: "banana", qty: 2 },
  { name: "apple", qty: 4 },
];
// Ожидаемый результат: { apple: 7, banana: 2 }

// 20️⃣ Сгруппируй пользователей по городу
const people20 = [
  { name: "Sofiia", city: "Amberg" },
  { name: "Danylo", city: "Berlin" },
  { name: "Lena", city: "Amberg" },
];
// Ожидаемый результат:
// { Amberg: [{ name: "Sofiia" }, { name: "Lena" }], Berlin: [{ name: "Danylo" }] }
