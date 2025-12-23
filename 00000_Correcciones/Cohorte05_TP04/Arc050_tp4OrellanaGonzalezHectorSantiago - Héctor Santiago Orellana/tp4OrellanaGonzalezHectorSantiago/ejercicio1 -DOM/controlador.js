// aqui importo los datos desde datos.js//
import {cohorte01,cohorte02,cohorte03,cohorte04} from "./dato.js";

// aqui importo la funcion desde modelos.js//
import {fnRecorrerCohorte} from "./modelo.js";

// aqui muestro por consola los resultados obtenidos//

window.onload=()=>{

    /* aqui creo las constante que me permitira crear los boton para capturar los datos de los alumnnos de las diferentes Cohortes01, Cohortes02,*/
    const idBtCohorte01 = document.querySelector("#idBtCohorte01"); 
    const idBtCohorte02 = document.querySelector("#idBtCohorte02"); 
    const idBtCohorte03 = document.querySelector("#idBtCohorte03"); 

     
    console.log(`La Aplicación Muestra los Alumnos de las Direfentes Cohortes`);

    /* Alumnos de la Cohorte01 aqui empleo la funcion oncick, seguidamwente disparo la arrow fuction, y en el cuerpo de la arrow fuction muesto los datos que deseo visualizar cuando el usuario realice Click*/

    idBtCohorte01.onclick=()=>{

    console.log(`********* Alumnos de la Cohorte01*********`);
   
    fnRecorrerCohorte(cohorte01);

  };

 /* Alumnos de la Cohorte02 aqui empleo la funcion oncick, seguidamwente disparo la arrow fuction, y en el cuerpo de la arrow fuction muesto los datos que deseo visualizar cuando el usuario realice Click*/

  idBtCohorte02.onclick=()=>{

    console.log(`********* Alumnos de la Cohorte02*********`);
   
  fnRecorrerCohorte(cohorte02);    

 };
    /* Alumnos de la Cohorte03 aqui empleo la funcion oncick, seguidamwente disparo la arrow fuction, y en el cuerpo de la arrow fuction muesto los datos que deseo visualizar cuando el usuario realice Click*/

  idBtCohorte03.onclick=()=>{

    console.log(`********* Alumnos de la Cohorte03*********`);
   
 fnRecorrerCohorte(cohorte03);
  };  


   /* Alumnos de la Cohorte04 aqui empleo la funcion oncick, seguidamwente disparo la arrow fuction, y en el cuerpo de la arrow fuction muesto los datos que deseo visualizar cuando el usuario realice Click*/

  idBtCohorte04.onclick=()=>{

    console.log(`********* Alumnos de la Cohorte04*********`);
   
 fnRecorrerCohorte(cohorte04);

  };  
   

};
