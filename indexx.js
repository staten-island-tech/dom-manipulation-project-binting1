// const students = ["Alice", "Bob", "Charlie", "Diana"];
// const grades = [85, 90, 78, 95];

console.log("part 1");
const students = [
    { name: 'Alice', age: 20, grade: 85},
    { name: 'Bob', age: 22, grade: 90 },
    { name: 'Charlie', age: 21, grade: 78 },
    { name: 'Diana', age: 23, grade: 95 },
];

students.forEach((student) => console.log(student.name, student.grade));
// use comma to seperate the two categories 

console.log("part 2");

 const topstudents =
    students.filter((student) => student.grade > 80)
    .forEach((student) => console.log(student.name));