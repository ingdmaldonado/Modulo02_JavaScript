// en este sector invoco las diferentes cohortes desde  datos.js//
import { cohorte01,cohorte02,cohorte03,cohorte04 } from "./datos.js";
// en este sector invoco la función fnRecorrerCohorteV3  que recorre las diferentes cohortes desde modulo.js//
import {fnRecorrerCohorteV3} from "./modulo.js"

window.onload=()=>{
  // realizo un console.log para aegurarme de que la aplicación esta funcionando//
    console.log(`El Programa esta funcionando`);

    // en este sector realizo la unificación de los vectores de las distintas cohortes//
    // creo un constante que contiene la unificación de las diferentes cohortes//
    const Unificacion=[...cohorte01,...cohorte02,...cohorte03,...cohorte04];

    // aqui realizo el primer console.log, para poder diferenciar los distintos resultados//
    console.log(`ejemplo----------01------`);

    // aqui llamo a la función recorrer cohorte versión 03 y le paso los valores de la unificación//

    
    fnRecorrerCohorteV3(Unificacion);

    // realizo console.log que me diferencia los resultados del primer ejemplo con el segundo donde ya se mezcla los vectores de las [...cohorte01,...cohorte04//

    console.log(`ejemplo----------02------`);

// en este sector se llamo a la función recorrer cohorte versión 03 y se le asigno valor de los vector cohorte01 y el vector cohorte04//
    fnRecorrerCohorteV3([...cohorte01,...cohorte04]);

};