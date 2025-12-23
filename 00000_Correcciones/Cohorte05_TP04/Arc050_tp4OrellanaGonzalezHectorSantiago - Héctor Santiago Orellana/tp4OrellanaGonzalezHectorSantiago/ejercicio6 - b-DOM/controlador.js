// en este sector invoco las diferentes cohortes desde  datos.js//
import { cohorte01,cohorte02,cohorte03,cohorte04 } from "./datos.js";
// en este sector invoco la función fnRecorrerCohorteV3  que recorre las diferentes cohortes desde modulo.js//
import {fnRecorrerCohorteV3} from "./modulo.js"

window.onload=()=>{

/* aqui levanto los diferentes datos que ingreso el usuario y deseo capturar*/
 const idBtReduce= document.querySelector("#idBtReduce"); 


 /* aqui con el boton ingresar capturo los datos que el usuario ingreso por la Pantalla
  para ello utilizo la opción onclick  y disparo la arrow fuction, en el cuerpo de la arrow fuction coloco los atributos y valores de cada uno de ellos*/
  idBtReduce.onclick=()=>{

   console.log(`La Cantidad de Alumnos Aprobados Es: ${contadorAprovado}`);
    
  };


  //*********Bloque de Código para Unificación de los Vectores de las diferentes Cohortes*******/

  // realizo un console.log para aegurarme de que la aplicación esta funcionando//
    console.log(`La Aplicación Cuenta la Cantidad de Alumnos Aprobados`);

    // en este sector realizo la unificación de los vectores de las distintas cohortes//
    // creo un constante que contiene la unificación de las diferentes cohortes//

    
    const Unificacion=[...cohorte01,...cohorte02,...cohorte03,...cohorte04];
      
    /* aqui creo la variable que contenga la unificacion de vectores, seguidamente aplica el metodo Reduce, despues disparo la Arrow Fuction Aplicando el Operador Ternario*/
      let contadorAprovado=Unificacion.reduce((contador,alumno)=> {

        return alumno.nota_final > 5 ? contador +1 : contador; 
      }
        
      ,0); 
    
    // aqui realizo  console.log, para poder diferenciar los distintos resultados//
    console.log(`******Resultado Obtenido de la Unión de las Diferentes Cohortes******`);

    // aqui llamo a la función recorrer cohorte versión 03 y le paso los valores de la unificación//
    fnRecorrerCohorteV3(Unificacion);  
 
};