const block = document.querySelector(".block");
const counter = document.querySelector(".counter");
const add = document.querySelector(".add");
const container = document.querySelector(".container");

function isMultipleOfFive(number) {
  return number % 5 === 0;
}

function isEqualToTen(number) {
  return number == 10;
}

function renderMessage(clicks) {
  const message = document.createElement("p");
  message.textContent = `Congratulations! You've reached ${clicks} clicks!`;

  container.appendChild(message);
}

function randomColor() {
  return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)}, 100%)`;
}

function isElementHasInlineStyles(element) {
  return element.style.backgroundColor;
}

add.addEventListener("click", () => {
  counter.textContent = Number(counter.textContent) + 1;
  const multipleOfFive = isMultipleOfFive(counter.textContent);
  const equalToTen = isEqualToTen(counter.textContent);

  if (isElementHasInlineStyles(block)) {
    block.style.backgroundColor = "";
  }

  if (multipleOfFive) {
    block.style.backgroundColor = randomColor();
  } else {
    block.classList.toggle("red-color");
  }

  if (equalToTen) {
    renderMessage(counter.textContent);
  }
});
