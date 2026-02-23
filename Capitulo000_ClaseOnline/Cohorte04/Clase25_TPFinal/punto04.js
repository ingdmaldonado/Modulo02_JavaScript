// funciones del modelo
import {fnRecuperarPaisesDelocalStorage} from "./modelo/funcionesdelmodelo.js";

// funciones de la vista
import {fnRenderizarPaises2} from "./vista/funcionesDeLaVista.js";


window.addEventListener("load",()=>
{
    console.log("applicatio is running");
    const idRecuperarPaises = document.querySelector("#idRecuperarPaises");

    idRecuperarPaises.addEventListener("click",()=>
        {
            /* el codigo lo voy a poner de una manera mas legible */

            /* Momento 2 - momento de la Invocación */
            let paises = fnRecuperarPaisesDelocalStorage();

            /* Momento 2 - momento de la Invocación */
            fnRenderizarPaises2(paises);

            console.log(paises);
        })
})


/* MODULO => es tener un archivo.js que a dentro
contenga funciones, constantes, vectores. ... */

/* MODULO => 

    export ...

*/

/* PATRON DE DISEÑO SOFTWARE => MODELO VISTA CONTROLADOR 

    VISTA => HTML (punto04.html), CSS (punto04.css), 

    CONTROLADOR => 

        - punto04.js

    MODELO => sería un modulo donde debería acomodar
    las funciones que se encargan de la manipulación
    de los datos (llevar y traer). lógica de la aplicación

    CONTROLADOR => sería un modulo donde debería tener
    las funciones que se encargan de manipular datos o
    cosas del DOM

    VISTA (Dinamica) => sería un modulo que debería
    contener todas las funciones que se encargan 
    de renderizar el DOM


    CONTROLADOR => Invoca a la función del modelo

    MODELO => contiene la función definida que se encarga de recuperar los paises

    CONTROLADOR => tomar los resultados de la ejecución de la función
        e invocar una función de la VISTA que dibuje esos paises.

    


*/