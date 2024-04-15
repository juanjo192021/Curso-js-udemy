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
    //Padre 1
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
    //Padre 2
    quienSoy(){
        console.log(`Soy ${ this.nombre } y mi identidad es ${ this.codigo }`);
    }

    miFrase(){
        this.quienSoy();
        console.log(`${ this.codigo } dice : ${ this.frase }`);
    }
}

class Heroes extends Persona{
    clan = 'sin clan';
    //Hijo 1
    constructor(nombre, codigo, frase){
        super(nombre, codigo, frase);
        this.clan = 'Los Avengers';
    };
    //Hijo 2
    quienSoy(){
        console.log(`Soy ${ this.nombre } , ${ this.clan }`);
        super.quienSoy();

    }
}
const spiderman = new Heroes('Peter Parker', 'Spider', 'Soy tu amante el Pedro Parkersh');
//const spiderman = new Heroes();
console.log( spiderman );
spiderman.quienSoy();
