//Funciones tradicionales : function nombreDeFuncion (nombreDeArgumento) 
function saludar( nombre ){
    console.log(arguments);
    console.log('Hola '+ nombre);
    return [1,2,3];

    //Esto nunca se va a ejecutar, ya que estas después del return
     console.log('Soy un código que está después del return')

}

const retornoDeSaludar = saludar('Juan José', 40 , true, 'Costa Rica');

console.log(retornoDeSaludar);

console.log(retornoDeSaludar[0], retornoDeSaludar[1]);

//Funcion tradicional

function sumar( a,b ){
    return a + b;
}

//Funcion con flecha que solo devuelve el return

const sumar2 = (a,b) => a + b;


function getAleatorio(){
    return Math.random();
}

const getAleatorio2 = () => Math.random();

console.log( getAleatorio () );
console.log( getAleatorio2() );

console.log( sumar(1,2) );
console.log( sumar2(1,2) );
