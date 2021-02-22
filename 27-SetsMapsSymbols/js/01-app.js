const carrito = new Set();

carrito.add('Camisa');

carrito.add('Disco 1');
carrito.add('Disco 2');
carrito.add('Disco 3');


// carrito.delete('Disco 1');

// console.log(carrito.has('Camisa'));

// console.log(carrito.size);

// carrito.clear();
carrito.forEach(producto => {
    console.log(producto);
});

console.log(carrito)

//Ejemplo Eliminar en el siguiente arreglo los duplicados

const numeros = [1,2,3,4,5,6,7,8,7,2];

const noDuplicados = new Set(numeros)

console.log(noDuplicados);
