// loops in array

// for of loop
const arr = [1, 2, 3, 4, 5];

// it is used to iterate over objects , arrays , string etc
// ye ek tarah se for loop jesa hi kam karta hai
for (const num of arr) {
  console.log(num);
}

// ek aur datatype hota hai ie maps

// how to decalre map datatype
const map = new Map();

// it adds unques key value pair like ye sort of objects and set ka mixture hai
map.set('in', 'india');
map.set('usa', 'america');
map.set('Jap', 'Japan');

console.log(map); // output:- { 'in' => 'india', 'usa' => 'america', 'Jap' => 'Japan' }

// agar hume isme iterate karvana hai than we can use
// ye same cheez hum objects ke sath nhi kar sakte ke keys and values ko seperatly print karva de
for (const [key, values] of map) {
  console.log(key);
  console.log(values);
}

// agar hume objects ko iterate karvana ho and hume keyy and values ko chahiye than
const myobj = {
  js: 'javascript',
  cpp: 'c++',
  py: 'python',
};

for (const keys in myobj) {
  // Isse hum keys nikal sakte hai
  //   but agar hum sirf keys print karvayenge arrays ke under than we will get the index of that elemnt and not the element
  console.log(keys);

  // isse hum values nikal sakte hai
  console.log(myobj[keys]);
}

// lets se mere pas ek array hai and usko muje iterate karvana hai than
let arr1 = ['cpp', 'js', 'py', 'pd'];

arr1.forEach(function (val) {
  console.log(val);
});

// we can also use arrow function here
// foreach function mai sirf items hi nhi ati uske sath sath uski index and pura array bhi aa jata hai
arr1.forEach((v, index, arr) => {
  console.log(v);
  console.log(index);
  console.log(arr);
});
