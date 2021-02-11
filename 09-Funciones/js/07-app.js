//Como se comunican las funciones 

iniciarApp();
function iniciarApp(){
    console.log('Iniciando app...');
    segundaFuncion()
}

function segundaFuncion() {
    console.log('Desde la segunda funcion');
    usuarioAutenticado('Lilia');

}

function usuarioAutenticado(usuario){
    console.log('Auntenticando usuario espere...');
    console.log(`Usuario autenticado exitosamente: ${usuario}`);
}