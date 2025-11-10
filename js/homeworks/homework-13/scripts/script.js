//1 Создайте массив объектов с полями "name" и "price". Реализуйте функцию hasExpensiveItem, используя метод some, чтобы проверить, содержит ли массив хотя бы один объект с ценой выше 50.

const products = [
  { name: "Laptop", price: 700 },
  { name: "Smartphone", price: 1200 },
  { name: "Headphones", price: 15 },
  { name: "Keyboard", price: 20 },
  { name: "Mouse", price: 50 },
]

function hasExpensiveItem(array) {
  return array.some(({ price }) => price > 50)
}

const result = hasExpensiveItem(products)

console.log(result)
