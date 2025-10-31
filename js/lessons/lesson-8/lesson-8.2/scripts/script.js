// classList();

// возращает массиво - подобный объект, но это не массив. Это - DOMTokenList, у него есть отличие от массива - value. Так же сюда не записываются одинаковые свойства.

// Когда мы меняем классы для элемента чтобы динамически стилизовать, обратится к этому элементу лучше по  id

const title = document.querySelector("#title");
console.dir(title.classList[0]);

// classList.add()

title.classList.add("added-class");

console.log(title.classList); // DOMTokenList(5) ['text', 'title', 'info', 'document', 'added-class', value: 'text title info document added-class']

console.log(title.classList.value); // text title info document added-class

title.classList.add("blue-text", "pink-background");

console.log(title.classList);

// в этом задании мы создали 3 кнопки, которые добавляют один и тот же класс для заголовка. Когда один раз нажали на любую кнопку, то добавился класс, потом уже не важно на другие кнопки.
const text = document.querySelector("#title2");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");

btn1.addEventListener("click", () => {
  text.classList.add("active");
});
btn2.addEventListener("click", () => {
  text.classList.add("active");
});

// classList.remove() - чтоб удалить класс

btn3.addEventListener("click", () => {
  text.classList.remove("active");
});

// classList.replace() - заменить одно значение класса другим

btn2.addEventListener("click", () => {
  const result = text.classList.replace("active", "blue-text");
  console.log(result);
});

/* У вас есть блок текста. При двойном клике на блок текста, замените класс "original" на "changed". Если класс "changed" уже присутствует, замените его обратно на "original". Решите с помощью addEventListener и атрибута ondblclick. */

const original = document.querySelector("#original");

original.addEventListener("ondblclick", () => {
  if (original.classList[0] === "original") {
    original.classList.replace("original", "changed");
  } else {
    original.classList.replace("changed", "original");
  }
});

// classList.toggle() - это метод который включает и выключает класс, если есть убирает, если нет добавляет. Принимает только одно значение.

const switchTheme = document.querySelector(".toggle");

switchTheme.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("darkTheme");
  switchTheme.textContent = isDark ? "light theme" : "dark theme";
});

// У вас есть кнопка и блок текста. При каждом клике на кнопку, переключайте видимость блока текста. Если блок виден, скройте его, и наоборот.

const textBlock = document.querySelector("#text-block");
const showHideBlock = document.querySelector(".show-hide-block");

showHideBlock.addEventListener("click", () => {
  const isHidden = textBlock.classList.toggle("hidden");
  textBlock.style.opacity = isHidden ? "0" : "1";
  showHideBlock.textContent = isHidden ? "show text" : "hide text";
});
