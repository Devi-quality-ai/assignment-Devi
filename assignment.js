// 1. print "Hello World"
console.log("Hello World");
// 2. different data types
let i=10;
let j=11.34;
let k='hi'
let l=true;
console.log(i);
console.log(j);
console.log(k);
console.log(l);
// 3. basic arithmetic
var a=10;
var b=20;
var c;
console.log(a+b);
console.log(a*b);
console.log(a-b);
// 4. celcius to Fra
let C=25;
let F=(C*9/5)+32;
console.log(F);

// 5. swap of 2 numbers
c=a;
a=b;
b=c;
console.log(a);
console.log(b);

//LOOPS
// 1. Print numbers from 1 to N using a loop. 
// 2. Find the sum of first N natural numbers. 
var N=10;
let count=0;
for(let i=1; i<=N; i++)
{
    console.log(i);
    count=count+i;
    console.log(count);
     
}

// 3. Print the multiplication table of a given number. 
for (let i = 1; i <= 10; i++) {
console.log(`9 x ${i} = ${9 * i}`);
}

// 4. Reverse a number
let num = 12345;
let reverse = 0;
while (num > 0) {
let digit = num % 10;
reverse = reverse * 10 + digit;
num = Math.floor(num / 10);
}
console.log(reverse);

// 5. Palindrome number

let number = 121;
let original = number;
let rev = 0;
while (number > 0) {
let digit = number % 10;
rev = rev* 10 + digit;
number = Math.floor(number / 10);
}
if (original === rev) {
console.log("Palindrome");
13
} else {
console.log("Not a Palindrome");
}

// 6. Find the factorial number. 
let numb = 5;
let factorial = 1;
for (let i = 1; i <= numb; i++) {
factorial = factorial * i;
}
console.log(factorial);

// 7.Fibanocci series
let nm = 10;
let first = 0;
let second = 1;
console.log(first);
console.log(second);
for (let i = 3; i <= nm; i++) {
let next = first + second;
console.log(next);
first = second;
second = next;
}

// 8. Find a number is prime or not from the given set of numbers
let set = [2, 5, 7, 10, 13, 15, 17, 20];
for (let s of set) {
let isPrime = true;
if (s <= 1) {
isPrime = false;
} else {
for (let i = 2; i <= Math.sqrt(s); i++) {
if (s% i === 0) {
isPrime = false;
break;
}
}
}
if (isPrime) {
console.log(s+ " is Prime");
} else {
console.log(s+ " is Not Prime");
}
}

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
// 1. Create a method to add two numbers. 
function addTwoNumbers(a,b)
{
    return a+b;
}
console.log(addTwoNumbers(10,20));
// 2. Write a method to find the square of a number. 
function squareOfNumber(n)
{
    return n*n;
}
console.log(squareOfNumber(5));
// 3. Write a method to check whether a number is even. 
function evenNumber(n)
{
    if(n%2==0)
    {
        console.log("even number");
        
    }
    else{
        console.log("odd number");
        
    }
}
evenNumber(11);
// 1. Create reusable functions for factorial and prime number. 

//Factorial function
function factoriall(n) {
if (n < 0) {
throw new Error("Factorial is not defined for negative numbers.");
}
let result = 1;
for (let i = 2; i <= n; i++) {
result *= i;
}
return result;
}
// Prime number check function
function isPrime(n) {
if (n <= 1) {
return false;
}
for (let i = 2; i <= Math.sqrt(n); i++) {
if (n % i === 0) {
return false;
}
}
return true;
}
console.log(factoriall(5));
console.log(isPrime(11)); 
console.log(isPrime(12)); 

//2. Create a method to return the reverse of a number. 
function reverseNumber(num) {
const isNegative = num < 0;
num = Math.abs(num);
let reversed = 0;
while (num > 0) {
reversed = reversed * 10 + (num % 10);
num = Math.floor(num / 10);
}
return isNegative ? -reversed : reversed;
return reversed;
}



