//Primitivos : Es una informacion que no es un objeto y son inmutables

/* 

Boolean : true, false
Null : Sin valor en lo absoluto
Undefined : Una variable no declarada que aún no se le asigna un valor
Number : int, float , etc
String : Una cadena de caracteres 
Symbol : Es un valor unico que no es igual a ningun otro valor

*/

let nombre = 'Peter Parker';
console.log(nombre);

nombre = 'Ben Parker';
console.log(nombre);

nombre = "Tía May";
console.log(typeof nombre);

nombre = 123;
console.log(typeof nombre);

let esMarvel = false;
console.log(typeof esMarvel);

let edad = 33;
console.log(typeof edad);

edad = 33.0001;
console.log(typeof edad);

let superPoder;
console.log(typeof superPoder);

let soyNull = null;
console.log(typeof soyNull);

let symbol1 = Symbol('a');
let symbol2 = Symbol('a');

console.log(typeof symbol1);

console.log( symbol1 === symbol2); 