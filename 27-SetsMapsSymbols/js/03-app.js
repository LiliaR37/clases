const cliente = new Map();

cliente.set('nombre','karen');
cliente.set('tipo','Premium');
cliente.set('saldo','3000');


console.log(cliente.size);

console.log(cliente.has('nombre'));
console.log(cliente.get('nombre'));
console.log(cliente.delete('saldo'));



const paciente = new Map([['nombre','paciente']], ['cuarto','no definido']);

paciente.set('dr','Asignado');
paciente.set('nombre','Antonio');

paciente.forEach(datos => {
    console.log(datos);
});


