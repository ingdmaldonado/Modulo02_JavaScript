/* e esta sección invoco a la funcion*/
import { fnserviciosPublicosDeAgua } from "./modulo01.js"; /* importación de la arrow fuction*/

 
    console.log(`FACTURA DE SERVICIOS PÚBLICOS DE AGUAS DE CATAMARCA`); /*compruebo que la aplicacion este funcionando*/

  

    let resultado=fnserviciosPublicosDeAgua(155.72); /* crea variable que contenga el valor devuelto de la funcion con el valor del parametro dado*/
    let resultado1 =resultado.toFixed(2); /* convierto el valor del resultado a decimal en caso de ser necesario */

    console.log(`EL RESULTADO DEL CALCULO DE SUBSUELO ES:${resultado1} `); /* muestro en resultado de la arrow fuction*/

    




