// Funcion clasica HOISTING
function saludar(nombre){
    return `Hola ${nombre}`;
}

console.log(saludar('David'));

//Funciones anonimas (no tienen nombre, no usa hoisting)
let saludo = function(nombre){
    return `Hola ${nombre}`;
}

//FUnciones flecha () => {}
//funciones mas simplificadas
//igualada a una variable
//no requiere return 
//no hoisting
//si solo es una linea de codigo se pueden omitir parentesis y llaves
let saludo2 = nombre => `Hola ${nombre}`;
let suma = (a,b) => a+b; //parentesis mas de un parametro
//sin parametros poner ()
let obj = ()=> ({nombre:'bob',edad:20}); //entre parentesis si hay un objeto

console.log(suma(2,2));
console.log(obj().nombre);