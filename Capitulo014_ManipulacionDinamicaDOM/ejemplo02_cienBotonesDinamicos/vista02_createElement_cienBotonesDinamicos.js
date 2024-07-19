

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

                /* aqui realizamos un ciclo repetitivo para generar 100 botones */
                for(let i = 1;i <= 100;i++)
                {
                    /* (1ro) creamos un elemento HTML del tipo INPUT */
                    let BotonDinamico = document.createElement("input");

                    /* (2do) modificamos sus propiedades */
                    BotonDinamico.type ="button"; // le cambio la propiedad type
                    BotonDinamico.value = `Soy un Boton Generado por programacion ${i}`; // le cambio el value
                    BotonDinamico.className ="botonDinamico"; // le asigno una clase

                    /* (3ro) le invento un atributo en el HTML. esto es util para CSS y también
                    para distinguirlos a los botones mediante un atributo */

                    BotonDinamico.setAttribute("unAtributoInventado","esteEsElValorDelAtributo");

                    /* (4to) le agregamos comportamiento, delegación del evento click */
                    BotonDinamico.addEventListener("click",()=>{

                        alert(`Soy el Boton ${i}`);

                    })
                
                    /* (5to) Agregamos el elemento creado al contenedor div */
                    idContenedorPrincipal.appendChild(BotonDinamico);
                }
            })
    })

    