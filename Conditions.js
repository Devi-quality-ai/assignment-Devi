
//Conditions--1. Check if a year is a leap year. 
let year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
console.log("Leap Year");
} else {
console.log("Not a Leap Year");
}
// 2. Students grades
let marks = 85;
if (marks >= 90 && marks <= 100) {
console.log("Grade A");
} else if (marks >= 80) {
console.log("Grade B");
} else if (marks >= 70) {
console.log("Grade C");
} else if (marks >= 60) {
console.log("Grade D");
} else {
console.log("Grade F");
}
// 3. Create a simple calculator using switch-case.
var num1=10;
var num2=20;
function calculator(num1, num2, operator) {
switch (operator) {
case "+":
return num1 + num2;
case "-":
return num1 - num2;
case "*":
return num1 * num2;
case "/":
if (num2 === 0) {
return "Cannot divide by zero";
}
return num1 / num2;
default:
return "Invalid operator";
}   }
// 4. Check whether a number is positive, negative, or zero
let nu = -10;
if (nu > 0) {
console.log("Positive number");
} else if (nu < 0) {
console.log("Negative number");
} else {
console.log("Zero");
}

//5. Find the largest of three numbers
var a=10;
var b=20;
var c=30;
if(a>b && a>c)
{
    console.log(a);
    
}
else if(b>a && b>c)
{
    console.log(b);
    
}
else{
    console.log(c);
    
}

