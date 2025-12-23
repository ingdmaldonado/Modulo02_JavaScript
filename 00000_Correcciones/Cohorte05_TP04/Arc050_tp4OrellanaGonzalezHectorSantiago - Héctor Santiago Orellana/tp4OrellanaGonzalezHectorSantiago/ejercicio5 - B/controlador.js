// en este sector invoco las diferentes cohortes desde  datos.js//
import { cohorte01,cohorte02,cohorte03,cohorte04 } from "./datos.js";
// en este sector invoco la función fnRecorrerCohorteV3  que recorre las diferentes cohortes desde modulo.js//
import {fnRecorrerCohorteV3} from "./modulo.js"

window.onload=()=>{

  /* aqui levanto los diferentes datos a traves de su id que deseo capturar*/


  const idCodigoDni =document.querySelector("#idCodigoDni");
  
  const idBtnfind=document.querySelector("#idBtnfind");
  

  //*********Bloque de Código para Unificación de los Vectores de las diferentes Cohortes*******/

  // realizo un console.log para aegurarme de que la aplicación esta funcionando//
    console.log(`APLICACIÓN ALTA DE CREDENCIAL `);

    // en este sector realizo la unificación de los vectores de las distintas cohortes//
    // creo un constante que contiene la unificación de las diferentes cohortes//

    const Unificacion=[...cohorte01,...cohorte02,...cohorte03,...cohorte04];  

  //********************************************************************************************///
/* aqui le doy funcionamiento al boton idBtnfind a traves de la función onclik, en el cuerpo de la arrow fuction se creo una constante que contendra el dato capturado que ingreso el usuario*/
 idBtnfind.onclick=()=>{

  const codigodedni = idCodigoDni.value;
/* aqui visualizo el codigo de dni ingresado por el usuario*/
  console.log(codigodedni);

  /* aqui se creo la constante contenedora de la Unificación de las Cohortes que sera recorrida por el metodo find */
  const dniEncontrado= Unificacion.find((alumno,indice)=>{
   /* aqui se pregunta si el dato ingresado por el usuario es igual al alumno. en su atributo.dni, de cumplirse con esta condicios de da un valor de verdad true, de lo contrario el valor sera false*/ 
   
    if (alumno.dni === codigodedni) 
    {
      return true;
    }

    else
      {
        return false;
      }

  });
  /* aqui visualzo el resultado otenido*/

  console.log(dniEncontrado);
  

 };

};
 

  

    
