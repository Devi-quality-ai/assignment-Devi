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