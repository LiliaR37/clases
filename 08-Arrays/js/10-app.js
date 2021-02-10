const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Television', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 400},
    {nombre: 'Teclado', precio: 300},
    {nombre: 'Celular', precio: 700},
]




//forEach para iterar un array 

const nuevoArreglo = carrito.map(function(producto){
    return  `${producto.nombre} - Precio: ${producto.precio}`;
})

//no la muestra
const nuevoArreglo2 = carrito.forEach(function(producto){
    return  `${producto.nombre} - Precio: ${producto.precio}`;
})

console.log(nuevoArreglo);
console.log(nuevoArreglo2);



//.map llenar una variable con un arreglo nuevo 