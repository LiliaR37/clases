// Break corta la ejecucion de un for || Continue permite interceptar un elemento identificarlo y   continuar la ejecucion

//Pregunta de trabajo: Crear un for loop que al llegar al elemento numero 5 detenga su ejecucion 
/*
for ( let i = 0; i<= 10; i++){
    if(i === 5 ){
        console.log('Este es el 5')
        break;
    }
    console.log(`Numero: ${i}`);
} 


//otra pregunta ahora quiero que llegue a CINCO en letras y continue

for ( let i = 0; i<= 10; i++){
    if(i === 5 ){
        console.log('Este es el 5')
        continue;
    }
    console.log(`Numero: ${i}`);
} 
*/

// En el listado de carrito identificar el elemento que tiene descuento


const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Television', precio: 100},
    {nombre: 'Tablet', precio: 200, descuento: true},
    {nombre: 'Audifonos', precio: 400},
    {nombre: 'Teclado', precio: 300},
    {nombre: 'Celular', precio: 700},
]


for ( let i = 0; i < carrito.length; i++ ){
    if(carrito[i].descuento){
        console.log(`El articulo ${carrito[i].nombre } Tiene descuento`);
        continue;
    }
    console.log(carrito[i].nombre);
}

