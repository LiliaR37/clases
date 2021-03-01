// Promises

const aplicarDescuento = new Promise((resolve, reject) => {

    const descuento = true;

    if (descuento) {
        resolve('Descuento Aplicado')
    } else {
        reject('No se pudo aplicar')
    }


});

aplicarDescuento
    .then(resultado => descuento(resultado))
    .catch(error => {
        console.log(error);
    })

    function descuento(mensaje) {
        console.log(mensaje)
    }




//Cuando el promise falla se aplica el .catch
