
//Objeto literal u objeto=> let personaje = {}

let personaje = {

//    llave : valor de la llave

    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false ,
    edad: 40,
    coords :{
        lat: 34.034,
        lng: -118.70
    },
    traje: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    //Cuando desea agregar guiones(-) al nombre variable
    'ultima-pelicula': 'Infinity War'
};

console.log(personaje);

// console.log('Nombre: ',nombre de la variable del objeto.propiedades del objeto);

console.log('Nombre: ',personaje.nombre);

//Otra manera de imprimir lo anterior  

console.log('Nombre: ',personaje['nombre']);
console.log('Edad: ', personaje.edad);

console.log('Coors: ', personaje.coords);
console.log('Lat: ', personaje.coords.lat);

console.log('No. Trajes: ', personaje.traje.length);
console.log('Último traje:', personaje.traje[personaje.traje.length-1]);

const x = 'vivo';
console.log('Vivo :' , personaje[x]);

console.log('Ultima pelicula :',personaje['ultima-pelicula']) 