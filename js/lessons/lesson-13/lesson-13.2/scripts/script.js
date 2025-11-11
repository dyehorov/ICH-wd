const userData = {
  name: "Alice",
  age: 45,
  isAdmin: true,
}

// localStorage.setItem("username", JSON.stringify(userData)) // закинули userData в localStorage

const user = JSON.parse(localStorage.getItem("username"))

console.log(user)

localStorage.setItem("numbers", JSON.stringify([3, 5, 212, 22, -2, 3, 52, 1]))

const numbers = JSON.parse(localStorage.getItem("numbers"))

console.log(numbers)

//Создать форму, которая позволяет добавить пункт товара в массив. Данные из массива должны отображаться в интерфейсе при добавлении нового товара. Реализовывать через массив с продуктами и localStorage.

const products = JSON.parse(localStorage.getItem("products")) || []

window.addEventListener("DOMContentLoaded", () => {
  products.length !== 0 && renderProducts(products)
})

const productForm = document.querySelector("#productForm")
const productContainer = document.querySelector(".productContainer")
productForm.addEventListener("submit", (event) => {
  event.preventDefault()
  const titleInput = event.target.elements["title"]
  if (titleInput.value.trim() !== "") {
    const product = {
      id: Math.random(),
      title: titleInput.value,
    }
    products.push(product)
    localStorage.setItem("products", JSON.stringify(products))
    titleInput.value = ""
    renderProducts(products)
  }
})

function renderProducts(list) {
  productContainer.innerHTML = ""
  list.forEach((product, index) => {
    const title = document.createElement("p")
    title.textContent = `${index + 1}: ${product.title}`
    productContainer.append(title)
  })
}
