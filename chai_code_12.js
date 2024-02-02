// how to merge two objects
const obj1 = {
  name: 'het',
  age: 17,
};

const obj2 = {
  name: 'shah',
};

// this is not a right way to merge an object as this will create same problem as it occered in arrays
const obj3 = { obj1, obj2 };

// this is right way to merge two objects and if the same key is present ibn second object than it will take two objects value
const obj4 = Object.assign(obj1, obj2);
console.log(obj4);

// their is one more way to merge two or more objects
const obj5 = { ...obj1, ...obj2 };

// this method will store the value in an array and it is same for values as well
const obj6 = Object.keys(obj1);

// this will store in the form of [[keys , values ]]
const obj7 = Object.entries(obj1);
