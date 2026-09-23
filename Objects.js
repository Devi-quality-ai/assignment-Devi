//1.Create a student object with a name and roll number. 
let student = {
name: "John",
rollNumber: 101
};
console.log(student);

//2.Create an object and display its properties. 
let person = {
name: "Alice",
age: 25,
city: "Chennai"
};
console.log("Name:", person.name);
console.log("Age:", person.age);
console.log("City:", person.city);

//3.Create multiple Employee objects. 
let emp1 = {
id: 101,
name: "John",
salary: 50000
};
let emp2 = {
id: 102,
name: "David",
salary: 60000
};
let emp3 = {
id: 103,
name: "Mary",
salary: 55000
};
console.log(emp1);
console.log(emp2);
console.log(emp3);

//4.Store and display object details using arrays. 
let employees = [
{ id: 101, name: "John", salary: 50000 },
{ id: 102, name: "David", salary: 60000 },
{ id: 103, name: "Mary", salary: 55000 }
];
for (let i = 0; i < employees.length; i++) {
console.log(
employees[i].id,
employees[i].name,
employees[i].salary
);
}