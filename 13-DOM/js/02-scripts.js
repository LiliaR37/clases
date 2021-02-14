// Seleccionar elementos por su clase 


const header = document.getElementsByClassName('header');

console.log(header);


const hero = document.getElementsByClassName('hero');


console.log(hero);


// si las clases existen más de una vez las trae todas 

const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);

//Si una clase no existe 

const noExiste = document.getElementsByClassName('no-existe');
console.log(noExiste);