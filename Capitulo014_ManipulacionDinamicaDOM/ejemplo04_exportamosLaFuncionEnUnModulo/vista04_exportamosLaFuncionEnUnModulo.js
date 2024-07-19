
/* 
    En este ejemplo, que proviene del anterior, lo que vamos realizar
    es a la función que se encargaba de "encapsular" la lógica que
    devuelve la función, es cargarla en un módulo y exportarla por defecto
*/

/* (1ro) Importamos la Función que retorna el boton desde el Módulo */
import fnBotonDinamico from "./fnBotonDinamico.js";

window.addEventListener("load",()=>
    {

        console.log("aplicación funcionando");

        /* capturamos los elementos que están en la vista y los vinculamos
        a traves de sus respectivas constantes */

        const idBtnCrearBotonDinamico = document.querySelector("#idBtnCrearBotonDinamico");
        const idContenedorPrincipal = document.querySelector("#idContenedorPrincipal");

        /* Al boton que ya estaba originalmente en el HTML le delegamos el comportamiento click */

        idBtnCrearBotonDinamico.addEventListener("click",()=>
            {
                for(let i = 1;i <= 100;i++)
                {

                    let BotonDinamico = fnBotonDinamico(i); // Esta función retorna el Boton creado y le paso como parametro i, para que se distingan los botones
                
                    /* (5to) Agregamos el elemento creado al contenedor div */
                    idContenedorPrincipal.appendChild(BotonDinamico);
                }
            })
    })


    
 