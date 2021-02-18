class Cliente {

    #nombre;
    constructor(nombre, saldo) {
        this.#nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.#nombre}, tu saldo es de:  ${this.saldo}`
    }

    static bienvenida() {
        return `Bienvenido al Cajero`
    }
}


const juan = new Cliente('Juan',200);
console.log(juan.mostrarInformacion());
console.log(juan);



// class Cliente {
//     #nombre;

//     setNombre(nombre) {
//         this.#nombre = nombre;
//     }
//     getNombre() {
//         return this.#nombre;
//     }
// } 
// juan.setNombre('lilia');
// console.log(juan.getNombre);

