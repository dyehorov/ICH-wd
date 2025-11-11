// Создайте простую HTML-страницу с текстовым полем ввода, кнопкой "Сохранить" и блоком, в который будет выводиться сохраненное имя. При вводе имени и нажатии кнопки "Сохранить", имя должно сохраняться в Local Storage и отображаться на странице при обновлении.

const nameInput = document.querySelector(".nameInput")
const saveBtn = document.querySelector(".saveBtn")
const nameContainer = document.querySelector(".nameContainer")
const form = document.querySelector(".form")

nameContainer.textContent = localStorage.getItem("name")
  ? `Saved name is ${localStorage.getItem("name")}`
  : `Save your name`

form.addEventListener("submit", (event) => {
  event.preventDefault()
})

saveBtn.addEventListener("click", () => {
  if (nameInput.value.trim() !== "") {
    localStorage.setItem("name", nameInput.value)
    nameContainer.textContent = `Saved name is ${nameInput.value}`
  }
})
