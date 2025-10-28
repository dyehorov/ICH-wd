// Задача 1: Создайте массив employees, где каждый элемент - объект сотрудника со свойствами name, department и вложенным объектом contact. Найдите всех сотрудников из отдела "Marketing" и выведите их имена и email.

console.log("Задание 1");

const employees = [
  {
    name: "Alice",
    department: "Marketing",
    contact: { email: "alice@company.com", phone: "123-456" },
  },
  {
    name: "Bob",
    department: "Development",
    contact: { email: "bob@company.com", phone: "789-012" },
  },
  {
    name: "Charlie",
    department: "Marketing",
    contact: { email: "charlie@company.com", phone: "345-678" },
  },
];

for (key of employees) {
  if (key.department === "Marketing") {
    console.log(`${key.name} ${key.contact.email}`);
  }
}

// Задача 2: Создайте массив products, где каждый товар имеет name, price и вложенный объект category. Увеличьте цену всех товаров категории "Electronics" на 10%.

console.log("Задание 2");

const products = [
  { name: "Laptop", price: 1000, category: { name: "Electronics", id: 1 } },
  { name: "Book", price: 20, category: { name: "Education", id: 2 } },
  { name: "Phone", price: 500, category: { name: "Electronics", id: 1 } },
];

function increasePrice(list) {
  for (key of list) {
    if (key.category.name === "Electronics") {
      key.price = key.price * 0.1 + key.price;
    }
  }
  return list;
}

console.log(increasePrice(products));

// Задача 3: Создайте объект order с вложенным объектом items, содержащим список товаров с name и price. Посчитайте общую сумму заказа.

console.log("Задача 3");

const order = {
  id: 1,
  customer: "John Doe",
  items: {
    item1: { name: "Keyboard", price: 50 },
    item2: { name: "Mouse", price: 25 },
    item3: { name: "Monitor", price: 200 },
  },
};

function getSumOfOrder(order) {
  let sum = 0;
  for (let key in order.items) {
    sum += order.items[key].price;
  }
  return sum;
}

console.log(getSumOfOrder(order));

// Задача 4: Создайте массив students, где каждый студент имеет name, age и вложенный объект grades. Найдите студентов старше 20 лет с средней оценкой выше 4.

console.log("Задача 4");

const students = [
  { name: "Anna", age: 22, grades: { math: 5, physics: 4, literature: 5 } },
  { name: "Mike", age: 19, grades: { math: 3, physics: 4, literature: 4 } },
  { name: "Sarah", age: 21, grades: { math: 5, physics: 5, literature: 5 } },
  { name: "Сarl", age: 21, grades: { math: 2, physics: 3, literature: 3 } },
];

function isStudentAgeGreaterThan20(student) {
  return student?.age ?? 0 > 20;
}

function isStudentAvgGpaGreaterThan4(student) {
  if (!student) {
    return false;
  }

  return (
    (student.grades.math + student.grades.physics + student.grades.literature) /
      3 >
    4
  );
}

function isValidStudent(student) {
  return (
    isStudentAgeGreaterThan20(student) && isStudentAvgGpaGreaterThan4(student)
  );
}

console.log(students.filter(isValidStudent));

const obj = { a: 4 };

function abc(obj) {
  const newObj = { ...obj };
  newObj.a = 5;

  return newObj;
}

// class A {
//   constructor(parameters) {

//   }
//   strudents = []

//   filter() {
//     return this.strudents.filter()
//   }
// }

// class B {
//   highOrderFilterFn = (f) => {
//     return f()
//   }
// }

// b = new B()
// a = new A()

// b.highOrderFilterFn(a.filter)

// b.highOrderFilterFn(() => a.filter())
