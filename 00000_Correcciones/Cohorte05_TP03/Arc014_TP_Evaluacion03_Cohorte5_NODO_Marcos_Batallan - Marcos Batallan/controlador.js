

/**************************************************
AQUÍ IMPORTO TODAS LAS FUNCIONES DESDE EL MODULO
**************************************************/

import {precioVenta} from "./modulo_funciones.js"
import {notasObtenidas} from "./modulo_funciones.js"
import {notaPromedio} from "./modulo_funciones.js"
import {impuestoSobreTasa} from "./modulo_funciones.js"
import {calcularImporteAgua} from "./modulo_funciones.js"
import {tasaDeSubsuelo} from "./modulo_funciones.js"
import {tasaDeFiscalizacion} from "./modulo_funciones.js"
import {dosisDeInsulina} from "./modulo_funciones.js"
import {cantidadDeVocales} from "./modulo_funciones.js"
import {cantidadDeConsonantes} from "./modulo_funciones.js"
import {palabraConS} from "./modulo_funciones.js"
import {espaciosEnBlanco} from "./modulo_funciones.js"
import {contieneNumeros} from "./modulo_funciones.js"


window.onload = () => {

    console.log(`App in now running`);


    /******************************************
    INVOCACIÓN DE FUNCIÓN PARA EJERCICIO N° 13
    ******************************************/

    //aquí declaro la variable en donde se ingresan los dos parámetros de la función
    let montoFinal = precioVenta(15000,80); 

    //muestro por consola el monto final a pagar por el cliente
    console.log(`Salida del Ejercicio N° 13 => El precio de venta es: ${montoFinal}`);


    /******************************************
    INVOCACIÓN DE FUNCIÓN PARA EJERCICIO N° 14
    ******************************************/

    //declaro la variable para el ingreso de parámetro => 3 notas recibidas
    let notaFinal = notasObtenidas(8,9,8);

    //muestro el premedio de las 3 notas
    console.log(`Salida del Ejercicio N° 14 => El promedio del alumno es: ${notaFinal}`);


    /******************************************
    INVOCACIÓN DE FUNCIÓN PARA EJERCICIO N° 15
    ******************************************/

    //declaro la variable para el ingreso de parámetro => promedio del alumno 
    let estadoDelAlumno = notaPromedio(9);

    //muestro en formato texto el estado del alumno
    console.log(`Salida del Ejercicio N° 15 => ${estadoDelAlumno}`);


    /******************************************
    INVOCACIÓN DE FUNCIÓN PARA EJERCICIO N° 16
    ******************************************/

    //declaro la variable para ingresar los parámetros => tipo de bebida y monto base
    let impuesto = impuestoSobreTasa (2,72000000);

    //muestro por consola el total a pagar de impuesto Sobre Tasa
    console.log(`Salida del Ejercicio N° 16 => El impuesto Sobre Tasa es: ${impuesto}`);


    /******************************************
    INVOCACIÓN DE FUNCIÓN PARA EJERCICIO N° 17
    ******************************************/

    //declaro la variable en donde igreso el parámetro mts3 de agua consumidos
    let mts3Consumidos = calcularImporteAgua (85);

    //muestro por consola el monto total a pagar en la factura de acuerdo al consumo
    console.log(`Salida del Ejercicio N° 17 => El Importe de la factura es: ${mts3Consumidos}`);


    /******************************************
    INVOCACIÓN DE FUNCIÓN PARA EJERCICIO N° 18
    ******************************************/

    //declaro la variable en donde igreso el parámetro correspondiente al importe base de una factura
    let montoTasaSubsuelo = tasaDeSubsuelo (51887);

    //muestro por consola el monto total del 3% de la tasa de subsuelo
    console.log(`Salida del Ejercicio N° 18 => El monto de la Tasa de Subsuelo es: ${montoTasaSubsuelo}`);


    /******************************************
    INVOCACIÓN DE FUNCIÓN PARA EJERCICIO N° 19
    ******************************************/

    //declaro la variable en donde igreso el parámetro correspondiente al importe base de una factura
    let montoTasaFiscalizacion = tasaDeFiscalizacion (51887);

    //muestro por consola el monto total del 1.2% de la tasa de fiscalización ENRE
    console.log(`Salida del Ejercicio N° 19 => El monto de la Tasa de Fiscalización ENRE es: ${montoTasaFiscalizacion}`);
    

    /******************************************
    INVOCACIÓN DE FUNCIÓN PARA EJERCICIO N° 20
    ******************************************/

    //declaro la variable en donde igreso los parámetros para calcular la dosis de insulina
    let insulinaRecomendada = dosisDeInsulina (1,185,70);

    //muestro la dosis recomendada
    console.log(`Salida del Ejercicio N° 20 => La dosis de Insulina recomendada para el paciente es de: ${insulinaRecomendada} U/ml`);


    /******************************************
    INVOCACIÓN DE FUNCIÓN PARA EJERCICIO N° 21
    ******************************************/

    //declaro la variable para ingresar el parámetro, que en este caso es el texto
    let totalVocales = cantidadDeVocales ("Realizar una arrow function que reciba como parametro una cadena de texto y que devuelva la cantidad de vocales “mayusculas y/o minusculas” que tiene la misma.");

    //muestro por consola el total de vocales que posee el texto
    console.log (`Salida del Ejercicio N° 21 => Durante el recorrido del texto se encontraron ${totalVocales} vocales`);


    /******************************************
    INVOCACIÓN DE FUNCIÓN PARA EJERCICIO N° 22
    ******************************************/

    //realicé el mismo procedimiento del ejercicio anterior, pero para contar las consonantes del texto
    let totalConsonantes = cantidadDeConsonantes ("Realizar una arrow function que reciba como parametro una cadena de texto y devuelva cuantas consonantes contiene (mayusculas o minusculas). Es decir consideramos consonante a todo caracter que NO SEA VOCAL.");

    console.log (`Salida del Ejercicio N° 22 => Durante el recorrido del texto se encontraron ${totalConsonantes} consonantes`);


    /******************************************
    INVOCACIÓN DE FUNCIÓN PARA EJERCICIO N° 23
    ******************************************/

    //declaro la variable para el ingreso del parámetro "Palabra"
    let cantidadS = palabraConS ("servicio");

    //muestro por consola la variablle boolean. Si la palabra tiene 2 "S" => TRUE, sino FALSE
    console.log(`Salida del Ejercicio N° 23 => ¿La palabra ingresada tiene 2 "S"? ${cantidadS}`);


    /******************************************
    INVOCACIÓN DE FUNCIÓN PARA EJERCICIO N° 24
    ******************************************/

    //realicé el mismo procedimiento del ejercicio anterior, pero para contar los espacios en blanco
    let espacios = espaciosEnBlanco ("al menos tres espacios");

    console.log(`Salida del Ejercicio N° 24 => ¿El texto ingresado tiene 3 espacios en blanco? ${espacios}`);


    /******************************************
    INVOCACIÓN DE FUNCIÓN PARA EJERCICIO N° 25
    ******************************************/

    //declaro la variable para ingresar como parámetro un texto
    let tieneNumero = contieneNumeros ("Definir una arrow function que reciba como parametro una cadena de texto y determine si la misma no contiene ningun digito numerico del 0 al 9");

    //muestro por consola si es verdadero o falso que en el texto no hay ningún dígito numérico
    console.log(`Salida del Ejercicio N° 25 => ¿El texto ingresado NO CONTIENE ningún dígito numérico del 0 al 9? ${tieneNumero}`);
    
}