/*añadir elementos a un array 
const meses = ['enero','febrero', 'marzo'];

//agregar al final del arreglo

meses.push('abril');
meses.push('mayo');


console.table(meses);
*/

const carrito = [];

const producto = {
    nombre: 'Monitor 20 pulgas',
    precio: 500,
}

const producto2 = {
    nombre: 'Celular',
    precio: 5000,
}

carrito.push(producto);
carrito.push(producto2);

const producto3 = {
    nombre: 'teclado',
    precio: 30,
}
// Lo agrega al inicio
carrito.unshift(producto3);
console.table(carrito);