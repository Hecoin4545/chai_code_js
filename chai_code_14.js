// agar koi function mai hume pata nhi ho ki kitni values ane vali hai than we can use rest operator
// and rest operator will store the value in array
function restOpe(...values) {
  return values;
}

console.log(restOpe(1, 2, 3, 4));

// arrow function and this keyword

// const user = {
//   username: 'hitesh',
//   price: 999,

//   welcomeMessage: function () {
//     console.log(`${this.username} , welcome to website`);
//     console.log(this);
//   },
// };

// user.welcomeMessage()

// agar welcomeMessage mai humne this.username karke nhi likha hota and agar tab hum user.username change karte toh vo change nahi hota
// so basically this keyword use hota hai to refer that particular scope
// user.username = "sam"
// user.welcomeMessage()

// this keyword will refer differently in node environment and in browser
// console.log(this);

// function chai(){
//     let username = "hitesh"

// ase directly hum function ke undr this keyword use nhi kar sakte useke liye humne variable mai store karna padega function ko
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// dhekho agar humne arrow function use karke variable mai store kiya than hum ye this keyword se useke under ke variable ko access kar sakte hai
const chai = () => {
  let username = 'hitesh';
  console.log(this.username);
};

chai();

// agar humne arrow function mai curely braces {} ye lagaya than humne complusory return statement use karna padega
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// but agar humne curely braces {} ye nhi lagaya than vo automaticaly usko return karva lega as it does in the below two cases
// const addTwo = (num1, num2) =>  num1 + num2

// ye below vali method tab use karte hai jab humne objects ko return karvana ho without using {} as we have done in line 64
// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({ username: 'hitesh' });

console.log(addTwo(3, 4));

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
