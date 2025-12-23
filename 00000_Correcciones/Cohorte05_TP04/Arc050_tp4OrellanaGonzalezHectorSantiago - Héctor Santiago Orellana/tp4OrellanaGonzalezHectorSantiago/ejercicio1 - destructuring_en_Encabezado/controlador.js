//Aqui estoy importando los datos de las cortes//
import {cohorte01,cohorte02,cohorte03,cohorte04} from "./dato.js";
// Aqui estoy importando la funcion desde modulo.js/
import {fnRecorrerCohorteV3} from "./modulo.js"


window.onload=()=>{
     
    console.log(`La Aplicación esta corriendo`);

   
   fnRecorrerCohorteV3(cohorte01);
   fnRecorrerCohorteV3(cohorte02);
   fnRecorrerCohorteV3(cohorte03);
   fnRecorrerCohorteV3(cohorte04);


};
