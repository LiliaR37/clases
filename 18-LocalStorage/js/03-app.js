localStorage.removeItem('nombre');


//Actualizar datos

const mesesArray = JSON.parse(localStorage.getItem('meses'));
mesesArray.push('nuevo mes');
console.log(mesesArray);
localStorage.setItem('meses', JSON.stringify(mesesArray));