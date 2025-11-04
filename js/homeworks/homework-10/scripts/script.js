// 1
const block = document.querySelector(".block");

block.addEventListener("mouseover", () => {
  block.classList.add("red-color");
});

block.addEventListener("mouseout", () => {
  block.classList.remove("red-color");
});

// 2

const colorBlock = document.querySelector("#colorBlock");
const colorButton = document.querySelector("#colorButton");

colorButton.addEventListener("click", () => {
  colorBlock.style.backgroundColor = `rgb(${Math.floor(
    Math.random() * 256
  )},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)} )`;
});
