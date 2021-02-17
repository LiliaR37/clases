function Cliente (nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;

}


Cliente.prototype.tipoCliente = function() {
    let tipo;

    if(this.saldo > 10000) {
        tipo = 'Gold';
    } else if (this.saldo > 5000) {
        tipo = 'Platinum';
    } else {
        tipo = 'Normal'
    }
    return tipo;
}


Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo: ${this.tipoCliente()}`
}

Cliente.prototype.retiraSaldo = function(retira) {
    this.saldo -=  retira
}


//instaciarlo

function Persona(nombre, saldo, telefono) {
    Cliente.call(this, nombre,saldo) //heredar
    this.telefono = telefono;
    

}

Persona.prototype = Object.create(Cliente.prototype) //copiar el prototype

Persona.prototype.constructor  = Cliente //constructor para que aparezca 


//instanciarlo 


const lilia = new Persona('Lilia',5000,63467619);
console.log(lilia.nombreClienteSaldo());


Persona.prototype.mostrarTelefono = function() {
    return `El telefono de esta persona es ${this.telefono}`
}
console.log(lilia.mostrarTelefono())

console.log(lilia);