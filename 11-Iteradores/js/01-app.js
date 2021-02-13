// For loop

//for ( let i = 0; i <= 10; i++) {
    //console.log(`Numero: ${i}`)
//}

//Prgunta : En un for loop cómo podemos identificar los números pares y los numerod impares
/*
for (let i = 1; i <= 20; i++){
    if ( i % 2 === 0) {
        console.log(`El número es: ${i} Par`);
    }else {
        console.log(`El número es: ${i} Impar`);
    }
}
*/

const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Television', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 400},
    {nombre: 'Teclado', precio: 300},
    {nombre: 'Celular', precio: 700},
]

for ( let i = 0; i < carrito.length; i++ ){
    console.log(carrito[i].nombre);
}