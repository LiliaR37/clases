const dinero = 300;
const totalApagar = 500;
const tarjeta = true;
const cheque = true;

if( dinero >= totalApagar){
    console.log('si puedes pagar..')

}else if (cheque){
    console.log('Si tengo cheque puedo pagar ')
}else if(tarjeta ) {
    console.log('Si puedo pagar porque tengo tarjeta');
}else {
    console.log('Fondos insuficientes');
}

// ejecuta la primera condicion y luego ejecuta la otra condicion


