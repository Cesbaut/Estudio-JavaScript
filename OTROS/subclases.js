class Player{
    constructor(nombre,colorSombrero){
        this._nombre=nombre;
        this._colorSombrero=colorSombrero
    }
    saltar(){}
    correr(){}
    saludar(){}
    get nombre(){
        return this._nombre;
    }
    set cambiarNombre(nuevoNombre){
        this._nombre=nuevoNombre;
    }

}

let mario = new Player('mario','rojo');
let luigi = new Player('Luigi', ' verde')

console.log(mario.nombre)
console.log(luigi._colorSombrero)


//Clase heredada
class Pet extends Player{
    constructor(nombre,colorSombrero,colorPiel){
        super(nombre, colorSombrero);
        this._colorPiel=colorPiel;
    }
    get colorPiel(){
        return this._colorPiel
    }
    set colorPiel(nuevoCOlorPIel){
        this._colorPiel=nuevoCOlorPIel;
    }
    comer(){
        return 'Yo como manzanas';
    }

}

let pet1 = new Pet('Yoshi','Invisible','Verde');
pet1.cambiarNombre = 'Pepito';
console.log(pet1.nombre);
console.log(pet1.comer())