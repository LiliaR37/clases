//Class declaration  +  popular 

class Cliente {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de:  ${this.saldo}`
    }

    static bienvenida() {
        return `Bienvenido alc Cajero`
    }
}
//instaciar la clase 


const lilia = new Cliente('Lilia', 400);
console.log(lilia.mostrarInformacion());
console.log(lilia);
console.log(Cliente.bienvenida());// se llaman desde las clases 

//Class expression 
const Cliente2 = class {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
        mostrarInformacion() {
            return `Cliente: ${this.nombre}, tu saldo es de:  ${this.saldo}`
        }
}


const lilia2 = new Cliente2('Lilia', 400);
console.log(lilia2.mostrarInformacion());
console.log(lilia2);