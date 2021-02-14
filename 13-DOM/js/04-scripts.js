//Query Selector

const card = document.querySelector('.card');
console.log(card);

//Retorna el primer elemento llamado card 


//El query selector señala como en el css   


//Podemos tener selectores especificos como css

const info = document.querySelector('.premium .info');
console.log(info);

//Si queremos seleccionar un elemento se puede usar el nth-child

const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard);


//Seleccionar formulario con el id

const formulario = document.querySelector('#formulario');

console.log(formulario);

//Seleccionar elementos HTML
const navegacion = document.querySelector('nav');
console.log(navegacion);

