const usuario = false;
const puedePagar = true;

if( usuario && puedePagar){
    console.log('Si puedes comprar')
}else if (!usuario){
    console.log('Inicia sesion o abre una cuenta ')
}else if(puedesPagar) {
    console.log('fondos insuficientes')

}else {
    console.log('No no puedes comprar')
}

//&& cuando se cumplen dos condiciones