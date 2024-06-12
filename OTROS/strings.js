// STRINGS
let nombre1 = "Juan";
let nombre2 = 'Pedro';
let nombre3 = `Maria`;

let declaracion = 'Mi lenguaje favorito es "JavaScript". ';
console.log(declaracion);



//SALTOS DE LINEA

//Con `` podemos hacer saltos de linea
let compras =  `lista de compras:
Aceite
Arroz
Carne
Frutas`;
console.log(compras);

//con \n
let compras2 = "lista de compras : \n hola \n Adios \n bueno";
console.log(compras2)



//TEMPLATE STRINGS
let edad = 15;
console.log(`Roberto tiene ${edad} anos`);
console.log("Roberto tiene " + edad + " anos.");

//LARGO DEL STRING
let saludo = 'Hola mundo';
console.log(saludo.length);

//Accediendo a caracteres
console.log(saludo[3])

saludo[3] = `h`;
console.log(saludo); //No se puede reemplazar

saludo = 'hola mundo';//tengo que cambiar todo el string
console.log(saludo)


//Mayuscula minuscula
console.log(saludo.toUpperCase());//MAYUSCULA
console.log(saludo.toLowerCase());//MInuscula


//Subcadena
let frase = 'HTML es un lenguaje de marcado y Javascript es un lenguaje de programacion';
console.log(frase.indexOf('HTML'));
console.log(frase.indexOf('lenguaje'));
console.log(frase.indexOf('es',6));//busque desde el indice 6
console.log(frase.indexOf('CSS'));//si NO hay arrejo un -1
console.log(frase.lastIndexOf('es'));//busca desde el final

//includes, startsWith, endsWidth
console.log(frase.includes('lenguaje')); //booleano que indica si se encuentra dentro
console.log(frase.includes('CSS'));
console.log(frase.endsWith('programacion'))//termina con

//Metodos substrings
let lenguaje = 'JavaScript       ';
console.log(lenguaje.substring(2,4));//mostar entre posiciones
console.log(lenguaje.substr(2,4));//despues de la posicion 2 se recorre 4 lugares

//trim y repeat
lenguaje = lenguaje.trim();//elimina los espacios en blanco del inicion y fin
console.log(lenguaje);
console.log(lenguaje.repeat(10)); //repetir la cadena 10 veces







