//forma declarativa para agregar elementos  aun array 
const carrito = [];

const producto = {
    nombre: 'Monitor 20 pulgas',
    precio: 500,
}

const producto2 = {
    nombre: 'Celular',
    precio: 5000,
}



const producto3 = {
    nombre: 'teclado',
    precio: 30,
}

let resultado;

resultado = [...carrito, producto];
resultado = [...resultado, producto2];
resultado = [producto3, ...resultado];
console.table(resultado);