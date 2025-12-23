// en este sector invoco las diferentes cohortes desde  datos.js//
import { cohorte01,cohorte02,cohorte03,cohorte04 } from "./datos.js";
// en este sector invoco la función fnRecorrerCohorteV3  que recorre las diferentes cohortes desde modulo.js//
import {fnRecorrerCohorteV3} from "./modulo.js"

window.onload=()=>{

/* Aqui creo las constantes para capturar los elementos a visualizar en el DOM*/

  const idBtCohortes01020304 = document.querySelector("#idBtCohortes01020304"); 
  const idBtCohortes01y04 = document.querySelector("#idBtCohortes01y04");

  // realizo un console.log para aegurarme de que la aplicación esta funcionando//
    console.log(`Aplicación de las Notas Obtenidas por los Alumnos del Nodo`);

    // en este sector realizo la unificación de los vectores de las distintas cohortes//
    // creo un constante que contiene la unificación de las diferentes cohortes//
    const Unificacion=[...cohorte01,...cohorte02,...cohorte03,...cohorte04];
 

    //   una vez  creado el boton que me permite capturar los datos de las diferentes cohortes, se utiliza la funcion Onclick, y en el cuerpo de la arrow fuction coloco que lo que desea que se realize cuando se haga click en este boton //

    idBtCohortes01020304.onclick=()=>{

    console.log(`Muestra el Resultado de todas las Diferentes Cohortes`);
   
   fnRecorrerCohorteV3(Unificacion);
  };
    
   
// en este sector se llamo a la función recorrer cohorte versión 03 y se le asigno valor de los vector cohorte01 y el vector cohorte04//

idBtCohortes01y04.onclick=()=>{

   console.log(`Muestra el Resultado de las Cohortes1 y Cohortes4 `);
  
    fnRecorrerCohorteV3([...cohorte01,...cohorte04]);
  };
  
};