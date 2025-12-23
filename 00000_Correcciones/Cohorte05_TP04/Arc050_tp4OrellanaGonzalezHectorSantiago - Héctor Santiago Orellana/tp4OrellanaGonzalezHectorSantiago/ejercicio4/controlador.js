// en este sector invoco las diferentes cohortes desde  datos.js//
import { cohorte01,cohorte02,cohorte03,cohorte04 } from "./datos.js";
// en este sector invoco la función fnRecorrerCohorteV3  que recorre las diferentes cohortes desde modulo.js//
import {fnRecorrerCohorteV3} from "./modulo.js"

window.onload=()=>{

  //*********Bloque de Código para Unificación de los Vectores de las diferentes Cohortes*******/

  // realizo un console.log para aegurarme de que la aplicación esta funcionando//

const idCodigoDni =document.querySelector("#idCodigoDni");
  
const idBtnfind=document.querySelector("#idBtnsort");

console.log(`======APLICACIÓN LISTADO DE ALUMNOS Y NOTAS OBTENIDAS======`);

    
    // creo un constante que contiene la unificación de las diferentes cohortes//

    const Unificacion=[...cohorte01,...cohorte02,...cohorte03,...cohorte04];
        
  //********************************************************************************************///
/*  Aqui creo la constante que contendra la unificación de los datos de las difentes Cohortes*/
const totalAlumno=Unificacion;
  

  /* Aqui empleo el metodo sort para ordenar los datos de las diferentes Cohortes*/

  totalAlumno.sort((a,b)=>a.nota_final- b.nota_final);

/* aqui visualizo el array con los datos que contiene interiomente*/

  console.log(totalAlumno);
  
/* aqui utilizo el metodo ForEach para que me recorra y poder visualizar los atributos y los valores del vector que deseo obtener*/
  totalAlumno.forEach ((totalAlumno)=>{
    /* aqui muestro por console lo resultos obtenidos*/

    console.log(`Nombre:${totalAlumno.nombre}, Apellido:${totalAlumno.apellido}, Nota Obtenida:${totalAlumno.nota_final} `);
    
    console.log(totalAlumno.nombre,totalAlumno.apellido,totalAlumno.nota_final, );

    
  }); 
  /* Empleo la estructura creado con el metodo find para buscar los alumnos con su atributo DNI*/
  
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
 
