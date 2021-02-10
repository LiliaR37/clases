//Objeto dentro de un objeto 

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion : {
        medidas:{
            peso : '1kg',
            meidda: '1m'
        },
        fabricacion: {
            pais: 'china'
        }

    }
}

console.log(producto.informacion.fabricacion.pais)