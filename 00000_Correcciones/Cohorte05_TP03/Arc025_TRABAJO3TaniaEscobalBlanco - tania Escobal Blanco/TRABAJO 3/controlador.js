
import {precioDeVenta,promedioDeTres} from "./funciones.js"
import {precioDeVenta} from "./funciones.js";
import {promedioDeTres} from "./funciones.js";
import {evaluarNota} from "./funciones.js";
 import {calcularSobreTasa} from "./funciones.js";
import {calcularImporteAgua} from "./funciones.js";
import {calcularTasaSubsuelo} from "./funciones.js";
import {calcularTasaFiscalizacionENRE} from "./funciones.js";
import {calcularDosisInsulina} from "./funciones.js";
import {contarVocales} from "./funciones.js";
import {contarConsonantes} from "./funciones.js";
import {contieneDosSS} from "./funciones.js";
import {contieneTresEspacios} from "./funciones.js";
import { sinNumeros } from "./funciones.js";

window.onload = ()=>{

    console.log(`la pagina esta cargada`);

/* Invocación Ejercicio N° 13 */

    let resultado1 = precioDeVenta(900,600);

    console.log(resultado1);

    /* Invocación Ejercicio N° 14 */

    let resultado2 = promedioDeTres(9,5,7);
    console.log(resultado2);


}

 /* Invocación Ejercicio N° 15 */

    let resultado3 = evaluarNota(4);
    console.log(`Ejercicio 15: ${resultado3}`);


/* Invocación Ejercicio N° 16 */
 let resultado4 = calcularSobreTasa(1, 2000);
    console.log(`Ejerecicio 16: ${resultado4}`);


    /* Invocación Ejercicio N° 17 */
 let resultado5 = calcularImporteAgua(70);
    console.log(`Ejerecicio 17: ${resultado5}`);

    /* Invocación Ejercicio N° 18 */
 let resultado6 = calcularTasaSubsuelo(10000);
    console.log(`Ejerecicio 18: ${resultado6}`);

     /* Invocación Ejercicio N° 19 */
 let resultado7 = calcularTasaFiscalizacionENRE(10000);
    console.log(`Ejerecicio 19: ${resultado7}`);


     /* Invocación Ejercicio N° 20 */
 let resultado8 = calcularDosisInsulina(150,70,1);
    console.log(`Ejerecicio 20: ${resultado8}`);
    
    
         /* Invocación Ejercicio N° 21 */
         let cadena= `Ejercicio numero 21`;
 let resultado9 = contarVocales(cadena);
    console.log(`Ejerecicio 21: ${resultado9}`);

            /* Invocación Ejercicio N° 22 */
         let cadena1= `Ejercicio numero 22`;
 let resultado10 = contarConsonantes(cadena);
    console.log(`Ejerecicio 22: ${resultado10}`);

               /* Invocación Ejercicio N° 23 */
         let cadena2= `Ingresar Ejercicios `;
 let resultado11 = contieneDosSS(cadena2);
    console.log(`Ejerecicio 23: ${resultado11}`);

                   /* Invocación Ejercicio N° 24 */
         let cadena3= `Ingresar Ejercicios`;
 let resultado12 = contieneTresEspacios(cadena3);
    console.log(`Ejerecicio 24: ${resultado12}`);

       /* Invocación Ejercicio N° 25 */
         let cadena4= `Ingresar Ejercicios `;
 let resultado13 = sinNumeros(cadena4);
    console.log(`Ejerecicio 25: ${resultado13}`);
