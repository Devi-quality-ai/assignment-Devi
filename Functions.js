
// Basic--1. Create a method to add two numbers. 
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
//Intermediate -- 1. Create reusable functions for factorial and prime number. 

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

//3. Write a method to count vowels in a string. 
var s = 'alphabeEtiiis';
var c = 0;
function count_Vowels() {
    for (let i = 0; i < s.length; i++) {
        if ("aeiouAEIOU".includes(s[i])) {
            c++;
        }

    }
    return c;

}
console.log(count_Vowels());

//4. Create a method to find the sum of elements in an array. 
var a = [10, 20, 30, 40, 50]
var sum = 0;
function sum_Of_Array() {
    for (let i = 0; i<a.length; i++) {
        sum = sum + a[i];
    }
    return sum;

}

console.log(sum_Of_Array());



