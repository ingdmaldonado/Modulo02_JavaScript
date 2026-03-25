
import {cohorte01,cohorte02,cohorte03,cohorte04} from "./datos.js";

import {fnRecorrerCohorte,fnRecorrerCohorteV2,fnRecorrerCohorteV3} from "./modelo.js";


window.onload = ()=>{

    console.log(`para Marquitos Batallan`);

   

    /* forEach General */

    console.log(`------Ejemplo 01 - for Each General`)
    cohorte01.forEach((element,indice)=>{
        console.log(element,indice);
    });

    console.log(`------Ejemplo 02 - for Each con arrow function corta`);
    cohorte01.forEach(alumno => {
        console.log(`Apellido: ${alumno.apellido} - Nombres: ${alumno.nombre}`);
    })

    console.log(`------Ejemplo 03 - Utilizo una función de recorrido`);
    fnRecorrerCohorte(cohorte01);
    fnRecorrerCohorte(cohorte02);
    fnRecorrerCohorte(cohorte03);
    fnRecorrerCohorte(cohorte04);

    console.log(`------Ejemplo 04 - Utilizo una función de recorrido`);
    fnRecorrerCohorteV2(cohorte01);

    /*
    console.log(cohorte01);
    console.log(cohorte02);
    console.log(cohorte03);
    console.log(cohorte04);
    */

    console.log(`------Ejemplo 05 - Utilizo una función de recorrido`);
    fnRecorrerCohorteV3(cohorte04);


};