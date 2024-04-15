
const fher = {
    nombre : 'Juan',
    edad : 20,
    imprimir(){
        console.log(`Nombre: ${ this.nombre } - edad : ${this.edad}`);
    }
}

const pedro = {
    nombre : 'Pedro',
    edad : 20,
    imprimir(){
        console.log(`Nombre: ${ this.nombre } - edad : ${this.edad}`);
    }
}

function Persona(nombre, edad) {
    console.log('Se ejecuto esta linea');

    this.nombre = nombre;
    this.edad = edad ;

    this.imprimir = function(){
        console.log(`Nombre: ${ this.nombre } - edad : ${this.edad}`);
    }
}

const maria = new Persona('María', 18);
const melissa = new Persona('Melissa', 20);
const juan = new Persona('Juan', 21);
console.log( maria );
maria.imprimir();
melissa.imprimir();
juan.imprimir();