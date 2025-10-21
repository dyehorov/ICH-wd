// Задания 1.*

const studentScore = Math.floor(Math.random() * 100) + 1;

console.log(studentScore);

if (studentScore >= 90) {
  console.log("A");
} else if (studentScore >= 80) {
  console.log("B");
} else if (studentScore >= 70) {
  console.log("C");
} else if (studentScore >= 60) {
  console.log("D");
} else {
  console.log("F");
}

// Задания 2.*

const dayOfWeek = 7;

switch (dayOfWeek) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;

  default:
    console.log("Invalid number");
    break;
}
