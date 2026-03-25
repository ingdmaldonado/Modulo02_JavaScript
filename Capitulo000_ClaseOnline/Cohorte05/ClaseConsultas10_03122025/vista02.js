
import {cohorte01,cohorte02,cohorte03,cohorte04} from "./datos.js";

import {fnRecorrerCohorteV3} from "./modelo.js";

window.onload = ()=>{

    console.log("punto 2 is running");

    /* Spread es un operador de propagacion.
    que significa como todos los elementos
    de algo. y como sería.

    sería así => ...algo */

    /* SPREAD OPERATOR Sirve para VECTORES
    como para OBJETOS */

    const Unificacion = [...cohorte01,...cohorte02,...cohorte03,...cohorte04];

    console.log(Unificacion);

    /* Ejemplo 01 - Invoco la funcion pasandole como
    parametro la fusion de los 4 vectores. que se
    unieron con Spread Operator => Spread Operator
    de VECTORES */

    console.log(`---- Ejemplo 01 ------`);
    fnRecorrerCohorteV3(Unificacion);

    /* Ejemplo 02 - Invoco la función, y en el 
    parametro de entada de la invocación. cree un
    vector donde fusiono por Spread Operator
    el vector de la cohorte01 con el de la cohorte 04 */

    console.log(`---- Ejemplo 02 ------`);
    fnRecorrerCohorteV3([...cohorte01,...cohorte04]);


    /* Punto 03 - del TRABAJO PRÁCTICO. NRO. 04
    
    Vamos a utilizar el metodo filter. que 
    separa, aplica un filtro y me devuelve un
    nuevo vector.
    */

    const AlumnosAprobados = Unificacion.filter(alumno => alumno.nota_final >5);

    const AlumnosDesaprobados = Unificacion.filter(alumno => alumno.nota_final <= 5);

    console.log(`---- Alumnos Aprobados ------`);

    fnRecorrerCohorteV3(AlumnosAprobados);

    console.log(`----- Alumnos Desaprobados -----`);
    
    fnRecorrerCohorteV3(AlumnosDesaprobados);


}