//LECTURA DE NODOS

//Por ID
let elementoPorId = document.querySelector('#parrafo1');
elementoPorId.innerHTML = 'Suscribete';

//Por nombre de la clase
let elementosPorClase = document.querySelectorAll('.parrafos');//Arroja un NodeList
console.log(elementosPorClase); //listado de elementos
const arreglo = [...elementosPorClase];//transformamos a lista
console.log(arreglo)
arreglo[1].innerHTML = 'a CodingTUbe';

//Por etiqueta
let elementosPorEtiquetas = document.querySelectorAll('p');
elementosPorEtiquetas[2].innerHTML= 'ahora';
console.log(elementosPorEtiquetas)



