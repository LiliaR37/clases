
//Replace para reemplazar
const producto = 'Monitor 20 Pulgadas';
/*
console.log(producto);
console.log(producto.replace('Pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor Curvo'));*/

//Slice para cortar
console.log(producto.slice(0,10));
console.log(producto.slice(8));
console.log(producto.slice(2,1)); //No hace nada si le pasas un número mayor (El primero inicio, segundo # de caracteres)

//Alternativa a slice
console.log(producto.substring(0,10));
console.log(producto.substring(2,1)); //Cambiar de posicion


//ejemplo de agregar una sola letra como en google gmail

const usuario = "Lilia";
console.log(usuario.substring(0,1));

//Forma mas corta
console.log(usuario.charAt(0));

