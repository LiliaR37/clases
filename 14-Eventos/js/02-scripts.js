const nav = document.querySelector('.navegacion');


nav.addEventListener('mouseout', () => {
    console.log('saliendo en la navegacion');
    nav.style.backgroundColor = 'transparent';
})


nav.addEventListener('dblclick', () => {
    console.log('entrando  en la navegacion');
    nav.style.backgroundColor = 'white';
})

//mousedown - Similar al click
//click
//mouseup- cuando sueltas el mouse

/*
nav.addEventListener('mouseenter', () => {
    console.log('Entrando en la navegacion');
})
//Registar un evento con los diferentes tipos 

nav.addEventListener('click', () => {
    console.log('Click en nav');
})

nav.addEventListener('mouseenter', () => {
    console.log('entrando  en la navegacion');
    nav.style.backgroundColor = 'white';
})
*/
