const carrito = [];

const producto = {
    nombre: 'Monitor 20 pulgas',
    precio: 500,
}

const producto2 = {
    nombre: 'Celular',
    precio: 5000,
}
const producto4 = {
    nombre: 'audifonos',
    precio: 25,
}
carrito.push(producto);
carrito.push(producto2);
carrito.push(producto4);

const producto3 = {
    nombre: 'teclado',
    precio: 30,
}


// Lo agrega al inicio
carrito.unshift(producto3);
console.table(carrito);

/*
//Eliminar ultimo elemento de un arreglo...
carrito.pop();

console.table(carrito);

//Eliminar del inicio del arreglo
carrito.shift()
console.table(carrito);
*/

//  Elementos de la lista medio

carrito.splice(1, 1);
carrito.splice(3, 1);
console.table(carrito);

