
/* (1ro) Importamos la Función que retorna el boton desde el Módulo */



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


                let selectorDinamico = document.createElement("select");

                let opcion1 = document.createElement("option");
                opcion1.value = "CATAMARCA";
                opcion1.textContent = "CATAMARCA"

                let opcion2 = document.createElement("option");
                opcion2.value = "LARIOJA";
                opcion2.textContent = "LA RIOJA";

                let opcion3 = document.createElement("option");
                opcion3.value = "SANJUAN";
                opcion3.textContent = "SANJUAN"

                selectorDinamico.appendChild(opcion1);
                selectorDinamico.appendChild(opcion2);
                selectorDinamico.appendChild(opcion3);

                idContenedorPrincipal.appendChild(selectorDinamico);


            })
 
    })


    
 