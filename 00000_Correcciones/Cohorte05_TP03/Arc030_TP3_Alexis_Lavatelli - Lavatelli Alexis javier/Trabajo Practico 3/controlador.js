import { calcularPromedio,presioDeVenta,clasificarNota,calcularSobretasa,calcularImporteAgua,calcularTasaSubsuelo,calcularTasaENRE,calcularInsulina,contarVocales,contarConsonantes,contieneDosS,contieneTresEspacios,noContieneNumeros} from "./funcion.js";

window.onload = ()=>{

    console.log (`la pagina esta cargando`)

    /* Ejemplo Invocacion ejercicio Nro. 13 */

    let resultado1 = presioDeVenta (700,100);
    console.log(`salida ejercicio 13`);
    console.log(resultado1);

    /*ejemplo Invocacion ejercicio Nro. 14 */

    let resultado2 = calcularPromedio(10,8,7);
    console.log(`salida ejercicio 14`);
    console.log(resultado2);

    /*ejemplo Invocacion ejercicio Nro 15 */

    let resultado3 = clasificarNota(7);
    console.log(`salida ejercicio 15`);
    console.log(resultado3);

    /*ejemplo Invocacion ejercicio Nro 16 */

    let resultado4 = calcularSobretasa(3,72000000);
    console.log(`salida ejercicio 16`);
    console.log (resultado4);

    /*ejemplo Invocacion ejercicio Nro 17 */
    let resultado5 = calcularImporteAgua(30);
    console.log(`salida ejercicio 17 - consumo 30 m3`);
    console.log(resultado5);
        
    resultado5 = calcularImporteAgua(55);
    console.log(`salida ejercicio 17 - consumo 55 m3`);
    console.log(resultado5);

    resultado5 = calcularImporteAgua(85);
    console.log(`salida ejercicio 17 - consumo 85 m3`);
    console.log(resultado5);

    /* Ejemplo Invocacion ejercicio Nro. 18 */
    let resultado6 = calcularTasaSubsuelo(20000);
    console.log(`salida ejercicio 18`);
    console.log(resultado6);

    /* Ejemplo Invocacion ejercicio Nro. 19 */
    let resultado7 = calcularTasaENRE(30000);
    console.log(`salida ejercicio 19`);
    console.log(resultado7);

    /* Ejemplo Invocacion ejercicio Nro. 20 */
    let resultado8 = calcularInsulina(200, 80, 1);
    console.log(`salida ejercicio 20`);
    console.log(resultado8);

    /* Ejemplo Invocacion ejercicio Nro. 21 */
    let resultado9 = contarVocales("Hola Profesor, como estas?");
    console.log(`salida ejercicio 21`);
    console.log(`el texto contiene ${resultado9} vocales`);

    /* Ejemplo Invocacion ejercicio Nro. 22 */
    let resultado10 = contarConsonantes("Hola Profesor, como estas?");
    console.log(`salida ejercicio 22`);
    console.log(`El texto contiene ${resultado10} consonantes`);

    /* Ejemplo Invocacion ejercicio Nro. 23 */
    let resultado11 = contieneDosS("Sospechoso");
    console.log(`salida ejercicio 23`);
    console.log(`¿La palabra contiene al menos dos 's'? ${resultado11}`);

    /* Ejemplo Invocacion ejercicio Nro. 24 */
    let resultado12 = contieneTresEspacios("Hola  Profesor  como  estas");
    console.log(`salida ejercicio 24`);
    console.log(`¿El texto contiene al menos tres espacios? ${resultado12}`);

    /* Ejemplo Invocacion ejercicio Nro. 25 */
    let resultado13 = noContieneNumeros("Tengo 33 años");
    console.log(`salida ejercicio 25`);
    console.log(`¿La cadena NO contiene números? ${resultado13}`);



};


