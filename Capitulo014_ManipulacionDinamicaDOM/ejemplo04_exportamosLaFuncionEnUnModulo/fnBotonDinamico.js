
/* 
    Esta función se encargará de crear el Boton y devolverlo.
    la persona que desee un boton deberá invocarla y pasarle como parametro
    el número de boton, como para que se distingan unos de otros.
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

export default fnGeneraBotonDinamico;

