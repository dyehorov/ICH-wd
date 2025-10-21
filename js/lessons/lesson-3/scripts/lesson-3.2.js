// ============= break; continue; =============

// break используется, чтобы прервать цикл for, do-while, while целиком.

console.log("=========break==========");

for (let i = 1; i < 10; i++) {
  if (i > 5) {
    break; // в этом случае цикл полностью остановился
  }

  console.log(i);
}

// continue прерывает итерацию, но не весь цикл
console.log("=========continue==========");

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    // тут мы пропускаем всю итерацию (но цикл продолжается) если i = 5. НО если поставить console.log() вышел, то он выведет. Поэтому валидацию надо ставить выше всего.
    continue;
  }
  console.log(i);
}

for (let i = 0; i <= 10; i++) {
  if (i === 0 || i === 5) {
    continue;
  }

  console.log(i + 1);
}

console.log("==============Задание 1==============");

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }

  console.log(i);
}

console.log("==============Задание 2==============");

for (let i = 1; i <= 6; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

console.log("==============Задание 3==============");

for (let i = 1; i <= 10; i++) {
  if (i > 7) {
    break;
  }

  console.log(i);
}

console.log("==============Задание 4==============");

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}

console.log("==========Таблица умножения===========");

for (let i = 1; i <= 10; i++) {
  for (let k = 1; k <= 10; k++) {
    console.log(`${i} x ${k} = ${i * k}`);
  }
  console.log("******************");
}
