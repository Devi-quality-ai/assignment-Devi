//1. Create a class Student with attributes and methods. 
//2. Instantiate multiple objects in the same class.
// Student class
class Student {
constructor(name, rollNo) {
this.name = name;
this.rollNo = rollNo;
}
// Method
displayDetails() {
console.log("Name:", this.name);
console.log("Roll Number:", this.rollNo);
}
}
// Creating multiple objects
let student1 = new Student("Alice", 101);
let student2 = new Student("Bob", 102);
let student3 = new Student("Charlie", 103);
// Instantiating multiple objects 
student1.displayDetails();
student2.displayDetails();
student3.displayDetails();


