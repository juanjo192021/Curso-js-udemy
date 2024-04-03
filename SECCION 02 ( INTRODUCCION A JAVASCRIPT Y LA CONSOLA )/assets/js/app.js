
//alert('Hola desde app.js');

console.log("Hola mundo");
// let: declarar variables que pueden variar
let a = 10, 
    b = 20, 
    c = 'Hola ', 
    d = 'Spiderman', 
    x = a + b;

// const : variable que nunca cambian
//SALUDO : Se utliza en mayuscula cuando son variable de entorno

const saludo = c + d;

console.log(x);
console.warn(x);
console.error(x);

console.log( 'a', a );
console.log( 'b', b );
console.log( 'c', c);

console.log('%c Mis variables', 'color:blue; font-weight: bold');
console.log({a});
console.log({b});
console.log({c}); 

c = 'Hola de nuevo';

console.table({a,b,c,d});

/* const outerWidth= 1000000;
let outerHeight = 600; */

let miNuevoNombre = 'Juan José';