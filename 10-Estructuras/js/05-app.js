// Switch para evaluar condiciones 

const metodoPago = 'efectivo';

switch (metodoPago) {
    case 'efectivo':
        pagar();
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'cheque':
        console.log('Pagaste con cheque');
        break;
    default:
        console.log('Aun no has seleccionado un metodo de pago o metodo de pago soportado');
}

function pagar() {
    console.log('Estoy pagando ... '); 
}