const list = document.querySelector(".list");

document.addEventListener("DOMContentLoaded", () => {
  if (list.childElementCount > 3) {
    const newItem = document.createElement("li");
    newItem.textContent = "New Item";
    list.replaceChild(newItem, list.lastElementChild);
  }
});
