// this is how we can create a constructure function in javascript
function User(username, loginCount, isLoggedIn) {
  (this.username = username),
    (this.loginCount = loginCount),
    (this.isLoggedIn = isLoggedIn);
  return this;
}

// here new leyword is a constructor function like agar humne ye new keyword nhi likha than agar koi dusare variable declare kiya like usertwo and jab hum log userone ko karenge tab bhi vo user two user one ko overwrite kar dega that's y it is impp  to decalre new keyword

// new keyword ka aur ek importance hai like agar humne koi function mai khud ka method  add kiya and new keyword nhi use kiya toh vo method add hi nhi hoga usme
const userOne = new User('het', 11, true);
const userTwo = new User('shah', 12, false);
console.log(userOne);

// javascript uses prototypal behaviour jo khabhi har nhi manta matlab agar usko koi cheez koi function mai na mile to vo upar jayega agar waha na mile toh aur upar jayega tab tak usko o cheez nhi milti and agar vo cheez hogi nhi than only it will return null

// so matlab Arrays , function ,  string sare jan objects ko hi refer karte hai and object eventually null pe hi jata hai

// matlab agar humne ek function decalre kiya than hum . karke koi properties bhi add kar sakte hai uski
const heros = () => {
  console.log('spiderman');
};

heros.power = 'web';

console.log(heros);

function createUser(username, score) {
  (this.username = username), (this.score = score);
  return this;
}

createUser.prototype.increment = function () {
  this.score++;
};

createUser.prototype.printMe = function () {
  console.log(this.score);
};

const chai = new createUser('het', 25);
chai.printMe();

// agar hume koi ek object ki property dusare ko access karvani hai than we can use inheritance
const het = {
  name: 'hetshah',
  age: 17,
};

const shah = {
  fullname: 'shahhet',
  fullage: 16,
};

// now if we want to access the property of het in shah we can use
Object.setPrototypeOf(shah, het);
