const pendientes = ['Tareas', 'Comer', 'Proyecto', 'Estudiar' ,'JavaScript'];



pendientes.forEach((pendiente, indice) => {
    console.log(`${indice} : ${pendiente}`);

})

const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Television', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 400},
    {nombre: 'Teclado', precio: 300},
    {nombre: 'Celular', precio: 700},
]

/*
carrito.forEach(producto =>  console.log(producto.nombre)


*/

const nuevoArreglo2 = carrito.map(producto => producto.nombre);


console.log(nuevoArreglo2)
