

/* 
    En este ejemplo, vamos a "encapsular" la lógica que 
    genera el boton, dentro de una función para que devuelve
    el boton.
        Es decir, la función es la encargada de devolver el boton
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

                for(let i = 1;i <= 100;i++)
                {

                    let BotonDinamico = fnGeneraBotonDinamico(i); // Esta función retorna el Boton creado y le paso como parametro i, para que se distingan los botones
                
                    /* (5to) Agregamos el elemento creado al contenedor div */
                    idContenedorPrincipal.appendChild(BotonDinamico);
                }
            })
    })


    /* Esta función se encargará de crear el Boton y devolverlo.
    la persona que desee un boton deberá invocarla y pasarle como parametro
    */

    const fnGeneraBotonDinamico = (numeroBoton)=>
        {
               /* (1ro) creamos un elemento HTML del tipo INPUT */
               let BotonDinamico = document.createElement("input");

               /* (2do) modificamos sus propiedades */
               BotonDinamico.type ="button"; // le cambio la propiedad type
               BotonDinamico.value = `Soy un Boton Generado por programacion ${numeroBoton}`; // le cambio el value
               BotonDinamico.className ="botonDinamico"; // le asigno una clase

               /* (3ro) le invento un atributo en el HTML. esto es util para CSS y también
               para distinguirlos a los botones mediante un atributo */

               BotonDinamico.setAttribute("unAtributoInventado","esteEsElValorDelAtributo");

               /* (4to) le agregamos comportamiento, delegación del evento click */
               BotonDinamico.addEventListener("click",()=>{
                   alert(`Soy el Boton ${numeroBoton}`);
               })

               return BotonDinamico;

        }