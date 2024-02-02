// how to do obejct destructuring
const hetObj = {
  name: 'het',
  age: 17,
};

const { name: myname, age } = hetObj;
console.log(myname, age); //output : het , 17

// function in javascript
function myname(mynames = 'het') {
  console.log(mynames);
  return mynames;
}

// Because of return statement it will give output agar r3eturn nhi hota and only console log hota than hume ye value nhi milti
const givenvalye = myname(shah);
