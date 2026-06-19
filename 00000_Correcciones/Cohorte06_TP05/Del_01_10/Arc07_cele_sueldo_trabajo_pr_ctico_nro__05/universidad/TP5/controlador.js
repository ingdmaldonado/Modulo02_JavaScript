
import { fnRecuperarUniversidades} from"./models.js"
import {fnUniversidadToview,fnUniversidadesToviews,frRender}from "./vistas.js"



  window.onload = ()=> {


   const idBtnrecuperar = document.querySelector("#idBtnrecuperar")
   const idSelectorPais=document.querySelector("#idSelectorPais")
   const idCuerpoDeTabla=document.querySelector("#idCuerpoDeTabla")
   const idContador = document.querySelector("#idContador");

    /*
    aqui es cuando estoy haciendo click en el boton recuperar 
   */

   idBtnrecuperar.onclick =async ()=>{
        // aqui saco el pais elegido //
            const paiselegido =Number(idSelectorPais.value);
            // esto me devuelve un lisatdo de universidades //

            console.log(paiselegido);
            //aqui me devuelve un listado de universidades //
           
           const datos= await fnRecuperarUniversidades(paiselegido);
            // aqui estoy mostrando todas las universidades //


           console.log(datos);
           // aqui le estoy diciendo que me muestre la primera universidad que esta en la posicion 0 del listado //
 
         console.log (datos[0]);

         //LO QUE FALTA AGREGAR IRÍA JUSTO AQUÍ:
         const nombrePais = idSelectorPais.options[idSelectorPais.selectedIndex].text;
         idContador.innerHTML = `<p style="font-size: 1.1rem; color: #1d3557; margin-bottom: 15px; font-weight: 500; text-align: center;">Se encontraron <strong>${datos.length}</strong> universidades en <strong>${nombrePais}</strong>.</p>`;

         //aqui le estoy pasando una sola universidad /
         const fila= fnUniversidadToview(datos[0]);
         console.log(fila);

         //aqui le paso todas las universidades Y delvolviendolas en filas //
          const filas=fnUniversidadesToviews(datos);
          console.log(filas)
          //lo unico que me falta , es invocar a la funcion que renderiza las views//

          frRender(filas,idCuerpoDeTabla);
        }

    










}