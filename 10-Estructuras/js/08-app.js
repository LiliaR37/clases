// Realizacion de buena logicas 

const autenticado = true;

if (autenticado) {
    console.log('El usuario esta autenticado');
}

const puntaje = 450;

function revisarPuntaje() {

    if( puntaje > 400 ){
        console.log('Excelente!!');
        return;
    } else if (puntaje > 300) {
        console.log('Buen puntaje.. Sigue mejorando')
        return;
    }
}

revisarPuntaje() 