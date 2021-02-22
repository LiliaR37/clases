const sym = Symbol('1');
const sym2 = Symbol('1');


const nombre = Symbol();
const apellido = Symbol();

const persona = {};

//Agregar nombre y apellido coomo llaves del objeto

persona[nombre] = 'Lilia';
persona[apellido] = 'Ruiz';
persona.tipoCliente = 'Premium';
persona.saldo = 500;

console.log(persona);

//Definir una descripción del symbol

const nombreCliente = Symbol('Nombre del Cliente');
const cliente = {};

cliente[nombreCliente] = 'Pedro';

console.log(cliente);
console.log(cliente[nombreCliente]);