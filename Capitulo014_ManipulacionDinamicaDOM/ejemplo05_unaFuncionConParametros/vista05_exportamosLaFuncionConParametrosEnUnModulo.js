
/* (1ro) Importamos la Función que retorna el boton desde el Módulo */

import fnBotonDinamico from "./fnBotonDinamico.js";

/* 
    En este ejemplo. lo que vamos a hacer es repetir 100 veces
    el código del ejemplo anterior. para que se generen 100 botones
    con su respectivo comportamiento.

    Es la misma lógica anterior, nada mas que repetida 100 veces.


    dentro de la lógica del botón estático lo que hacemos es 

        1ro) crear un elemento HTML 
        2do) modificarle sus propiedades
        3ro) Agregamos Comportamiento al boton dinámico
        4to) Lo agregamos a algún elemento del DOM

*/

const fnEventoDelegado = ()=>
    {
        alert("este será el click del botón");
    }

    

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

                alert("estamos entrando");
                for(let i = 1;i <= 100;i++)
                {

                    let BotonDinamico = fnBotonDinamico(i,"Boton Dinamico",fnEventoDelegado); // Esta función retorna el Boton creado y le paso como parametro i, para que se distingan los botones
                
                    /* (5to) Agregamos el elemento creado al contenedor div */
                    idContenedorPrincipal.appendChild(BotonDinamico);
                }
            })
    })


    
 