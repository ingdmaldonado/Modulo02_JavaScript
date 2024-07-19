
/* (1ro) Importamos la Función que retorna el boton desde el Módulo */
import fnDevuelveSelector from "./fnDevuelveSelector.js";


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
                alert("me estan haciendo click");

                idContenedorPrincipal.appendChild(fnDevuelveSelector("ARGENTINA","BRASIL","URUGUAY","PARAGUAY"));


            })
 
    })

    
 