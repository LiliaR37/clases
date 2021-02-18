//Class declaration  +  popular 

class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de:  ${this.saldo}`
    }

    static bienvenida() {
        return `Bienvenido al Cajero`
    }
}



//Herencia de la clase

class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria) {
        super(nombre,saldo)// los busca en el constructor padre
        this.telefono = telefono;
        this.categoria = categoria;
        

    }
    static bienvenida() {
        return `Bienvenido al Cajero de empresas `  //se reescribe
    }
}




//Instancia 

const juan = new Cliente('Juan', 500);
const empresa = new Empresa('Código con Juan', 700);
console.log(empresa);
console.log(empresa.mostrarInformacion());// La copia 


console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());
