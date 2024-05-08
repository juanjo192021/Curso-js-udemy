import { buscarHeroeAsync, buscarHeroe } from "./promesas";

const heroesIds = ['capi', 'iron', 'spider'];
const heroesPromesas = heroesIds.map(buscarHeroe);
//const heroesPromesas = heroesIds.map( id => buscarHeroe(id));

export const obtenerHeroesArr = async() =>{

    return await Promise.all (heroesIds.map(buscarHeroe));
    // const heroesArr = [];

    // for( const id of heroesIds ){

    //     heroesArr.push(buscarHeroe(id));

    // }

    // return await Promise.all( heroesArr );
};

export const obtenerHeroeAwait = async( id ) =>{
    try{
        const heroe = await buscarHeroeAsync(id);
        return heroe;
    }catch(err){
        console.log("CATCH !!");
        //throw(err);
        return{
            nombre: "Sin nombre",
            poder : "Sin poder"
        };
    }
}

export const heroesCiclo = async() =>{
    console.time("HeroesCiclo");

    const heroes = await Promise.all( heroesPromesas );



    // for await( const heroe of heroesPromesas){
    //     console.log(heroe);
    // }


    //heroes.forEach( heroe => console.log(heroe));
    //console.log(heroes);
    console.timeEnd("HeroesCiclo");
    
}

export const heroeIfAwait = async( id ) =>{
    if( (await buscarHeroeAsync(id)).nombre === 'Iron-man'){
        console.log("Es el mejor de todos");
    }else {
        console.log("Naa");
    }

};