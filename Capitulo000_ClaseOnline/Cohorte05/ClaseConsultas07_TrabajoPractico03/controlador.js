
//import {precioDeVenta,promedioDeTres} from "./funciones.js"

import {precioDeVenta} from "./funciones.js";
import {promedioDeTres} from "./funciones.js";
import {calcularSobreTasa} from "./funciones.js";
import {calcularImporteBaseAgua} from "./funciones.js";

window.onload = ()=>{

    console.log(`la pagina esta cargada`);

    /* Ejemplo Invocación Ejercicio Nro. 13 */

    let resultado1 = precioDeVenta(700,500);
    console.log(resultado1);

    /* Ejemplo Invocación Ejercicio Nro. 14 */

    let resultado2 = promedioDeTres(10,8,7);
    console.log(resultado2);


    /* Ejemplo Invocación Ejercicio Nro. 16 */
    let resultado3 = calcularSobreTasa(3,72000000);
    console.log(resultado3);

    /* Ejemplo Invocación Ejercicio Nro. 17 */

    let resultado4 = calcularImporteBaseAgua(20);
    console.log(`Para 20 mts. cubicos ${resultado4}`);

    let resultado5 = calcularImporteBaseAgua(49);
    console.log(`Para 49 mts. cubicos ${resultado5}`);

    let resultado6 = calcularImporteBaseAgua(68);
    console.log(`Para 68 mts. cubicos ${resultado6}`);

    let resultado7 = calcularImporteBaseAgua(99);
    console.log(`Para 99 mts. cubicos ${resultado7}`);


}