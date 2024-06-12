//Seleccionando Elementos

//por id
let elementoPorId = document.getElementById('parrafo1');
elementoPorId.innerHTML = 'HTML';//Reemplaza el texto

// Por el nombre de la clase
let elementosPorClase = document.getElementsByClassName('parrafos');//se trata de un arreglo
console.log(elementosPorClase.length);
elementosPorClase[1].innerHTML = 'CSS';

// Por etiqueta
let elmentosPorEtiquetas = document.getElementsByTagName('p'); //regresa un array
console.log(elmentosPorEtiquetas.length)
elmentosPorEtiquetas[2].innerHTML = 'JAVASCRIPT';

// Modificando estilos
elementoPorId.style.background='black';
elementoPorId.style.color = 'white';
elementoPorId.style.borderRadius = '20px';
elementoPorId.style.padding='20px'
elementoPorId.style.textAlign = 'center'


