const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}
//Asignacion antigua
//const nombre = producto.nombre;
//console.log(nombre);

//Nueva forma Destructuring

const {precio, nombre,disponible} = producto;
console.log(precio);
console.log(nombre);
console.log(disponible);