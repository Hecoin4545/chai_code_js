// thier are two type of mermory

// stack memory is used when the datatype is primitive (iski ek copy ban jayegi)
let myname = 'het';
let anothername = myname;
anothername = 'shah';
console.table([myname, anothername]); // ans = het , shah
// above code mai stack memory use huvi matlab jab humne anothername = myname kiya tab myname ki copy ban gayi and usme changes huva jab ki myname mai toh vahi value rahi

// heat memory is used when the datatype is non primitive

let ar = {
  name: 'het',
};

let ar1 = ar;
ar1.name = 'shah';

console.table([ar.name, ar1.name]); // ans == shah , shah
// above code mai ye memory heap mai convert huvi which means jab mane ar1 = ar kiya tab ar ki conpy nahi bani so jab bhi mai ar1 mai change karunga tab ar mai bhi change directly ho jayega
