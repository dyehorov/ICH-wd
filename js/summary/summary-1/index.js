const email = "alice06.56@gmail.com";

let emailValid = false;
let dotBeforeAt = false;

for (let i = 0; i < email.length; i++) {
  if (email[i] === "@") {
    if (i > 6) {
      emailValid = true;
      break;
    } else {
      break;
    }
  }

  if (email[i] === ".") {
    dotBeforeAt = true;
  }
}

if (emailValid && dotBeforeAt) {
  console.log("Email is valid");
} else {
  console.log("Email is not valid");
}

console.log("Задание 1");

function createStudent(name, age) {
  return {
    name: name,
    age: age,
    grades: { math: 0, physics: 0, literature: 0 },
  };
}

console.log(createStudent("Mark", 14));

console.log("Задание 2");

function calculateAverageGrade(student) {
  let average = 0;
  for (let grade in student.grades) {
    average += student.grades[grade];
  }
  return average / Object.keys(student.grades).length;
}

console.log(calculateAverageGrade(createStudent("Mark", 14)));

console.log("Задание 3");

function addGrade(student, studentClass, grade) {
  student.grades[studentClass] = grade;
  return student;
}

console.log(
  addGrade(
    { name: "Mark", age: 15, grades: { math: 0, physics: 0, literature: 0 } },
    "chemistry",
    4
  )
);

console.log("Задание 4");

function findExcellentStudents(studentList) {
  let excellentStudents = [];
  for (let student of studentList) {
    if (calculateAverageGrade(student) > 4.5) {
      excellentStudents.push(student.name);
    }
  }
  return excellentStudents;
}

const students = [
  {
    name: "Alice",
    age: 20,
    grades: { math: 5, physics: 4, literature: 5 },
  },
  {
    name: "Bob",
    age: 22,
    grades: { math: 3, physics: 4, literature: 2 },
  },
  {
    name: "Charlie",
    age: 19,
    grades: { math: 2, physics: 3, literature: 4 },
  },
  {
    name: "Diana",
    age: 21,
    grades: { math: 5, physics: 5, literature: 5 },
  },
  {
    name: "Ethan",
    age: 23,
    grades: { math: 1, physics: 2, literature: 3 },
  },
];

console.log(findExcellentStudents(students));

console.log("Задание 5");

function updateStudentAge(student, newAge) {
  student.age = newAge;
  return student;
}

console.log(
  updateStudentAge(
    {
      name: "Ethan",
      age: 23,
      grades: { math: 1, physics: 2, literature: 3 },
    },
    15
  )
);

console.log("Задание 6");

function cloneStudent(student) {
  const newStudent = {};
  for (let key in student) {
    if (key === "name") {
      newStudent.name = student[key];
    }
    if (key === "age") {
      newStudent.age = student[key];
    }
    if (key === "grades") {
      newStudent.grades = {};
      for (let studentClass in student.grades) {
        newStudent.grades[studentClass] = student.grades[studentClass];
      }
    }
  }

  return newStudent;
}

const student = {
  name: "Diana",
  age: 21,
  grades: { math: 5, physics: 3, literature: 4 },
};

console.log(cloneStudent(student));

// /* 1. Создайте функцию createStudent, которая принимает имя и возраст студента, и возвращает объект студента со следующими свойствами:
//     name (имя)
//     age (возраст)
//     grades (вложенный объект с оценками по предметам: математика, физика, литература)
//     Все оценки по умолчанию должны быть 0.

//     2. Напишите функцию calculateAverageGrade, которая принимает объект студента и вычисляет его средний балл по всем предметам. Функция должна перебирать все оценки в объекте grades и возвращать среднее арифметическое.

//     3. Создайте функцию addGrade, которая принимает объект студента, название предмета и оценку, затем добавляет или изменяет эту оценку в объекте grades студента.

//     4. Напишите функцию findExcellentStudents, которая принимает массив студентов и возвращает массив имен студентов, у которых средний балл выше 4.5.

//     5.Создайте функцию updateStudentAge, которая принимает объект студента и новый возраст, затем обновляет возраст и возвращает измененный объект.

//     6.Напишите функцию cloneStudent, которая создает полную копию объекта студента (включая вложенный объект grades). Изменения в копии не должны влиять на оригинал.

// */
