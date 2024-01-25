// Strings in javascript

// How to concat strings
let name = 'het';
let company = 'hecoin';
console.log(`hello myself ${name} and i am the founder of ${company}`);

// how to decalre String
const gName = new String('hecoine4545');
console.log(gName[0]);

// If we want to access the prototype
console.log(gName.__proto__);

// Methods in Javascript

// If we want to check the length of string
console.log(gName.length);

// This changes the string to upper case and doesnot changes it premanently because it uses stack memory
console.log(gName.toUpperCase());

// agar hume find karna hai ki ek particular position par konsa character hai
console.log(gName.charAt(2));

// agar hume find karna hai ki ek particular character konsi position par par than
// Note: it only gives the first character and if a character is not found it will give an error
console.log(gName.indexOf('q'));

// agar hume kisi string mai se ek particular part chahiye ho than
// note: it doesnot accepts negative value
// It only takes two argument that is starting point and ending point(not included)
let newerStr = gName.substring(0, 4);
console.log(newerStr);

// It can also takes negative value
let newerstr1 = gName.slice(-9, 8);
console.log(newerstr1);

// Trim method is used to remove the starting and ending spaces
let bad = '    het    ';
console.log(bad.trim());

// If we want to replace a particular item with another
let changing = 'het is a bad person ';
console.log(changing.replace('bad', 'good'));

// if we want to check wheather a particular key word is their or not than
// It only gives boolean values
console.log(changing.includes('is'));

// Agar hume koi particular sentence ko break karna ho than
// It gives us array
console.log(changing.split(' '));
