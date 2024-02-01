const marvel_heros = ['hulk', 'ironman', 'thor'];
const dc = ['superman', 'flash'];

// this below function will add the whole array of marvel_heros along with [] assuming it as a single element into dc
dc.push(marvel_heros); // output : ['superman' , 'flash' , ['hulk' , 'ironman'  , 'thor'] ]

// this below funciton will add both the array by assuming the element inside a array as a single element
const all = dc.concat(marvel_heros); // output: ['superman' , 'flash' ,'hulk' , 'ironman'  , 'thor']

// this below operator will add arrays element as seperate elements into another array
const aals = [...dc, ...marvel_heros]; //output:  ['superman' , 'flash' ,'hulk' , 'ironman'  , 'thor']

// agar ek array ke andar 1d , 2d  , 3d arrays ho and humne un sabko 1d array mai convert karna ho than
const al = [1, 2, 3, [23, 45, [1, 23, 5, 542]]];
const finalFlat = al.flat(Infinity); //output: [1,2,3,23,45 , 1,23,5,542]

// if we want to check wheather a particular element is a array or not
const a = 'het';
Array.isArray(a);

// if we want to convert any other datatype into array
Array.from(a); //output: ['h','e','t']

// if we want to add multiple elemets that are not array into an array
const b = 'shah';
Array.of(a, b);
