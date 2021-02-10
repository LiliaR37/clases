const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

producto.imagen = 'imagen.jpg'

//Eliminar del obj 
delete producto.disponible;
console.log(producto);

//Agregar o eliminar de un obj