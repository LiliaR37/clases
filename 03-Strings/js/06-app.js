const producto = 'Monitor 20 Pulgadas';

//.Repeat permite repetir una cadena de texto ...

const texto = ' En Promoción'.repeat(3);

//const texto = ' En Promoción'.repeat(2.4); LO REDONDEA A 2 PORQUE NO TOMA DECIMALES SOLO ENTEROS

console.log(texto);
console.log(`${producto} ${texto} !!!!`);


//Split. dividir un string 

const actividad = "Estoy aprendiendo Javascript Moderno";
console.log(actividad.split(" "));

const hobbies = 'Leer, caminar, escuchar, escribir, aprender a programar';
console.log(hobbies.split(","));


const tweet = 'aprendiendo Javascript #javascript #JSmodernoConJuan';
console.log(tweet.split('#'));
