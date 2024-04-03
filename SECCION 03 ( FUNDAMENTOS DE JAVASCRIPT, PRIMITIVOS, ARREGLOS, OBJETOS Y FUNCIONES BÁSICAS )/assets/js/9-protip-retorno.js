/*

Esto es igual 

function crearPersona( nombre, apellido){
    return {
        nombre: nombre,
        apellido : apellido
    }
}

a esto

function crearPersona( nombre, apellido){
    return {nombre,apellido}
}
*/

const crearPersona = ( nombre, apellido) => ({nombre,apellido});

const persona =  crearPersona(' Juan José' , ' Pérez');
console.log( persona);

//----------------------------------------------------------

function imprimeArgumentos(){
    console.log( arguments);
}


imprimeArgumentos(10, true, false , 'Fernando' , ' Hola');

//----------------------------------------------------------

// ... : Rest sirve para crear un arreglo del argumento ingresado, despues del rest no puede ir ningun otro valor

const imprimeArgumentos2 = ( edad, ...args ) =>{
    //console.log(args);
    //console.log({edad, args});
    return args;
}

//----------------------------------------------------------

const argumentos = imprimeArgumentos2(10, true, false , 'Fernando' , ' Hola');
console.log({argumentos});


const [casado, vivo, nombre, saludo ] = imprimeArgumentos2(10, true, false,'Fernado', 'Hola');

//El 10 de edad no aparecera, ya que aparece en const imprimeArgumentos2

console.log({ casado, vivo, nombre, saludo });

//----------------------------------------------------------

//Cuando solo me interesa el apellido y a la vez renombrarlo

const {apellido : nuevoApellido} = crearPersona('Fernando' , 'Herrera');
console.log({ nuevoApellido });

//----------------------------------------------------------

//Estructuracion de elementos

const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    traje: ['Mark I', 'Mark V', 'Hulkbuster'],
};

//Método A :

const imprimePropiedades = (personaje) =>{

    console.log('nombre',personaje.nombre);
    console.log('codeName',personaje.codeName);
    console.log('vivo',personaje.vivo);
    console.log('edad',personaje.edad);
    console.log('traje',personaje.traje);

}

//Método B :

const imprimePropiedades2 = ({nombre, codeName, vivo, edad = 15, traje }) =>{

    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({traje});

}

imprimePropiedades( tony );
imprimePropiedades2( tony );