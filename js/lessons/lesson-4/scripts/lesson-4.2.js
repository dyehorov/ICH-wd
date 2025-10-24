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

for (let key in user) {
  console.log(user[key]);
}

console.log("========Задание 1===========");

const person = { name: "Mark", age: 23 };
console.log(person.name, person.age);

console.log("=========Задание 2===========");

const book1 = { title: "Harry Potter" };
book1.title = "Airport";
console.log(book1.title);

console.log("=========Задание 3==========");

const car1 = {
  brand: "Toyota",
  model: "Camry",
  year: 2017,
};

console.log(
  `Год выпуска ${car1["year"]}, марки ${car1["brand"]}, модель ${car1["model"]}`
);

console.log("=========Задание 4===========");

const dog = { name: "Jack", age: 12 };

dog.breed = "Husky";

console.log(dog.breed);

console.log("========Задание 5==========");

const computer1 = {
  color: "black",
  system: "MacOs",
  price: 1500,
};

delete computer1.price;

console.log(computer1);

console.log("========Задание 6==========");

const fruit = { name: "Apple", color: "Red", taste: "Sweet" };

for (let key in fruit) {
  console.log(`${key}: ${fruit[key]}`);
}

// ==========Вложеные объекты==========

// свойства можно разделять на логические блоки блоки, например в адрес можно город, страну, улицу, зип код. Или же мы вводим где пользователь работает, о его компании.

const userData = {
  name: "Patricia",
  age: 25,
  address: {
    city: "Tokio",
    country: "Japan",
  },
  company: {
    title: "Google",
    phone: "24232423",
    website: "google.com",
  },
};

const company = {
  name: "TechCorp",
  departments: {
    hr: {
      employees: 20,
      location: "Floor 5",
    },
    it: {
      employees: 50,
      location: "Floor 10",
    },
  },
};

console.log(company.departments.it.location); // Floor 10

// Изменение и удаление свойств вложеных объектов такое же как и обычных

company.departments.hr.employees = 30;

console.log(company.departments.hr.employees); // 30

delete company.departments.hr;

company.departments.accounting = {
  employees: 10,
  location: "Floor 3",
};

console.log(company); // теперь нет hr и добавлен accounting

// массивы в объекте

const classroom = {
  teacher: "Mr. Johnson",
  students: [
    { name: "Carol", age: 15 },
    { name: "Bob", age: 15 },
    { name: "Alice", age: 15 },
    { name: "Tom", age: 16 },
  ],
};

console.log(classroom.students[3].name); // Tom

for (let i = 0; i < classroom.students.length; i++) {
  console.log(classroom.students[i].name);
}

for (let i = 0; i < classroom.students.length; i++) {
  classroom.students[i].vip = true;
}

console.log(classroom);

console.log("======Задание 1========");

const student = {
  name: "Marco",
  age: 12,
  grades: {
    math: "A",
    history: "B",
    chemistry: "A",
  },
};

console.log(student);

console.log("======Задание 2========");

const car = {
  engine: {
    horsepower: 301,
    fuelType: "Diesel",
  },
};

car.engine.horsepower = 520;

console.log(car.engine.horsepower);

console.log("======Задание 3========");

const playlist = {
  songs: [
    {
      name: "wfow",
      duration: 4,
    },
    {
      name: "wf23e2ow",
      duration: 2,
    },
    {
      name: "qewq",
      duration: 3,
    },
  ],
};

for (let key of playlist.songs) {
  console.log(`Name: ${key.name} Duration: ${key.duration} min`);

  // console.log(
  //   `Name: ${playlist.songs[key]["name"]} Duration: ${playlist.songs[key]["duration"]} min`
  // );
}

console.log("======Задание 4========");

const book = {
  title: "Harry Potter",
  author: "J.K. Rowling",
};

book.details = {
  pages: 540,
  publicationYear: 2001,
};

console.log(book);

console.log("======Задание 5========");

const computer = {
  specs: {
    ram: 2,
    ssd: true,
    inch: 27,
  },
};

delete computer.specs.ram;

console.log(computer);

console.log("======Задание 5========");
