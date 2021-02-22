const weakset = new WeakSet()

const cliente = {
    nombre:'Lilia',
    saldo: 100
}

weakset.add(cliente);

console.log(weakset.has('nombre'))