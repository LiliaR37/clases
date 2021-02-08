const producto = '              Monitor 20 Pulgadas             ';

console.log(producto);
console.log(producto.length);

//Eliminar del inicio...
console.log(producto.trimStart());
//Eliminar al final
console.log(producto.trimEnd());

//Ambos NUEVA
console.log(producto.trimStart().trimEnd());

//La más usada para ambos 
console.log(producto.trim());
