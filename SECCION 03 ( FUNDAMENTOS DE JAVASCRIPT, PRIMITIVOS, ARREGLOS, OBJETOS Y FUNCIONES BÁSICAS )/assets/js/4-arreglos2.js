let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];

console.log('Largo (Length) :', juegos.length);

let primero = juegos[ 0 ];
let ultimo = juegos[ juegos.length-1 ];

console.log({primero,ultimo});

//forEach(valor, indice, array contenedor)

juegos.forEach( (elemento, indice, arr) => {
    console.log({elemento, indice,arr});
});

// push : Para insertar un nuevo metodo al final del arreglo ( funcion )

let nuevaLongitud = juegos.push( 'F-Zero' );
console.log({ nuevaLongitud , juegos })

// unshift : Para insertar un nuevo elemento al inicio del arreglo 

nuevaLongitud = juegos.unshift('Fire Emblem');
console.log({ nuevaLongitud, juegos})

//pop : Elimina el ultimo elemento del arreglo y lo regresa

let juegoBorrado = juegos.pop();
console.log({ juegoBorrado, juegos});

let pos = 1;
console.log(juegos);

//splice : Es un metodo que recibe un punto inicial y cuantos elementos quieres borrar y regresa el arreglo 

let juegosBorrados = juegos.splice( pos, 2);
console.log({ juegosBorrados, juegos }); 

//indexOf(nombre de lo que desea buscar) : indica la posicion  I

let metroidIndex = juegos.indexOf('Metroid');
console.log({metroidIndex});