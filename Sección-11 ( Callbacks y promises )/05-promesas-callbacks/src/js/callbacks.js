const heroes = {
    capi : {
        nombre: 'Capitan America',
        poder: 'Aguantar inyecciones'
    },
    iron : {
        nombre: 'Iron-man',
        poder: 'Tener harta facha y platita'
    },
    spider : {
        nombre: 'Spider-man',
        poder: 'Ser desarrollado por el duende verde'
    },

}

export const buscarHeroe = ( id, callback) =>{
    
    const heroe = heroes[id];
    if( heroe ){
        callback(null, heroe );
    }else{
        callback(`No existe un heroe con el id ${id}`);
    }

    //callback( heroe );

};