// how to decalre objects
const sym = Symbol('hetshsh');
const jsUser = {
  name: 'het',
  //   agar asi keys aye than we can't use jsuser.hets wala format we conpulsory have to use jsuser['hets'] wala format
  hets: 'shah',

  //   agar hume symbols ko add karna ho than firstly we have to decalre the symbol than we can use it using this format
  [sym]: 'hetshahhite',
  age: 16,
  isLogin: true,
  lastLoging: ['monday', 'tues'],
};

// here name is a key and 'het' is a values and values can be anything from number , booleans to arrays etc

// there are few ways through which we can access the values
console.log(jsUser.name); //output: het
console.log(jsUser['name']); //output : het

// how to change the value of object
jsUser.name = 'shah';

// how to freeze a object so that noone change change it
// agar isme hum try karenge to change the value than it will not show any error but ye values bhi change nhi karega
// Object.freeze(jsUser);

// function ko bhi variables ki tarah hi treat  kiya jata hai in objects
jsUser.greet = function () {
  console.log('het');
};

// this will only give the reference about where the function is stored
console.log(jsUser.greet);

// this will provide the value that is in that function
console.log(jsUser.greet());
