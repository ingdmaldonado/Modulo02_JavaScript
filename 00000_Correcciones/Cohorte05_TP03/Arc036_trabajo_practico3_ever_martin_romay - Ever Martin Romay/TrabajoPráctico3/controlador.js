
import {calculoPrecioDeVenta} from "./funciones.js";

import {promedioDeTres} from "./funciones.js";

import {determinarCalificacion} from "./funciones.js";

import {calcularSobreTasa} from "./funciones.js";

import {calcularImporteAgua} from "./funciones.js";

import {calcularTasaSubsuelo} from "./funciones.js";

import {calcularTasaFiscalizacion} from "./funciones.js";

import {calcularDosisDeInsulina} from "./funciones.js";

import {contarCantidadVocales} from "./funciones.js";

import {contarCantidadConsonantes} from "./funciones.js";

import {determinarCantidadLetrasS} from "./funciones.js";

import {determinarCantidadEspaciosEnBlanco} from "./funciones.js";

import {determinarSiNoTieneNumeros} from "./funciones.js";

{

    console.log(`La aplicación está corriendo`);

    /* Ejercicio 13 */

    // Aqui se va a declarar una variable para el importe de compra del producto //

    
    let importCompra = 0;

    importCompra = Number(prompt(`Ingrese un importe`));

    // Aqui se va a declarar una variable para el margen de ganancia //

    let margenGanancia = 0;

    margenGanancia = Number(prompt(`Ingrese el margen de ganancia`));

    /* Ahora se debe invocar a la función para que realice el calculo
    de el precio de venta del producto con el margen de ganancia */

    let resultado1 = calculoPrecioDeVenta(importCompra, margenGanancia);

    // Aqui se mostrara el resultado //

    console.log(`La salida del ejercicio 13 es ${resultado1}`);

    /* Ejercicio 14 */

    // Aqui se declaran las tres notas de los alumnos //

    let nota1 = 0;
    let nota2 = 0;
    let nota3 = 0;

    nota1 = Number(prompt(`Ingrese la nota 1`));
    nota2 = Number(prompt(`Ingrese la nota 2`));
    nota3 = Number(prompt(`Ingrese la nota 3`));


    /* Ahora se va a invocar a la función que realiza
    el calculo de promedio de las tres notas */

    let resultado2 = promedioDeTres(nota1, nota2, nota3);

    // Aqui se muestra el resultado del promedio //

    console.log(`La salida del ejercicio 14 es Promedio: ${resultado2}`);

    /* Ejercicio 15 */

    /* Ahora se va a invocar a la función que se
    encarga de determinar la condición de una nota */

    // Aqui se declara la variable para la nota //

    let notaProm = 0;

    // Aqui se pedira ingreso a la nota //
    notaProm = Number(prompt(`Ingrese la nota a calificar`));

    // Aqui se guarda el mensaje que devuelve la función una vez ingresada la nota //

    let mensaje = determinarCalificacion(notaProm);

    let resultado3 = mensaje;

    // Aqui se mostrara el mensaje // 

    console.log(`La salida del ejercicio 15 es ${resultado3}`);

    /* Ejercicio 16 */

    // Aqui declaro la variable para el tipo de bebida //

    let tipoDeBebida = 0;

    tipoDeBebida = Number(prompt(`Ingrese el tipo de bebida`));

    // Aqui declaro la variable para el importe base //

    let importBase = 0;

    importBase = Number(prompt(`Ingrese un importe`));

    // Aqui se guarda el resultado obtenido en la función calcularSobreTasa()

    let resultado4 = calcularSobreTasa(tipoDeBebida, importBase);

    // Aqui muestro el resultado obtenido //

    console.log(`La salida del ejercicio 16 es ${resultado4}`);

    /* Ejercicio 17 */
    
    // Aqui voy a declarar una variable para los metros cubicos //

    let metrosCubicos = 0;

    metrosCubicos = Number(prompt(`Ingrese la cantidad de metros cubicos`));

    // Aqui voy a guardar el resultado obtenido //

    let resultado5 = calcularImporteAgua(metrosCubicos);

    // Aqui muestro el resultado //

    console.log(`La salida del ejercicio 17 es ${resultado5}`);

    /* Ejercicio 18 */

    // Aqui voy a declarar la variable para el importe base //

    let importBaseAgua = 0;

    importBaseAgua = Number(prompt(`Ing. el importe de servicio de agua para calcular la tasa de subsuelo`));

    // Aqui voy a guardar el resultado //

    let resultado6 = calcularTasaSubsuelo(importBaseAgua);

    // Aqui muestro el resultado de la tasa de subsuelo del agua //

    console.log(`La salida del ejercicio 18 es ${resultado6}`);

    /* Ejercicio 19 */

    // Aqui voy a declarar la variable para el importe base del servicio publico de agua //

    let importeBaseServicioAgua = 0;

    importeBaseServicioAgua = Number(prompt(`Ing. un importe de servicio de agua para calcular la tasa de fiscalizacion`));

    // Aqui voy a guardar el resultado de la tasa de fiscalizacion del ENRE //

    let resultado7 = calcularTasaFiscalizacion(importeBaseServicioAgua);

    // Aqui muestro el resultado de la tasa de fiscalizacion //

    console.log(`La salida del ejercicio 19 es ${resultado7}`);

    /* Ejercicio 20 */

    // Aqui se pedira el nivel de glucosa del paciente //

    let nivelDeGlucosa = 0;

    nivelDeGlucosa = Number(prompt(`Ing. el nivel de glucosa en sangre`));

    // Aqui se pedira el peso corporal del paciente //

    let pesoCorporal = 0;

    pesoCorporal = Number(prompt(`Ing. el peso corporal`));

    // Aqui se pedira el tipo de diabetes //

    let tipoDeDiabetes = 0;

    tipoDeDiabetes = Number(prompt(`Ing. el tipo de diabetes`));

    // Aqui se mostrara la dosis de insulina para el paciente //

    let resultado8 = calcularDosisDeInsulina(nivelDeGlucosa, pesoCorporal, tipoDeDiabetes);

    console.log(`La salida del ejercicio 20 es ${resultado8}`);

    /* Ejercicio 21 */

    // Aqui se pedira la cadena de texto //

    let cadena = prompt(`Ing. una cadena de texto para contar las vocales`);

    // Aqui se mostrara la cantidad de vocales //

    let resultado9 = contarCantidadVocales(cadena);

    console.log(`La salida del ejercicio 21 es ${resultado9}`);

    /* Ejercicio 22 */

    // Aqui se pedira la cadena de texto //

    let cadenaDeTexto = prompt(`Ing. una cadena de texto para contar las consonantes`);

    // Aqui se mostrara la cantidad de consonantes //

    let resultado10 = contarCantidadConsonantes(cadenaDeTexto);

    console.log(`La salida del ejercicio 22 es ${resultado10}`);

    /* Ejercicio 23 */

    // Aqui se pedira la palabra //

    let frase = prompt(`Ing. una palabra para contar las letras S (mayusculas o minusculas)`);

    // Aqui se mostrara las letras 'S' que hay en la palabra //

    let resultado11 = determinarCantidadLetrasS(frase);

    console.log(`La salida del ejercicio 23 es ${resultado11}`);

    /* Ejercicio 24 */

    let cadenaTexto2 = prompt(`Ing. una cadena de texto para contar los espacios en blanco`);

    // Aqui se mostrara los espacios en blanco de la cadena //

    let resultado12 = determinarCantidadEspaciosEnBlanco(cadenaTexto2);

    console.log(`La salida del ejercicio 24 es ${resultado12}`);

    /* Ejercicio 25 */

    // Aqui se pedira la cadena //

    let cadenaTexto3 = prompt(`Ing. la cadena para contar si contiene numeros`);

    // Aqui se mostrara si contiene numeros o no la cadena //

    let resultado13 = determinarSiNoTieneNumeros(cadenaTexto3);

    console.log(`La salida del ejercicio 25 es ${resultado13}`);
}