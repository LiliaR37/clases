const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}
//Asignacion antigua
//const nombre = producto.nombre;
//console.log(nombre);

//Nueva forma Destructuring

const { nombre} = producto;
console.log(nombre);

//Destructuring arreglos

const numeros = [10,20,30,40,50];

//const[ , , tercero] = numeros; 
//console.log(tercero);
const[ primero,  ...tercero] = numeros; 

console.log(tercero);
