//Basics--1. Store 5 numbers in an array and print them. 
var b=[10,20,30,40]
for(var i=0; i<b.length; i++)
{
    console.log(b[i]);
    
}
//2. Find the largest and smallest element in an array. 
var arr = [10, 25, 5, 40, 15];
var largest = arr[0];
var smallest = arr[0];
for (var i = 1; i < arr.length; i++) {
if (arr[i] > largest) {
largest = arr[i];
}
if (arr[i] < smallest) {
smallest = arr[i];
}
}
console.log("Largest element:", largest);
console.log("Smallest element:", smallest);

//3. Calculate the average array of elements. 
var a=[1,2,3,4,5,6];
var sum=0;
for(var i=0; i<a.length; i++)
{
    sum=sum+a[i];
}
console.log(sum/a.length);

//Intermediate--1. Search for an element in an array. 
var arrr = [10, 20, 30, 40, 50];
var searchElement = 30;
var found = false;
for (var i = 0; i < arrr.length; i++) {
if (arrr[i] === searchElement) {
found = true;
console.log("Element found at index " + i);
break;
}
}
if (!found) {
console.log("Element not found");
}
//2. Reverse an array. 
var arr = [10, 20, 30, 40, 50];
var reversed = [];
for (var i = arr.length - 1; i >= 0; i--) {
reversed.push(arr[i]);
}
console.log("Original Array:", arr);
console.log("Reversed Array:", reversed);
//3.Sort an array in ascending order. 
let ar = [5, 2, 8, 1, 9, 3];
for (let i = 0; i < ar.length - 1; i++) {
for (let j = i + 1; j < ar.length; j++) {
if (ar[i] > ar[j]) {
let temp = ar[i];
ar[i] = ar[j];
ar[j] = temp;
}
}
}
console.log(arr);

//Advanced Beginner --1.Remove duplicate elements from an array. 
let arr1 = [1, 2, 3, 2, 4, 1, 5];
let uniqueArr = [];
for (let i = 0; i < arr1.length; i++) {
if (!uniqueArr.includes(arr1[i])) {
uniqueArr.push(arr1[i]);
}
}

console.log(uniqueArr);
//2.Merge two arrays. 
let ar1 = [1, 2, 3];
let ar2 = [4, 5, 6];
let mergedArray = [];
for (let i = 0; i < ar1.length; i++) {
mergedArray.push(ar1[i]);
}
for (let i = 0; i < ar2.length; i++) {
mergedArray.push(ar2[i]);

}
console.log(mergedArray);
//3.Find the frequency of each element. 
let arr4 = [1, 2, 3, 2, 1, 4, 2, 3];
let frequency = {};
for (let i = 0; i < arr4.length; i++) {
let element = arr4[i];
if (frequency[element]) {
frequency[element]++;
} else {
frequency[element] = 1;
}
}
console.log(frequency);
//4.Rotate an array in one position. 
let arr5 = [1, 2, 3, 4, 5];
let last = arr5[arr5.length - 1];
for (let i = arr5.length - 1; i > 0; i--) {
arr5[i] = arr5[i - 1];
}
arr5[0] = last;
console.log(arr5);