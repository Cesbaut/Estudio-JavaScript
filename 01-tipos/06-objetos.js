let nombre = "Tanjiro";
let anime = "Demon Slayer";
let edad = 16;

let personaje = {
    nombre:"Tanjiro",
    anime:"Demosn Slayer",
    edad:16,
};

console.log(personaje)
console.log(personaje.edad)
console.log(personaje['anime'])

personaje.edad = 24
console.log(personaje.edad)

let llave = 'edad'

personaje[llave]=22
console.log(personaje.edad)

delete personaje.anime
console.log(personaje)