const month = 9;
const number = Math.floor(Math.random() * (2 * 100 + 1) - 100);

if (number == 0) {
  console.log(number, "equal to 0");
} else if (number > 0) {
  console.log(number, "positive number");
} else {
  console.log(number, "negative number");
}

switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;
  default:
    console.log("Invalid number");
    break;
}

// Если исходы совпадают, то можно cases объединять

switch (month) {
  case 1:
  case 2:
  case 12:
    console.log("Winter");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Spring");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Summer");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Autumn");
    break;
  default:
    console.log("Invalid number");
    break;
}

// Тернарный оператор (Ternary operator)

5 === 5 ? console.log("Equal") : console.log("Not equal");

// В чем разница между тернарным оператор и обычным if?

// тернарный оператор должен иметь else block
// тернарый оператор может быть записан в переменную, а if нет.

const number2 = 3 === 5 ? 4 : -17; // если 5 === 5 это true значит выполняется первый блок (4), если 3 === 5 это false то второй (-17)
console.log(number2);

// оператор нулевого слияния ?? (Nullish coalescing operator) - возвращает значение правого операнда, если значение левого операнда null или undefined.

const value = "Hello" ?? 24; // если первое значение не null/undefined то запиши в переменную первое значение.
console.log(value); // "Hello" - не null и не undefined значит value = "Hello";

const value2 = null ?? 24;
console.log(value2); // 24

const value3 = undefined ?? "" ?? undefined;
console.log(value3); // "" - пустая строка, первый блок говорит "Если не undefined/null присвой это значение" -> у нас undefined, значит идем дальше -> второй блок говорит "Если не undefined/null присвой это значение" -> у нас пустая строка "", значит value3 = "";
