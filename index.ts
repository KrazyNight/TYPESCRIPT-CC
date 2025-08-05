//Basic Types
let age: number = 29;
let course: string ="Typescript";
let lessonCompleted: boolean = true;
let x: any = false;

let courses: string[] = ["HTML", "CSS"];
let arr: any[] = [true, '123', 321];
let stringArr: string[][] = [['a'], ['b']];

let testing: boolean = true;


//Tuples
let person: [string, number] = ['John', 250];
let people: [string, number][] = [
    ["Alex", 18],
    ["John", 25],
]



//Objects
let student: {
    name: string,
    age: number,
    isPassing: boolean
} = {
    name: "Liam",
    age: 14,
    isPassing: true
}


//Custom Types 
type Student = {
    name: string,
    age: number,
    isPassing: boolean
}

let student1: Student = {
    name: 'Alex',
    age: '16',
    isPassing: false,
}


// Inerfaces
interface Student1 {
    name: string,
    age: number,
    isPassing: boolean
}

let student2: Student1 = {
    name:"John",
    age: 12,
    isPassing: true
}


// Unions
let result: string | number = 'John';

type isPassing = "passed" | "failed";
let johnIsPassing: isPassing = "failed";


//Type Assertion
let y: any = "hello";
y = <number>22;


// Functions

function sum(num1: number, num2: number): number {
    return true;
}

sum(1, 2);

function greet(): void {
    console.log("hello!");
}


// Generics
function getFirstElement<ArrType>(arr: ArrType[]) {
    return arr[0];
}

getFirstElement<number>([1, 2, 3]);
getFirstElement<string>(['1', '2', '3']);
getFirstElement<boolean>([true, false, false]);



// Enums

enum Grade {
    freshman = 'First year',
    sophomore ='Second year',
    junior = 'Third year',
    senior = 'Fourth year'
}

interface StudentObject {
    name: string,
    age: number,
    grade: Grade
}


function displayStudentInfo(student: StudentObject): void{
    const studentInfo: string = student.name + '\n' + student.age + '\n' + student.grade

    document.body.innerHTML = studentInfo
}

displayStudentInfo({
    name: 'John',
    age: 15,
    grade: Grade.sophomore
})
