
alert('Hola mundo');

// prompt(parametros, string por defecto):
//let nombre = prompt('¿Cual es tu nombre?', 'Juan José Pérez Lazarte');

let nombre = prompt('¿Cual es tu nombre?');
//string vacio: cuando no se ingresan datos
console.log(nombre);

//si el usuario cancela se autocompleta con null
console.log('*****' + nombre + '*****');

const respuesta = confirm('¿Esta seguro de borrar esto?')
console.log(respuesta);