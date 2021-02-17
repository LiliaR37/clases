//object literal

const cliente = {
    nombre: 'Lilia',
    saldo: 500
}

console.log(cliente);




//constructores

function Cliente (nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;

}


const juan = new Cliente('Juan', 500);


console.log(juan);