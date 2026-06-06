"use strict";
/*
Задание 1
Объединение и пересечение типов
Создайте два типа: `Admin` и `User`.
Тип `Admin` должен включать поля `name` (строка) и `permissions` (массив строк), а тип `User` должен включать поля `name` (строка) и `email` (строка).
Создайте тип `AdminUser`, который объединяет свойства обоих типов, и создайте объект этого типа.
*/
const user = {
    name: "user",
    email: "user@gmail.com",
    permissions: ["permission"],
};
const car = {
    make: "Toyota",
    model: "Camry",
    engine: {
        type: "3.5",
        horsepower: 301,
    },
    //   year: 2018,
};
function showCarInfo(car) {
    return `Make: ${car.make}, Model: ${car.model}, Engine: type - ${car.engine.type}, horsepower - ${car.engine.horsepower}, year: ${car.year ? car.year : "Not provided"}`;
}
console.log(showCarInfo(car));
function calculateDiscount(product) {
    return product.price - (product.price * product.discount) / 100;
}
const product = {
    name: "Ball",
    price: 10.0,
    discount: 10,
};
console.log("New price:", calculateDiscount(product));
const employees = [
    { name: "Alice", salary: 2000 },
    { name: "Bob", salary: 5000 },
    { name: "Carl", salary: 3000 },
];
function getSalaries(employees) {
    return employees.reduce((accum, item) => {
        accum.push(item.salary);
        return accum;
    }, []);
}
console.log(getSalaries(employees));
const student = {
    firstName: "Carl",
    lastName: "Johnson",
    grade: 92,
};
function getStudentData(student) {
    console.log(`Name: ${student.firstName} ${student.lastName}, Grade: ${student.grade}`);
}
getStudentData(student);
const concatStrings = function (str1, str2) {
    return str1 + str2;
};
console.log(concatStrings("Hello", "World"));
