// 1. Create a constructor to initialize object values. 
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
console.log(student1.name, student1.rollNo);

//2. Compare constructor-based initialization with setters. 
class Student4 {
setName(name) {
this.name = name;
}
setRollNo(rollNo) {
this.rollNo = rollNo;
}
}
let student12 = new Student4();
student12.setName("Alice");
student12.setRollNo(101);
console.log(student12.name);
console.log(student12.rollNo);
