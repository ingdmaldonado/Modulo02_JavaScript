
/* 
    En este ejemplo, tenemos un documento HTML (página)
    que podríamos decir era parte del documento original.
    podriamos decirle HTML estático, porque ya está escrito
    en el documento y se renderizará en el navegador
    apenas el usuario escriba su dirección en el navegador
    y presione enter para recuperar.

    Ese documento HTML tiene

        - 1 (un) boton que le podríamos decir botón estático
        - 1 (un) div le podríamos decir que es un div estático

    dentro de la lógica del botón estático lo que hacemos es 

        1ro) crear un elemento HTML 
        2do) modificarle sus propiedades
        3ro) Agregamos Comportamiento al boton dinámico
        4to) Lo agregamos a algún elemento del DOM (en este caso un div)
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
                /* (1ro) creamos un elemento HTML del tipo INPUT */
                let BotonDinamico = document.createElement("input");

                /* (2do) modificamos sus propiedades */
                BotonDinamico.type ="button";
                BotonDinamico.value = "Soy un Boton Generado por programacion";
                BotonDinamico.className ="botonDinamico";

                /* (3ro) le agregamos comportamiento, delegación del evento click */
                BotonDinamico.addEventListener("click",()=>{

                    alert("soy un boton generado dinámicamente por programación");

                })
                
                /* (4to) Agregamos el elemento creado al contenedor div */
                idContenedorPrincipal.appendChild(BotonDinamico);
            })
    })
