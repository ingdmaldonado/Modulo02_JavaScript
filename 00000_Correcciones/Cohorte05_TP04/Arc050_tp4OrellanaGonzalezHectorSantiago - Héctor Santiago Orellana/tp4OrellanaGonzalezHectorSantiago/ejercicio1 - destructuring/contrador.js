import {cohorte01,cohorte02,cohorte03,cohorte04} from "./dato.js";
import { fnRecorrerCohorteV2} from "./modulo.js"


// aqui estoy visualizando por consola una variantemejorado utilizando destructuring//
window.onload=()=>{
     
    console.log(`La Aplicación esta corriendo`);

   fnRecorrerCohorteV2(cohorte01);
   fnRecorrerCohorteV2(cohorte02);
   fnRecorrerCohorteV2(cohorte03);
   fnRecorrerCohorteV2(cohorte04);


   
 

};
