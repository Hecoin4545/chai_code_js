// date and time

// Their are few methods through which we can create dates
let myDate = new Date();
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(myDate.toString());

let mycreateddate = new Date(2023, 0, 23, 5, 3);
console.log(mycreateddate.toLocaleString());

// Time in javascript

let mytime = Date.now();
console.log(mytime);
