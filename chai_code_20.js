// for an eg agar humare pas ek div hai jiske under we have 4 h1 and we have to select 1st h1 or last h1 than we can use following methods
const classN = document.querySelector('.divclassname');
classN.firstElementChild;
classN.lastElementChild;

// agar humare pas first h1 hai and hume uske parent pe jana hai than we can use
const heading = document.querySelector('.h1classname');
heading.parentElement;

// agar hum log first h1 pe hai and hume 2 h1 ke jana hai than
heading.nextElementSibling;

// how to create a new element and add it to the web page
const divElem = document.createElement('div');
divElem.className = 'het';
divElem.id = 'het1';
divElem.setAttribute('bg', 'black');
divElem.style.color = 'red';

// how to add text
const addingtext = document.createTextNode('myself het ');
divElem.appendChild(addingtext);

document.body.appendChild(divElem);
