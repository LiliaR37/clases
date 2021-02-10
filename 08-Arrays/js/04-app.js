const meses = ['enero','febrero', 'marzo','abril','mayo','junio','julio'];

//una variable const puede modificarse en obj y arreglos al menos que en el object se utilice los metodos de sellado

meses[0] = 'nuevo mes';
meses[10] = 'ultimo mes';

console.table(meses);