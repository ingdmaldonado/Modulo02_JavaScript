
//import {precioDeVenta,promedioDeTres} from "./funciones.js"

import {precioDeVenta} from "./funciones.js";
import {promedioDeTres} from "./funciones.js";
import {notaPromedio1} from "./funciones.js";
import {impuestoTasa} from "./funciones.js";
import {tasaSubsuelo} from "./funciones.js";
import {calculoImporteAgua} from "./funciones.js";
import {tasaFiscalizacion} from "./funciones.js";
import {calcularDosis} from "./funciones.js";
import {cadenaVocales} from "./funciones.js";
import {cantidadConsonantes} from "./funciones.js";
import {cantidadS} from "./funciones.js"
import {tresEspacios} from "./funciones.js";
import {noContieneNumeros} from "./funciones.js";

window.onload = ()=>{

    console.log(`la pagina esta cargada`);

    /* Ejemplo Invocación Ejercicio Nro. 13 */

    let resultado1 = precioDeVenta(700,500);

    console.log (`EJERCICIO N°13. El precio de venta es de: ${resultado1}.`);

    /* Ejemplo Invocación Ejercicio Nro. 14 */

    let resultado2 = promedioDeTres(10,8,7);
    console.log (`EJERCICIO N°14. El promedio de las notas obtenidas es de: ${resultado2}.`);

    /* Ejemplo Invocación Ejercicio Nro. 15 */
    
    let resultado3 = notaPromedio1(10);
    console.log (`EJERCICIO N°15. La nota promedio es: ${resultado3}.`);

    /* Ejemplo Invocación Ejercicio Nro. 16 */
    
    let resultado4 = impuestoTasa(1,600);
    console.log (`EJERCICIO N°16. El promedio obtenido es: ${resultado4}.`);

     /* Ejemplo Invocación Ejercicio Nro. 17 */
    
    let resultado5 = calculoImporteAgua (400);
    console.log (`EJERCICIO N°17. El importe base a pagar es: ${resultado5}.`);

    /* Ejemplo Invocación Ejercicio Nro. 18 */

    let resultado6 = tasaSubsuelo (1500);
    console.log (`EJERCICIO N°18. La tasa de impuesto es de: ${resultado6}.`);

    /* Ejemplo Invocación Ejercicio Nro. 19 */

    let resultado7 = tasaFiscalizacion (3000);
    console.log (`EJERCICIO N°19. La tasa de fiscalizacion es de: ${resultado7}.`);

    /* Ejemplo Invocación Ejercicio Nro. 20 */

    let resultado8 = calcularDosis (540);
    console.log (`EJERCICIO N°20. La dosis recomendada de insulina es: ${resultado8} unidades.`);

    /* Ejemplo Invocación Ejercicio Nro. 21 */
    
    let resultado9 = cadenaVocales ("JAVASCRIPT");
    console.log (`EJERCICIO N°21. La cantidad de vocales es de: ${resultado9} vocales`);

    /* Ejemplo Invocación Ejercicio Nro. 22 */
    
    let resultado10 = cantidadConsonantes ("JAVASCRIPT");
    console.log (`EJERCICIO N°22. La cantidad de consonantes es de: ${resultado10} consonantes`);

    /* Ejemplo Invocación Ejercicio Nro. 23 */
    
    let resultado11 = cantidadS (`HACER`);
    console.log (`EJERCICIO N°23. La cantidad de S que contiene es: ${resultado11}`);

    /* Ejemplo Invocación Ejercicio Nro. 24 */

    let resultado12 = tresEspacios (`BIENVENIDO PARA USTED`);
    console.log (`EJERCICIO N°24. La cantidad de espacio que contiene el texto es: ${resultado12}`);

    /* Ejemplo Invocación Ejercicio Nro. 25 */

    let resultado13 = noContieneNumeros (`LOS MOSQUETEROS`);
    console.log (`EJERCICIO N°25. La cantidad de numeros que contiene es: ${resultado13}`);
}