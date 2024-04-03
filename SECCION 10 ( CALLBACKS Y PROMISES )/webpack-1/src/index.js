// import { obtenerHeroesArr, obtenerHeroeAwait } from "./js/await";

import { heroeIfAwait, heroesCiclo } from './js/await';
import './styles.css';

// console.time("await");

// obtenerHeroeAwait( "capi2 ")
//     .then(heroe =>{
//         console.log( heroe );
//         console.timeEnd( "await" );
//     }).catch( console.warn );

heroesCiclo();
heroeIfAwait('iron');