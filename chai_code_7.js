// Numbers and maths

// If we want to covert a number to String
let testing = 100;
console.log(testing.toString());
// Now this has been converted into string

// This below method is used to decided how many values will come after decimal
console.log(testing.toFixed(2));

// It adds comma according to indian system
const anotherNumeber = 1000000;
console.log(anotherNumeber.toLocaleString('en-IN'));

// maths library
console.log(Math);

// Modulus value
console.log(Math.abs(-3));

// Round off
console.log(Math.round(3.6));

// Math.ceil is a method jisme vo upper value hi lege
// for eg:- if the number is 4.3 than we we apply Math.ceil it will give ans as 5
console.log(Math.ceil(4.3));

// Math.floor is a method jisme vo lower value hi lege
// for eg:- if the number is 4.3 than we we apply Math.ceil it will give ans as 4
console.log(Math.floor(4.3));

// if we want to find the min value in a array
let ar = [1, 2, 3, 4, 5];
// console.log(Math.max(ar));

// If we want to have random value
// Math.random gives value from range 0,1
// so if we want value from 0 to 10 we have to multlpy it by 10
console.log(Math.floor(Math.random() * 10 + 1));
