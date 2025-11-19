
//import {precioDeVenta,promedioDeTres} from "./funciones.js"

import {calcularCantidadConsonantes, precioDeVenta} from "./funciones.js";
import {promedioDeTres} from "./funciones.js";
import {evaluarNota} from "./funciones.js";
import {calcularDosisInsulina} from "./funciones.js";
import {calcularCantidadVocales} from "./funciones.js";
import {contieneDosLetrasS} from "./funciones.js";
import {contieneTresEspacios} from "./funciones.js"; 
import {noContieneNumeros} from "./funciones.js";
import {calcularSobreTasa} from "./funciones.js";
import {calcularImporteBaseAgua} from "./funciones.js";
import {calcularTasaDeSubsuelo} from "./funciones.js";
import {calcularTasaFiscalizacion } from "./funciones.js";


window.onload = ()=>{

    console.log(`la pagina esta cargada`);

    /* Invocación Ejercicio Nro. 13 */

    let resultado1 = precioDeVenta(200,300);

    console.log(`Ejercicio N° 13: Precio de Venta: ${resultado1}`);

    /* Invocación Ejercicio Nro. 14 */

    let resultado2 = promedioDeTres(10,10,10);
    console.log(`Ejercicio N° 14: Promedio de Notas: ${resultado2}`);

    /*Invocación Ejercicio N° 15 */
    let resultado3= evaluarNota(1);
    console.log (`Ejercicio N° 15: Resultado Evaluación: ${resultado3}`);

    /*Invocación Ejercicio Nro. 16*/
    let tipoBebida=3; //1=Agua envase plástico 2= Agua envase retornable, etc
    let importeBase=2500;
    console.log(`Ejercicio N°:16-  Tipo de bebida: ${tipoBebida} - Importe base: ${importeBase}`);
    let resultado4= calcularSobreTasa(tipoBebida, importeBase);
    console.log (`Sobretasa a aplicar: ${resultado4}`);

    /*Invocación Ejercicio N° 17 */
    let mtsCubicosLeidos=85;
    console.log(`Ejercicio N° 17: Metros cúbicos leidos en medidor: ${mtsCubicosLeidos} `);
    let resultado5= calcularImporteBaseAgua(mtsCubicosLeidos);
    console.log (`Resultado Importe Base: ${resultado5}`);

    /*Invocación Ejercicio Nro. 18*/

    //let importeBase1=51887;
    let importeBase1=resultado5;
    console.log(`Ejercicio N° 18:  Importe Base: ${importeBase1}`);
    let resultado6=calcularTasaDeSubsuelo(importeBase1);
    console.log(`Resultado  Tasa de Subsuelo-: ${resultado6}`);

    /*Invocación Ejercicio Nro. 19 */

    let importeBase2=resultado5;
    console.log(`Ejercicio N° 19:  Importe Base: ${importeBase2}`);
    let resultado7=calcularTasaDeSubsuelo(importeBase2);
    console.log(`Resultado Tasa de Fiscalización: ${resultado7}`);


    /*Invocación Ejercicio Nro. 20*/
    let nivelGlucosa=197;
    let pesoCorporal=87;
    let tipoDeDiabetes=2;     
    let resultado9= calcularDosisInsulina(nivelGlucosa, pesoCorporal, tipoDeDiabetes);
    
    console.log(`Ejercicio N°20: Nivel de Glucosa: ${nivelGlucosa}- Peso Corporal: ${pesoCorporal}- Tipo de Diabetes: ${tipoDeDiabetes}`)

    console.log(`Dosis de Insulina a aplicar: ${resultado9}`);

    /*Invocación Ejercicio Nro. 21*/
    let texto="Muercielago extraño"; 
    let resultado10= calcularCantidadVocales(texto);
    console.log(`Ejercicio N°21- Texto ingresado: "${texto}" - Cantidad de vocales del texto ingresado: ${resultado10}`);

    /*Invocación Ejercicio Nro. 22*/
    let cadena="Muercielago extraño";
    let resultado11= calcularCantidadConsonantes(cadena);
    console.log(`Ejercicio N°22- Texto ingresado: "${cadena}" - Cantidad de consonantes del texto ingresado: ${resultado11}`);

    /*Invocación Ejercicio Nro. 23*/
    let palabra="oso";
    let resultado12= contieneDosLetrasS(palabra);
    console.log(`Ejercicio N°23- Texto ingresado: "${palabra}" - ¿Contiene dos letras 's'? : ${resultado12}`);

    /*Invocación Ejercicio Nro. 24*/
    let cadena1="122 kakak   5"; 
    let resultado13= contieneTresEspacios(cadena1)
    console.log(`Ejercicio N°24- Texto ingresado: "${cadena1}" - ¿Contiene tres espacios en blanco?  : ${resultado13}`);

   /*Invocación Ejercicio Nro. 25*/
    let cadena2="Una prueba sin números"; 
    let resultado14= noContieneNumeros(cadena2);
    console.log(`Ejercicio N°25- Texto ingresado: "${cadena2}" - La cadena no contiene números  : ${resultado14}`);

   



}