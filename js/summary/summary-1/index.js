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

// 1. Создайте функцию createStudent, которая принимает имя и возраст студента, и возвращает объект студента со следующими свойствами:
// name (имя)
// age (возраст)
// grades (вложенный объект с оценками по предметам: математика, физика, литература)
// Все оценки по умолчанию должны быть 0.

console.log("Задание 1");

function createStudent(name, age) {
  return {
    name: name,
    age: age,
    grades: { math: 0, physics: 0, literature: 0 },
  };
}

console.log(createStudent("Mark", 14));

/* 2.Напишите функцию calculateAverageGrade, которая принимает объект студента и вычисляет его средний балл по всем предметам. Функция должна перебирать все оценки в объекте grades и возвращать среднее арифметическое. */

console.log("Задание 2");

function calculateAverageGrade(student) {
  let average = 0;
  for (let grade in student.grades) {
    average += student.grades[grade];
  }
  return Math.floor((average / Object.keys(student.grades).length) * 10) / 10;
}

console.log(
  calculateAverageGrade({
    name: "Mark",
    age: 14,
    grades: { math: 4, physics: 5, literature: 3 },
  })
);

/* 3. Создайте функцию addGrade, которая принимает объект студента, название предмета и оценку, затем добавляет или изменяет эту оценку в объекте grades студента. */

console.log("Задание 3");

function addGrade(student, subject, grade) {
  student.grades[subject] = grade;
  return student;
}

console.log(
  addGrade(
    { name: "Mark", age: 15, grades: { math: 0, physics: 0, literature: 0 } },
    "chemistry",
    4
  )
);

/* 4. Напишите функцию findExcellentStudents, которая принимает массив студентов и возвращает массив имен студентов, у которых средний балл выше 4.5. */

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
    age: 25,
    grades: { math: 5, physics: 5, literature: 5 },
  },
  {
    name: "Ethan",
    age: 23,
    grades: { math: 1, physics: 0, literature: 1 },
  },
];

console.log(findExcellentStudents(students));

//5.Создайте функцию updateStudentAge, которая принимает объект студента и новый возраст, затем обновляет возраст и возвращает измененный объект.

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

/* 6.Напишите функцию cloneStudent, которая создает полную копию объекта студента (включая вложенный объект grades). Изменения в копии не должны влиять на оригинал. */

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
      for (let subject in student.grades) {
        newStudent.grades[subject] = student.grades[subject];
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

/* 7. Создайте функцию countStudentsByAgeGroup, которая принимает массив студентов и возвращает объект с количеством студентов по возрастным группам:
"18-20" (включительно)
"21-23" (включительно)
"24+" (старше 23) */

console.log("Задание 7");

function countStudentsByAgeGroup(students) {
  const filteredStudentsByAge = { "18-20": 0, "21-23": 0, "24+": 0 };
  for (const element of students) {
    if (element.age >= 18 && element.age <= 20) {
      filteredStudentsByAge["18-20"]++;
    } else if (element.age >= 21 && element.age <= 23) {
      filteredStudentsByAge["21-23"]++;
    } else if (element.age >= 24) {
      filteredStudentsByAge["24+"]++;
    }
  }

  return filteredStudentsByAge;
}

console.log(countStudentsByAgeGroup(students));

/* 
8. Создайте функцию checkScholarship, которая принимает объект студента и возвращает строку:
"Повышенная стипендия" - если средний балл ≥ 4.8
"Обычная стипендия" - если средний балл ≥ 4.0 и < 4.8
"Без стипендии" - если средний балл < 4.0 */

console.log("Задание 8");

function checkScholarship(studentObj) {
  const studentAverageGrade = calculateAverageGrade(studentObj);

  if (studentAverageGrade >= 4.8) return "Повышенная стипендия";
  if (studentAverageGrade >= 4.0 && studentAverageGrade < 4.8)
    return "Обычная стипендия";
  if (studentAverageGrade < 4.0) return "Без стипендии";
}

console.log(checkScholarship(students[4]));

//9. Напишите функцию addSubject, которая принимает объект студента, название нового предмета и начальную оценку (по умолчанию 0), затем добавляет этот предмет в объект grades.

console.log("Задание 9");

function addSubject(student, subject, grade = 0) {
  student.grades[subject] = grade;
}

addSubject(students[0], "chemistry", 4);
console.log(students[0]);

//10. Создайте функцию findTopStudent, которая принимает массив студентов и возвращает имя студента с самым высоким средним баллом.

console.log("Задание 10");

function findTopStudent(students) {
  let highestAverage = 0;
  let topStudent = "";
  for (const element of students) {
    const studentAverage = calculateAverageGrade(element);
    if (studentAverage > highestAverage) {
      highestAverage = studentAverage;
      topStudent = `Top student is ${element.name}, with average of ${highestAverage}`;
    }
  }

  return topStudent;
}

console.log(findTopStudent(students));

//11. Напишите функцию createStudyGroup, которая принимает массив имен и возраст, и возвращает массив объектов студентов с заданными именами и возрастами, у всех оценки по умолчанию 0.

console.log("Задание 11");

function createStudyGroup(names, age) {
  const studyGroupArray = [];
  for (let i = 0; i < names.length; i++) {
    studyGroupArray[i] = createStudent(names[i], age);
  }

  return studyGroupArray;
}

const names = ["Max", "Arthur", "Bob", "Thomas"];

console.log(createStudyGroup(names, 20));

// 12. Создайте функцию countExcellentGrades, которая принимает объект студента и возвращает количество оценок "5" у этого студента.

console.log("Задание 12");

function countExcellentGrades(student) {
  let amountOfExcelentGrades = 0;
  for (const key in student.grades) {
    if (student.grades[key] == 5) {
      amountOfExcelentGrades++;
    }
  }
  return `${student.name} has ${amountOfExcelentGrades} excellent grades`;
}

const studentAlice = {
  name: "Alice",
  age: 20,
  grades: { math: 5, physics: 3, literature: 5 },
};

console.log(countExcellentGrades(studentAlice));

//13. Напишите функцию improveGrades, которая принимает объект студента и увеличивает все его оценки на 1 балл, но не более чем до 5.

console.log("Задание 13");

function improveGrades(student) {
  for (const key in student.grades) {
    if (student.grades[key] < 5) {
      student.grades[key]++;
    }
  }
  return student;
}

console.log(improveGrades(studentAlice));

// 14. Создайте функцию createStudentReport, которая принимает объект студента и возвращает строку с отчетом в формате: "Студент [имя], возраст [возраст]. Средний балл: [средний]. Стипендия: [тип стипендии]"

console.log("Задание 14");

function createStudentReport(student) {
  return `Student: ${student.name}, Age: ${
    student.age
  }, Average: ${calculateAverageGrade(
    student
  )}, Scholarship: ${checkScholarship(student)}`;
}

console.log(
  createStudentReport({
    name: "Alice",
    age: 20,
    grades: { math: 5, physics: 4, literature: 5 },
  })
);

/*
15. Напишите функцию filterStudentsBySubjectGrade, которая принимает массив студентов, название предмета и минимальную оценку, и возвращает массив имен студентов, у которых оценка по этому предмету не ниже минимальной. */

console.log("Задание 15");

function filterStudentsBySubjectGrade(students, subject, minGrade) {
  const filteredArray = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].grades[subject] >= minGrade) {
      filteredArray[filteredArray.length] = students[i].name;
    }
  }
  return filteredArray;
}

console.log(filterStudentsBySubjectGrade(students, "math", 3));
