
class Persona {

    static _conteo = 0;
    //Esto es un metodo
    static get conteo(){
        return Persona._conteo + ' instancias';
    }    
    static mensaje(){
        console.log( this.nombre);
        console.log( 'Hola soy un metodo estatico' );        
    }
    nombre = '';
    codigo = '';
    frase  = '';
    comida = '';
    //constructor : metodo que se ejecuta al momento de crear una instacia
    //Siempre retorna los valores de la instancia
    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo',frase ='Sin frase'){
        //console.log('Hola!');
        
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }

    set setComidaFavorita( comida ){
        this.comida = comida.toUpperCase();
    }
    get getComidaFavorita(){
        return `La comida favorita ${ this.nombre } es ${this.comida}`;
    }

    //Simple metodo
    quienSoy(){
        console.log(`Soy ${ this.nombre } y mi identidad es ${ this.codigo }`);
    }

    miFrase(){
        this.quienSoy();
        console.log(`${ this.codigo } dice : ${ this.frase }`);
    }
}

const spiderman = new Persona('Peter Parker', 'Spider', 'Soy tu amante el Pedro Parkersh');
const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy el pinshi Ironman');
//console.log( ironman);


spiderman.miFrase();
//ironman.miFrase();

spiderman.setComidaFavorita = 'El pie de cereza de la Tía May';
//spiderman.nemesis = 'Duende Verde';

// console.log( spiderman.getComidaFavorita);

//console.log( spiderman );

//Persona._conteo = 2;
console.log('Conteo estatico : ', Persona._conteo);
console.log( Persona.conteo);
Persona.mensaje();

Persona.propiedaExterna = 'Hola mundo';
console.log( Persona );