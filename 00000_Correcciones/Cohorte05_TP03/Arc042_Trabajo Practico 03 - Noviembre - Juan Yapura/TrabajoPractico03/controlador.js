
//import {precioDeVenta,promedioDeTres} from "./funciones.js"

import {precioDeVenta} from "./modelo.js";
import {promedioDeTres} from "./modelo.js";
import {clasificacion} from "./modelo.js";
import {calcularSobreTasa} from "./modelo.js";
import {calcularImporteBaseAgua} from "./modelo.js";
import { tasaSubsuelo } from "./modelo.js";
import { tasaFiscalizacionENRE } from "./modelo.js";
import { dosisInsulinaRecomendada } from "./modelo.js";
import { contadorVocales } from "./modelo.js";
import { contadorConsonantes } from "./modelo.js";
import { dobleS } from "./modelo.js";
import { limitador3Espacio } from "./modelo.js";
import {detectarNumero} from "./modelo.js";

window.onload = ()=>{

    console.log(`la pagina esta cargada`);

    /* Ejemplo Invocación Ejercicio Nro. 13 */

    let resultado1 = precioDeVenta(700,500);

    console.log(`punto numero 13: ${resultado1}`);

    /* Ejemplo Invocación Ejercicio Nro. 14 */

    let resultado2 = promedioDeTres(10,8,7);
    console.log(`punto numero 14: ${resultado2.toFixed(0)}`);

    /* Ejemplo Invocación Ejercicio Nro. 15 */

   
    let nota = clasificacion(resultado2);



    /* Ejemplo Invocacion Ejercicio Nro. 16 */
    
    let resultado4 = calcularSobreTasa(1,72000000);
    console.log(resultado4); 

    /* Ejemplo Invocacion Ejercicio Nro. 17 */

    let resultado5 = calcularImporteBaseAgua(20);
    console.log(`Para 20 mts. cubicos ${resultado5}`);

    let resultado6 = calcularImporteBaseAgua(49);
    console.log(`Para 49 mts. cubicos ${resultado6}`);

    let resultado7 = calcularImporteBaseAgua(68);
    console.log(`Para 68 mts. cubicos ${resultado7}`);

    let resultado8 = calcularImporteBaseAgua(99);
    console.log(`Para 99 mts. cubicos ${resultado8}`);

    /* Ejemplo invocacion Ejercicio Nro. 18 */

    let resultado9 = tasaSubsuelo(resultado5);
    console.log(`la tasa de subsuelo es ${resultado9}`);

    /* Ejemplo Invocacion Ejercicio Nro. 19 */

    let resultado10 = tasaFiscalizacionENRE(resultado5);
    console.log(`La tasa de fiscalizacion ENRE es de ${resultado10}`);

    /*Ejemplo Invocacion Ejercicio Nro. 20 */

    let resultado11 = dosisInsulinaRecomendada(150,90,1);
    console.log(`La dosis de insulina recomendada es de: ${resultado11}`);

    /*Ejemplo Invocacion Ejercicio Nro. 21 */

    let resultado12 = contadorVocales(`Habia una vez en un pueblo pequeño...`);
    console.log(`La cantidad de vocales en el texto escrito es de: ${resultado12}`);

    /*Ejemplo Invocacion Ejercicio Nro. 22 */
    let resultado13 = contadorConsonantes(`Habia una vez en un pueblo pequeño...`);
    console.log(`La cantidad de consonantes en el texto escrito es de: ${resultado13}`);

    /*Ejemplo Invocacion Ejercicio Nro. 23 */
    let resultado14 = dobleS (`En los albores de la historia...`);
    console.log(resultado14);

    /*Ejemplo Invocacion Ejercicio Nro. 24 */
    let resultado15 = limitador3Espacio(`Probando la cantidad de espacio necesario para el true...`);
    console.log(resultado15);

    /* Ejemplo Invocacion Ejercicio Nro. 25 */
    let resultado16 = detectarNumero (`Riber, de la sarten al horno con 8 partidos perdidos consecutivamente`);
    console.log(resultado16);
}

