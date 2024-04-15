
//Funciones tradicionales : function nombreDeFuncion (nombreDeArgumento) 
function saludar( nombre ){
    console.log(arguments);
    console.log('Hola '+ nombre);
    return [1,2,3];

    //Esto nunca se va a ejecutar, ya que estas después del return
     console.log('Soy un código que está después del return')

}

/*
Funcion anonima

function( nombre ){
    console.log('Hola ' + nombre);
}

*/

const saludar2 = function( nombre ){
    console.log('Hola ' + nombre);
}

// Funcion de flecha

const saludarFlecha = () =>{
    console.log('Hola flecha');
}

const saludarFlecha2 = ( nombre ) =>{
    console.log('Hola ' + nombre);
}

saludar('Juan José', 40 , true, 'Costa Rica');
//saludar2('Fernando');
saludarFlecha();
saludarFlecha2('Woody y Jake');
