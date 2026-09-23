//1. Create a Vehicle class and inherit it into Car. 
// Parent Class
class Vehicle {
constructor(brand) {
this.brand = brand;
}
start() {
console.log(this.brand + " vehicle started.");
}
}
// Child Class
class Car extends Vehicle {
constructor(brand, model) {
super(brand); // Calls Vehicle constructor
this.model = model;
}
displayDetails() {
console.log("Brand:", this.brand);
console.log("Model:", this.model);
}
}
// Create object
let car1 = new Car("Toyota", "Camry");
car1.start();
car1.displayDetails();

//2. Access parent class properties using child objects. 
// Parent Class
class Vehicle1 {
constructor(brand) {
this.brand = brand;
}
}
// Child Class
class Car2 extends Vehicle1 {
constructor(brand, model) {
super(brand); // Initialize parent property
this.model = model;
}
display() {
console.log("Brand:", this.brand); // Parent property
console.log("Model:", this.model); // Child property
}
}
// Create child object
let car12 = new Car2("Toyota", "Camry");
car12.display();