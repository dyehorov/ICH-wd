"use strict";
/*
Задание 1
Типизация функции с несколькими параметрами
Напишите функцию `calculateTotal`, которая принимает три параметра:
`price` (число)

`quantity` (число)

`discount` (число, по умолчанию равен 0)
Функция должна возвращать общую стоимость товаров с учетом скидки. Если скидка не указана, она считается равной нулю.
*/
function calculateTotal(price, quantity, discount = 0) {
    return price * quantity - (price * quantity * discount) / 100;
}
console.log(calculateTotal(10, 5, 10));
/*
Задание 2
Использование Union типов
Создайте переменную `id`, которая может быть либо строкой, либо числом.
Напишите функцию `displayId`, которая принимает эту переменную и выводит сообщение, содержащее значение ID. Если `id` — строка, выведите её в верхнем регистре. Если `id` — число, умножьте его на 10 перед выводом.
*/
let id;
function displayId(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value * 10);
    }
}
id = "hello";
displayId(id);
id = 10;
displayId(id);
const orders = [
    { orderId: "12343241", amount: 500, status: "pending" },
    { orderId: "45672312", amount: 100, status: "delivered" },
    { orderId: "98321732", amount: 200, status: "shipped" },
    { orderId: "98237923", amount: 900, status: "pending" },
    { orderId: "67523871", amount: 400, status: "delivered" },
];
function filterOrdersByStatus(orders, status) {
    return orders.filter(order => order.status === status);
}
console.log(filterOrdersByStatus(orders, "shipped"));
const productInfo = ["Ball", 100, 25];
function updateStock(inventory, productInfo) {
    const [name, , quantity] = productInfo;
    inventory[name] = (inventory[name] ?? 0) + quantity;
    return inventory;
}
const inventory = {
    Doll: 10,
    Car: 20,
};
console.log(updateStock(inventory, productInfo));
