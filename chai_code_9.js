// their are few ways through which we can decalre array
let arryas = [1, 2, 3, 4, 5, 'het'];
let newarr = new Array(12, 3, 4, 56);

// methods in Array

// will add values in it it will add it in last position
arryas.push(123); // output = [1,2,3,4,5,'het' , 123]

// will remove the last element
arryas.pop(); // output = [1,2,3,4,5,'het' ]

// will add values at front [ it is not a preferable way because it will change all other Element indexing ]
arryas.unshift(123); // output :  [1,2,3,4,5,'het' , 123]

// will remove the first elemnt from that array
arryas.shift();

// it tells wheather the number is in that array or not : boolean value
arryas.includes(1);

// will give the index of the element that you asked for and agar element is not their than it will give output as -1
arryas.indexOf(1);

// this method will give all the elements of an array into a single string but it won't change the original array
let near = arryas.join(a);

// this below function will take the values from that array without change/ manaipulating the original array
let mr1 = arryas.slice(1, 3); // output: [2,3] >>> [included , excluded]

// this function will take out the asked element from the original array permanetly by manipulating the original array
let mr2 = arryas.splice(1, 3); // output: [2,3,4] >> [included , included]
