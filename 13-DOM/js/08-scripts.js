const navegacion = document.querySelector('.navegacion');

console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);
/*
console.log(navegacion.childNodes); //Los espacios en blanco son considerados elementos
console.log(navegacion.children); //Los espacion en blacos no son considerados solo codigo html

//Se les conoce como nodos  

console.log(navegacion.children[0].nodeName);
console.log(navegacion.children[0].nodeType);
*/

const card = document.querySelector('.card');

//card.children[1].children[1].textContent = 'Nuevo heading desde Traversing the dom'
//console.log(card.children[1].children[1].textContent);
/*
card.children[0].src = 'img/hacer3.jpg';

console.log(card.children[0]);
*/

//console.log(card.parentNode);
//console.log(card.parentElement.parentElement.parentElement);
//console.log(card.nextElementSibling.nextElementSibling);

//const ultimoCard = document.querySelector('.card:nth-child(4)');
//console.log(ultimoCard.previousElementSibling)
