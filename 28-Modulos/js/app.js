 import nuevaFuncion,{nombreCliente, ahorro, mostrarInformacion, tieneSaldo, Cliente} from './cliente.js';
 nuevaFuncion();
console.log(nombreCliente);
console.log(ahorro);
console.log(mostrarInformacion(nombreCliente,ahorro));

tieneSaldo(ahorro);

 const cliente = new Cliente(nombreCliente,ahorro);

console.log(cliente);


//Importar empresa 

import {Empresa } from './empresa.js'
const empresa = new Empresa ('Codigo con Juan',100, 'Aprendizaje Moderno');


console.log(empresa);