
import {fnClickRecuperar} from "./controlador.js";

window.addEventListener("load",()=>
    {
        console.log("una sola vez");

        const idBtnRecuperar = document.querySelector("#idBtnRecuperar");

        idBtnRecuperar.addEventListener("click",fnClickRecuperar);
        
        /* todo lo que sea interacción con el DOM
        y las funciones que responden a los eventos
        del DOM las vamos a cargar en un archivo
        que se llame "controlador" */

        /* Todas las funciones que se encarguen
        de dibujar y/o renderizar o eliminar 
        elementos del DOM se van a llamar vista */

        /* Todas las funciones que se encarguen
        de recuperar datos desde APIs.

            - interactuar con las APIS
            - enviar datos a APIS propias y/o de terceros

        modelo => 
        */


    })


    /* 
    
        1ro) index.js => 2do) controlador.js => 3ro) modelo.js 
    
    */
