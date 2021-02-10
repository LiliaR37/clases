"use strict" //No permite crear variables afuera 
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

//obj freeze no deja crear nada externo o hacer nada 
Object.freeze(producto);
//producto.disponible = false;
//producto.imagen = "imagen.jpg";
console.log(producto);

console.log(Object.isFrozen(producto));
