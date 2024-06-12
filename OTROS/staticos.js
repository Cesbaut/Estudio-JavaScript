class Mascota{
    static cola = 'larga'; //elemento estatico
    pelaje = 'lacio';
    static contadorMascota = 0; //contador estatico
    constructor(nombre,edad){
        this._nombre=nombre;
        this._edad=edad;
        this._numero = ++Mascota.contadorMascota;
    }

    get numeroCreacion(){
        return this._numero;
    }
    static saludo(){ //metodo estatico
        return 'mover la cola';
    }
}

let mascota1 = new Mascota('Body', 5);
let mascota2 = new Mascota('max', 7);
let mascota3 = new Mascota('rex', 2);


console.log(Mascota.cola); //solo se puede acceder al estatico con la clase
console.log(mascota1.pelaje);


console.log(mascota1.numeroCreacion);
console.log(mascota2.numeroCreacion);
console.log(mascota3.numeroCreacion);


console.log(Mascota.saludo());


class Perro extends Mascota{
    constructor(nombre,edad,raza){
        super(nombre,edad);
        this._raza=raza;
    }
}

console.log(Perro.cola)
console.log(Perro.saludo())
console.log(Perro.contadorMascota);

let perro1 = new Perro('Rufus',5,'Dalmata');

console.log(Perro.contadorMascota)