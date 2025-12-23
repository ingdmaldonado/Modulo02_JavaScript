// aqui importo los datos desde datos.js//
import {cohorte01,cohorte02,cohorte03,cohorte04} from "./dato.js";

// aqui importo la funcion desde modelos.js//
import {fnRecorrerCohorte} from "./modelo.js";

// aqui muestro por consola los resultados obtenidos//

window.onload=()=>{
     
    console.log(`La Aplicación esta corriendo`);

   fnRecorrerCohorte(cohorte01);
   fnRecorrerCohorte(cohorte02);
   fnRecorrerCohorte(cohorte03);
   fnRecorrerCohorte(cohorte04);


   
 

};
