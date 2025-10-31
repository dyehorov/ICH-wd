// чтоб скопировать элемент используем cloneNode();

const body = document.querySelector("body");

const originalBox = document.querySelector(".box");
const clonedBox = originalBox.cloneNode();

body.appendChild(clonedBox);

console.log(originalBox);
console.log(clonedBox);

// можно так же использовать .innerHTML      Но он копирует только внутринность элемента, то есть атрибуты не добавятся.

const clonedWithInnerHTML = document.createElement("div");

clonedWithInnerHTML.innerHTML = originalBox.innerHTML;

console.log(clonedWithInnerHTML);

body.appendChild(clonedWithInnerHTML);

// .outerHTML() - свойство элемента, которое содержит HTML код элемента, включая сам элемент и его содержимое. Но для этого надо добавить сначала его через append()

const clonedWithOuterHTML = document.createElement("div");
body.appendChild(clonedWithOuterHTML);
clonedWithOuterHTML.outerHTML = originalBox.outerHTML;
console.log(clonedWithOuterHTML);
