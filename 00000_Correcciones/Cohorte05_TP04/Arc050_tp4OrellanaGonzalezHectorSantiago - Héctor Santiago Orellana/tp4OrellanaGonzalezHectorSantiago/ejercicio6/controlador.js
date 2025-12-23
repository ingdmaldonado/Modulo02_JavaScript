// en este sector invoco las diferentes cohortes desde  datos.js//
import { cohorte01,cohorte02,cohorte03,cohorte04 } from "./datos.js";
// en este sector invoco la función fnRecorrerCohorteV3  que recorre las diferentes cohortes desde modulo.js//
import {fnRecorrerCohorteV3} from "./modulo.js"

window.onload=()=>{

  /* en este sector capturo los datos ingresados por el usuario mediante la función onclick, seguidamente e disparado la arrow fuction y en el cuepo de la arrow Fution visualizo los datos que deseo capturar*/
  idBtReduce.onclick=()=>{

   console.log(`La Cantidad de Alumnos Aprobados Es: ${contadorAprovado}`);
    
  };

  //*********Bloque de Código para Unificación de los Vectores de las diferentes Cohortes*******/

  // realizo un console.log para aegurarme de que la aplicación esta funcionando//

    console.log(`Aplicación Obtener Notas de Diferentes Cohortes `);

    // en este sector realizo la unificación de los vectores de las distintas cohortes//
    // creo un constante que contiene la unificación de las diferentes cohortes//

    const Unificacion=[...cohorte01,...cohorte02,...cohorte03,...cohorte04];
    const totalAlumnos= Unificacion;
   
   // aqui creo la variable contador de Aprobados y empleo el metodo reduce para contar la cantidad de aprovados*/
      let contadorAprovado=Unificacion.reduce((contador,alumno)=>{
        if(alumno.nota_final>5)
        {
          contador=contador+1;
        }

        return contador;

      },0);
    
    // se realizo  console.log, para poder diferenciar los distintos resultados//

    console.log(`******** Resultado Obtenido de la Unión de las Diferentes Cohortes*****`);

    // aqui llamo a la función recorrer cohorte versión 03 y le paso los valores de la unificación//
    fnRecorrerCohorteV3(Unificacion);
 
};