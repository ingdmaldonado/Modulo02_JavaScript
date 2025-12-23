// en este sector invoco las diferentes cohortes desde  datos.js//
import { cohorte01,cohorte02,cohorte03,cohorte04 } from "./datos.js";
// en este sector invoco la función fnRecorrerCohorteV3  que recorre las diferentes cohortes desde modulo.js//
import {fnRecorrerCohorteV3} from "./modulo.js"

window.onload=()=>{

  //*********Bloque de Código para Unificación de los Vectores de las diferentes Cohortes*******/

  // realizo un console.log para aegurarme de que la aplicación esta funcionando//
    console.log(`El Programa esta funcionando`);

    // en este sector realizo la unificación de los vectores de las distintas cohortes//
    // creo un constante que contiene la unificación de las diferentes cohortes//

    const Unificacion=[...cohorte01,...cohorte02,...cohorte03,...cohorte04];

    
    // aqui realizo el primer console.log, para poder diferenciar los distintos resultados//
    console.log(`Ejemplo--01-----Muestra el Resultado de todas las Diferentes Cohortes-----`);

    // aqui llamo a la función recorrer cohorte versión 03 y le paso los valores de la unificación//
    fnRecorrerCohorteV3(Unificacion);

    // realizo console.log que me diferencia los resultados del primer ejemplo con el segundo donde ya se mezcla los vectores de las [...cohorte01,...cohorte04//

    console.log(`Ejemplo--02--Muestra el Resultado de las Cohortes1 y Cohortes2 `);

// en este sector se llamo a la función recorrer cohorte versión 03 y se le asigno valor de los vector cohorte01 y el vector cohorte04//

    fnRecorrerCohorteV3([...cohorte01,...cohorte04]);

  //********************************************************************************************///

  /*PUNTO 03 TRABAJO PRÁCTICO NÚMERO 04, Aqui vamos a emplear el metodo filter, que separa aplica un filtro y me devuelve un nuevo vector*/


  // primero aqui crea una constante que va a recorrer el vector de Unificación y aplicarle el metodo Filter//
  // segundo se aplica una arrow fuction corta  se le pasa el parametro alumno con los atributos de los alumnos a mostrar//

  const AlumnosAprobados = Unificacion.filter(alumno=> alumno.nota_final > 5);
  const AlumnosDesaprovados= Unificacion.filter(alumno=> alumno.nota_final <= 5);



  // primer paso- aqui se llama a la función y se envia los alunmos aprobados//
  // segundo paso se muestra por consola la lista de los alumnos Aprovados//

 console.log(`Lista de Alumnos ---Aprobados---`)

  fnRecorrerCohorteV3(AlumnosAprobados);

  console.log(`Lista de Alumnos ---Desaprovados---`)

  fnRecorrerCohorteV3(AlumnosDesaprovados);







};