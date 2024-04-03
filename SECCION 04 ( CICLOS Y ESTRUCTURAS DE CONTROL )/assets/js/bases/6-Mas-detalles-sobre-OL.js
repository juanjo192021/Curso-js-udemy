
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
    
    //Más detalles sobre objetos literales
     
    //delete para borrar propiedades de un objeto

    delete personaje.edad;
    console.log( personaje );
    
    personaje.casado = true;
    
    //Objetc.entries(nombre del objeto) : Para transformar en un arreglo las propiedades de un objeto, formando parejas de 2 en 2

    const entriesPares = Object.entries(personaje);
    console.log(entriesPares);
    
    //const => no se puede modificar la cadena principal, pero las cadenas secundarias si se pueden
    //ej: Si a un " const personaje{...} " se le desea asignar " PERSONA = 123 ", no se podra , pero si se podra un "PERSONA.EDAD = 20" 
    
    //Object.freeze : Sirve para congelar el objeto hasta ese momento, al agregar porpiedades no apareceran en el objeto
    //                pero si se puede cambiar a los objetos dentro de otros objetos
    
    Object.freeze(personaje);
    
    //Esto no aparecera en el objeto
    
    personaje.dinero = 100000000;
    personaje.casado = false;
    personaje.direccion.ubicacion = 'Costa Rica';
    console.log(personaje);
    
    //Object.getOwnPropertyNames( nombre del objeto ) : Un listado de todas las propiedades que tiene el objeto en forma de arreglo
    
    const propiedades = Object.getOwnPropertyNames(personaje);
    
    //Object.values( nombre del objeto) : Un listado de los valores del objeto en forma de arreglo

    const valores = Object.values(personaje);
    
    
    console.log(propiedades);
    console.log(valores);
    