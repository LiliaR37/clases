//METODOS PARA OBJ
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    
}
//Para saber si un obj tiene informacion y retorna lo que hay en las {} la parte de la izquierda
console.log(Object.keys(producto));

// obj values retorna la parte derecha es decir los valores

console.log(Object.values(producto));

//object entries muestra todo en pares
console.log(Object.entries(producto));