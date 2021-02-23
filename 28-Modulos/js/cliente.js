// (function(){
//     console.log('Desde un IIFE');

//     window.nombreCliente = 'Juan';
// }) ();

//PARA EXPORTAR DE UNA VENTANA OTRA PERO HAY QUE USAR TYPE="MODULE"
// export const nombreCliente = 'juan';

export const nombreCliente = 'Lilia';
export const ahorro = 500;

export function mostrarInformacion(nombre,ahorro) {
  return  `Cliente: ${nombre} - Ahorro: ${ahorro}`;
}

export function tieneSaldo(ahorro) {
    if(ahorro > 0) {
        console.log('Si tiene saldo')
    }else {
        console.log('No tiene saldo')
    }
}

export class Cliente {
    constructor(nombre,ahorro) {
        this.nombre = nombre;
        this.ahorro = ahorro;
    }
    mostrarInformacion() {
  return  `Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`;

    }
}

export default function nuevaFuncion() {
    console.log('Este es el export default');
}