
/* 
    Esta función se encargará de crear el Boton y devolverlo.
    la persona que desee un boton deberá invocarla y pasarle como parametro
*/



export default (numeroBoton,tituloBoton,fnEventoDelegado)=>
    {
           /* (1ro) creamos un elemento HTML del tipo INPUT */
           let BotonDinamico = document.createElement("input");

           /* (2do) modificamos sus propiedades */
           BotonDinamico.type ="button"; // le cambio la propiedad type
           BotonDinamico.value = `${tituloBoton} - ${numeroBoton}`; // le cambio el value
           BotonDinamico.className ="botonDinamico"; // le asigno una clase

           /* (3ro) le invento un atributo en el HTML. esto es util para CSS y también
           para distinguirlos a los botones mediante un atributo */

           BotonDinamico.setAttribute("unAtributoInventado","esteEsElValorDelAtributo");

           /* (4to) le agregamos comportamiento, delegación del evento click */
           BotonDinamico.addEventListener("click",fnEventoDelegado);

           return BotonDinamico;
    }