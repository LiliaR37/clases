const ciudades = ['Londres','New York','Madrid','Paris'];
const ordenes = new Set([123,231,131,102]);
const datos = new Map();

datos.set('nombre','Juan');
datos.set('profesion','Desarrollador Web');


//Default --- se trae todo
for(let ciudad of ciudades.keys()) {
    console.log(ciudad);
}
for(let orden of ordenes.keys()) {
    console.log(orden);
}



//Keys Iterator

for(let keys of ciudades.keys()) {
    console.log(keys);
}
//Values Iterator
for(let value of ciudades.values()) {
    console.log(value);
}

for(let value of ordenes.values()) {
    console.log(value);
}
for(let value of datos.values()) {
    console.log(value);
}






// //Entries Iterator
// for(let entry of ciudades.entries()) {
//     console.log(entry);
// }


// for(let entry of ordenes.entries()) {
//     console.log(entry);
// }
// for(let entry of datos.entries()) {
//     console.log(entry);
// }

