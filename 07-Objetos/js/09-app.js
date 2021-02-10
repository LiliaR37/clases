"use strict" //No permite crear variables afuera 
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

//obj seal no deja eliminar o crear pero si modificar las existentes
Object.seal(producto);

producto.disponible = false;

console.log(producto);
console.log(Object.isSealed(producto));
