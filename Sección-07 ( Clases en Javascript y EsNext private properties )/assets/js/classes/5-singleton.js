
class Singleton{

    static instancia;
    nombre = '';

    constructor(nombre = ''){
        //console.log(Singleton.instancia);
/*         const a = undefined;
        console.log(a);
        console.log(!a);
        console.log(!!a); */
        if( !!Singleton.instancia){
            return Singleton.instancia;
        }
        Singleton.instancia = this;
        this.nombre = nombre;

        //return this;
    }

}

const instacia1 = new Singleton('Ironman');
const instacia2 = new Singleton('Spiderman');
const instacia3 = new Singleton('Black Panther');

console.log(`Nombre en la instacia1 es : ${instacia1.nombre}`);
console.log(`Nombre en la instacia2 es : ${instacia2.nombre}`);
console.log(`Nombre en la instacia3 es : ${instacia3.nombre}`);