"use strict";
//Basic Types
let age = 29;
let course = "Typescript";
let lessonCompleted = true;
let x = false;
let y = true;
// any can be: number, string, boolean etc.
let courses = ["HTML", "CSS"];
let arr = [true, '123', 321];
let stringArr = [['a'], ['b']];
let testing = true;
//Tuples
let person = ['John', 250];
let people = [
    ["Alex", 18],
    ["John", 25],
];
//Objects
let student = {
    name: "Liam",
    age: 14,
    isPassing: true
};
let student1 = {
    name: 'Alex',
    age: '16',
    isPassing: false,
};
let student2 = {
    name: "John",
    age: 12,
    isPassing: true
};
// Unions
let result = 'John';
let johnIsPassing = "failed";
//Type Assertion
let y = "hello";
y = 22;
// Functions
function sum(num1, num2) {
    return true;
}
sum(1, 2);
function greet() {
    console.log("hello!");
}
// Generics
function getFirstElement(arr) {
    return arr[0];
}
getFirstElement([1, 2, 3]);
getFirstElement(['1', '2', '3']);
getFirstElement([true, false, false]);
// Enums
var Grade;
(function (Grade) {
    Grade["freshman"] = "First year";
    Grade["sophomore"] = "Second year";
    Grade["junior"] = "Third year";
    Grade["senior"] = "Fourth year";
})(Grade || (Grade = {}));
function displayStudentInfo(student) {
    const studentInfo = student.name + '\n' + student.age + '\n' + student.grade;
    document.body.innerHTML = studentInfo;
}
displayStudentInfo({
    name: 'John',
    age: 15,
    grade: Grade.sophomore
});
