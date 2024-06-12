//CREAR NODOS
const parrafo4 = document.createElement('p');
const textoParrafoCuatro = document.createTextNode('Texto parrafo4');
const parrafoCinco = document.createElement('p');
parrafoCinco.innerHTML = 'Parrafo5';

//Seleccionar elmento padre
const elementoPadre = document.querySelector('.padre')
 
//Agregar NODOS
// elementoPadre.appendChild(parrafo4)
parrafo4.appendChild(textoParrafoCuatro);

// elementoPadre.appendChild(parrafoCinco)

elementoPadre.append(parrafo4,parrafoCinco); //agregar varios elementos



const parrafoUno = document.querySelector('p');//traera el primero
const parrafoDos = document.querySelector('#parrafo2')

const parrafoCero = document.createElement('p');
parrafoCero.innerHTML = 'Texto del parrafo 0';
elementoPadre.insertBefore(parrafoCero, parrafoDos);

const parrafoExtra = document.createElement('p');
parrafoExtra.innerHTML = 'parrafo Extra'
elementoPadre.insertAdjacentElement('afterbegin', parrafoExtra)

console.log(parrafoExtra)
parrafoExtra.setAttribute('class', 'parrafos')


//ELIMINAR NODOS
elementoPadre.removeChild(parrafoUno); //elimina sobre el padre
parrafoDos.remove();

elementoPadre.replaceChild(parrafo4,parrafoCinco)