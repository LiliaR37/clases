function Cliente (nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;

}


const juan = new Cliente('Juan', 500);


function formatearCliente(cliente) {
    const {nombre, saldo} = cliente;

    return `El cliente ${nombre} tiene un saldo de ${saldo} ` ;
}

console.log(formatearCliente(juan));


function empresa (nombre, saldo,categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;

}