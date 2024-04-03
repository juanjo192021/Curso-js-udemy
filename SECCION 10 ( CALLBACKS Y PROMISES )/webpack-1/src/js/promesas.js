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

export const buscarHeroe = (id) => {

    const heroe = heroes[id];

    // new Promise ()
    return new Promise( ( resolve, reject) => {
        if( heroe ){
            setTimeout(() => resolve( heroe), 1000);
        } else{
            reject(`No existe un heroe con el id ${id}`);
        }
    });
}

export const buscarHeroeAsync = async(id) => {

    const heroe = heroes[id];

    // new Promise ()
    if( heroe ){
        return heroe;
    } else{
        throw `No existe un heroe con el id ${id}`;
    }

}

const promesaLenta = new Promise((resolve, reject) =>{
    setTimeout(() => resolve('Promesa Lenta'), 2000);
});
const promesaMedia = new Promise((resolve, reject) =>{
    setTimeout(() => resolve('Promesa Media'), 1500);
});
const promesaRapida = new Promise((resolve, reject) =>{
    setTimeout(() => resolve('Promesa Rapida'), 1000);
});

export{
    promesaLenta,
    promesaMedia,
    promesaRapida
}