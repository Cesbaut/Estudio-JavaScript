// OBJETO DATE
let fechaActual = new Date();

console.log(fechaActual);

//DIA
console.log(fechaActual.getDate());
//MES
console.log(fechaActual.getMonth());
//ANO
console.log(fechaActual.getFullYear());
//DIA DE LA SEMANA 0-6    0-Domingo
console.log(fechaActual.getDay())

//TIMESTAMP: 01 Enero 1970 -> Actualidad
console.log(fechaActual.getTime());
console.log(Date.now());
console.log(+fechaActual);
let fechaConTimestamp = new Date(1234567890123);
console.log(fechaConTimestamp);

//STRING
let fechaConString = new Date("2021-07-23 23:00:14");
console.log(fechaConString);

//Date(ano, mes, fehca, horas, minutos, segundos, ms) en ese orden
let fechaConParametros = new Date(2021,1,0);//ano y mes obligatorio
console.log(fechaConParametros)

//SETTERS
fechaConParametros.setFullYear(1980);
console.log(fechaConParametros)