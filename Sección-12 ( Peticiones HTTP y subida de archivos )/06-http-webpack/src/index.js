
// const jokeUrl = "https://api.chucknorris.io/jokes/random";


//import { obtenerUsuarios } from "./js/http-provider";

//import { init } from "./js/usuarios-page";
// ii import { init } from "./js/chiste-page";

//import { obtenerChiste } from "./js/http-provider";

/* fetch( jokeUrl ). then ( resp =>{
    resp.json(). then ( ({id , value}) =>{
        console.log( id );
        console.log( value );
    });
}); */
    
/* fetch( jokeUrl )
    .then( resp => resp.json())
    .then(({ id, value}) =>{
        console.log(id, value);
    }); */
    
/* obtenerChiste().then( console.log);
    
init();
    
obtenerUsuarios(). then(console.log);
    
import * as CRUD from "./js/crud-provider";
    
CRUD.getUsuario(3).then(console.log);
CRUD.crearUsuario({
    name: "Juan",
    job: "FrontEnd"
}).then(console.log);
CRUD.modificarUsuario(1, {
    name: "Carlitos",git
    job: "BackEnd"
}).then(console.log);
CRUD.borrarUsuario().then(console.log); */

import { init } from "./js/archivos-page";
            
init();