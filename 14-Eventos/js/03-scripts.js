//Eventos sobre los inputs 

const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('input', (e) => {
    if(e.target.value === ''){
        console.log('Fallo la validacion');
    }

})
/*
busqueda.addEventListener('input', (e) => {
    console.log(e.target.value);

})
//Target informacion del input especifico
//type sobre que elemento trabajo 


busqueda.addEventListener('input', () => {
    console.log('escribiendo...')

})

busqueda.addEventListener('copy', () => {
    console.log('escribiendo...')

})


busqueda.addEventListener('blur', () => {
    console.log('escribiendo...')

})

busqueda.addEventListener('keydown', () => {
    console.log('escribiendo...')

})
*/


//cut 
//paste 