// en este sector invoco las diferentes cohortes desde  datos.js//
import { cohorte01,cohorte02,cohorte03,cohorte04 } from "./datos.js";
// en este sector invoco la función fnRecorrerCohorteV3  que recorre las diferentes cohortes desde modulo.js//
import {fnRecorrerCohorteV3} from "./modulo.js"

window.onload=()=>{

/* Aqui capturo los datos ingresados por el usuario*/

/* aqui levanto los diferentes datos que ingreso el usuario y deseo capturar*/
const idBtAprobados= document.querySelector("#idBtAprobados"); 
const idBtDesaprobaron = document.querySelector("#idBtDesaprobaron");
const idBtCohortes01y04 = document.querySelector("#idBtCohortes01y04"); 
const idBtCohortes01020304 = document.querySelector("#idBtCohortes01020304"); 


  //*********Bloque de Código para Unificación de los Vectores de las diferentes Cohortes*******/

  // realizo un console.log para asegurarme de que la aplicación esta funcionando//
    console.log(`Aplicación Notas de Alumnos del Nodo`);

    // en este sector realizo la unificación de los vectores de las distintas cohortes//
    // creo un constante que contiene la unificación de las diferentes cohortes//

    const Unificacion=[...cohorte01,...cohorte02,...cohorte03,...cohorte04];
    
    /*  aqui creo el boton para capturar los datos de las diferentes Cohortes, para ello utilizo la funcion onclick  y disparo la arrow fuction, en el cuerpo de la arrow fuction que contiene los datos a mostar*/
  
    
    idBtCohortes01020304.onclick=()=>{

    console.log(`Ejemplo--01-----Muestra el Resultado de todas las Diferentes Cohortes-----`);
   
   fnRecorrerCohorteV3(Unificacion);
  };
    
    
/*  aqui creo el boton de las Cohortes01 y Cohortes02 para capturar los datos, para ello utilizo la funcion onclick  y disparo la arrow fuction, en el cuerpo de la arrow fuction que contiene los datos a mostar*/

idBtCohortes01y04.onclick=()=>{

   console.log(`Ejemplo--02--Muestra el Resultado de las Cohortes1 y Cohortes4 `);
  
    fnRecorrerCohorteV3([...cohorte01,...cohorte04]);
  };

    

  //********************************************************************************************///

  /*Aqui voy a emplear el metodo filter, que separa aplica un filtro y me devuelve un nuevo vector*/


  // primero aqui crea una constante que va a recorrer el vector de Unificación y aplicarle el metodo Filter//
  // segundo se aplica una arrow fuction corta  se le pasa el parametro alumno con los atributos de los alumnos a mostrar//

  const AlumnosAprobados = Unificacion.filter(alumno=> alumno.nota_final > 5);
  const AlumnosDesaprobados= Unificacion.filter(alumno=> alumno.nota_final <= 5);
    
/*  aqui creo el boton Aprobados para capturar los datos, para ello utilizo la funcion onclick  y disparo la arrow fuction, en el cuerpo de la arrow fuction que contiene los datos a mostar*/
  
idBtAprobados.onclick=()=>{

  console.log(`Lista de Alumnos ---Aprobados---`)
  fnRecorrerCohorteV3(AlumnosAprobados);
    
  };

  /*  Aqui creo el boton de los Alumnos que Desaprobaron para capturar los datos, para ello utilizo la funcion onclick  y disparo la arrow fuction, en el cuerpo de la arrow fuction que contiene los datos a mostar*/
  

  idBtDesaprobaron.onclick=()=>{

  console.log(`Lista de Alumnos ---Desaprobados---`)
  
  
    
  };


};