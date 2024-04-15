let a = 10;
let b = a;

a = 30;

console.log({a , b});

//-------------------------------------------------

let juan = { nombre: 'Juan' };

// ... : Operador spreed significa separa los elementos y romper la referencia

let ana = {...juan};
ana.nombre = 'Ana';

console.log({ juan, ana });

//-------------------------------------------------

const cambiaNombre = ({...persona}) => {
     persona.nombre = ' Tony';
     return persona;
}

let peter = { nombre: 'Peter'};
let tony = cambiaNombre( peter);

console.log({ peter, tony});

//-------------------------------------------------

const frutas = ['Manzana', 'Pera', 'Piña'];

//const otrasFrutas = [...frutas];

//slice sirve para cortar el arreglo

console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');


console.time('spread');//mas rapido al ejecutarse
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');


otrasFrutas.push('Mango');

console.table({frutas, otrasFrutas});
//-------------------------------------------------