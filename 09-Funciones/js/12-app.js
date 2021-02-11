const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Television', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 400},
    {nombre: 'Teclado', precio: 300},
    {nombre: 'Celular', precio: 700},
]




//forEach para iterar un array 
/*
const nuevoArreglo = carrito.map(function(producto){
    return  `${producto.nombre} - Precio: ${producto.precio}`;
})
*/

const nuevoArreglo = carrito.map( producto  =>  `${producto.nombre} - Precio: ${producto.precio}`);


 carrito.forEach(producto =>  console.log(`${producto.nombre} - Precio: ${producto.precio}`));

console.log(nuevoArreglo);


