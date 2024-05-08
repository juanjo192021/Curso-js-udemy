//El ?raw me permite utilizar archivos html, ya que espera que importe algo de JavaScript
import html from "./app.html?raw";

/**
 * @param {String} elementId
 */

export const App = (elementId) =>{
    // Función anónima autoinvocada cuando la función App() se llama
    (() =>{
        //Se crea un div
        const app = document.createElement('div');
        //Al div se le añade un h1
        app.innerHTML = html;
        //El elementId define donde se va renderizar los elementos
        document.querySelector(elementId).append(app);
    })();
}